const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const Mailer = require("../services/Mailer");
const inviteTemplate = require("../services/emailTemplates/inviteTemplate");
const _ = require("lodash");
const Path = require("path-parser").default;
const { URL } = require("url");

const Invite = mongoose.model("invites");

module.exports = app => {
  app.get("/api/invites", requireLogin, async (req, res) => {
    //Mongoose query to get back all the info we need from the invite
    const invites = await Invite.find({ _user: req.user.id }).select({
      //set to true as we want to get back all the recipients
      recipients: 0
    });

    res.send(invites);
  });

  app.get("/api/invites/:inviteId/:choice", (req, res) => {
    res.send("Thanks for your reply");
  });

  app.post("/api/invites/webhooks", (req, res) => {
    const p = new Path("/api/invites/:inviteId/:choice");

    _.chain(req.body)
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname);
        if (match) {
          return {
            email,
            inviteId: match.inviteId,
            choice: match.choice
          };
        }
      })
      .compact()
      .uniqBy("email", "inviteId")
      .each(({ inviteId, email, choice }) => {
        Invite.updateOne(
          {
            _id: inviteId,
            recipients: {
              $elemMatch: { email: email, responded: false }
            }
          },
          {
            $inc: { [choice]: 1 },
            $set: { "recipients.$.responded": true },
            lastResponded: new Date()
          }
        ).exec();
      })
      .value();

    res.send({});
  });

  app.post("/api/invites", requireLogin, async (req, res) => {
    const { title, couple, venue, date, subject, body, recipients } = req.body;

    const invite = new Invite({
      title: title,
      couple: couple,
      venue: venue,
      date: date,
      subject: subject,
      body: body,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    const mailer = new Mailer(invite, inviteTemplate(invite));

    try {
      await mailer.send();
      await invite.save();
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.delete("/api/invites/delete/:id", async (req, res) => {
    await Invite.deleteOne({ _id: req.params.id });
    const invites = await Invite.find({ _user: req.user.id })
      .sort({ dateSent: -1 })
      .select({});
    res.send(invites);
  });
};
