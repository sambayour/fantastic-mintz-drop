const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    first_name: { type: String},
    last_name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    img: { type: String},
    isAdmin: {
      type: Boolean, 
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
