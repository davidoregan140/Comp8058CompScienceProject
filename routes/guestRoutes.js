const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const _ = require("lodash");
const Path = require("path-parser").default;
const { URL } = require("url");

const Guest = mongoose.model("guests");

module.exports = app => {
  app.get("/api/guests", requireLogin, async (req, res) => {
    const guests = await Guest.find({});
    res.send(guests);
  });

  app.post("/api/guests", requireLogin, async (req, res) => {
    const { name, email, agegroup, inviteYN } = req.body;

    const guest = new Guest({
      name: name,
      email: email,
      agegroup: agegroup,
      inviteYN: inviteYN,
      _user: req.user.id
    });

    try {
      await guest.save();
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.delete("/api/guests/delete/:id", async (req, res) => {
    await Guest.deleteOne({ _id: req.params.id });
    const guests = await Guest.find({ _user: req.user.id }).select({});
    res.send(guests);
  });
};
