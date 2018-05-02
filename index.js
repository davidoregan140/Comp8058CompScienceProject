const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
const router = express.Router();
const Chat = require("./models/chats");
var secrets = require("./secrets");
require("./models/User");
require("./services/passport");
require("./models/Invite");

var mongoDB = secrets.requestSecret("db_uri");
mongoose.connect(mongoDB);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongo error"));

//mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + "/emailTemplates/images"));

require("./routes/authRoutes")(app);
require("./routes/inviteRoutes")(app);

if (process.env.NODE_ENV === "production") {
  //express will serve production assets
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//Chatbox router
router
  .route("/chats")
  //retrieve all chats from the database
  .get(function(req, res) {
    //looks at our Chat Schema
    Chat.find(function(err, chats) {
      if (err) res.send(err);
      //responds with a json object of our database chats.
      res.json(chats);
    });
  })
  //post new chat to the database
  .post(function(req, res) {
    var chat = new Chat();
    req.body.author ? (chat.author = req.body.author) : null;
    req.body.text ? (chat.text = req.body.text) : null;

    chat.save(function(err) {
      if (err) res.send(err);
      res.json({ message: "Chat successfully added!" });
    });
  });

//Adding a route to a specific chat based on the database ID
router
  .route("/chats/:chat_id")
  //The put method gives us the chance to update our chat based on the ID passed to the route
  .put(function(req, res) {
    Chat.findById(req.params.chat_id, function(err, chat) {
      if (err) res.send(err);
      //setting the new author and text to whatever was changed. If nothing was changed
      // we will not alter the field.
      req.body.author ? (chat.author = req.body.author) : null;
      req.body.text ? (chat.text = req.body.text) : null;
      //save chat
      chat.save(function(err) {
        if (err) res.send(err);
        res.json({ message: "Chat has been updated" });
      });
    });
  })
  //delete method for removing a chat from our database
  .delete(function(req, res) {
    //selects the chat by its ID, then removes it.
    Chat.remove({ _id: req.params.chat_id }, function(err, chat) {
      if (err) res.send(err);
      res.json({ message: "Chat has been deleted" });
    });
  });

app.use("/chat", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log("Express port: ", this.address().port);
});
