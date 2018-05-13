const mongoose = require("mongoose");
const { Schema } = mongoose;

const guestSchema = new Schema({
  name: String,
  email: String,
  agegroup: String,
  inviteYN: { type: Boolean, default: false },
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("guests", guestSchema);
