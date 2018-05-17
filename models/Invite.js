/***************************************************************************************
 *    Based on/Adapted from
 *    Titles: Udemy Tutorials, React-Redux documentation, MongoDB & Mongoose documentation
 *    Author: Grider, S (Udemy Tutorials)
 *    Date: 2018
 *    Code version: 1.0
 *    Sources: https://www.udemy.com/node-with-react-fullstack-web-development/learn/v4/content
              http://www.passportjs.org/docs/
              https://developers.google.com/identity/protocols/OAuth2
 *
 ***************************************************************************************/

const mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipientSchema = require("./Recipient");

const inviteSchema = new Schema({
  title: String,
  couple: String,
  venue: String,
  date: Date,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastResponded: Date
});

mongoose.model("invites", inviteSchema);
