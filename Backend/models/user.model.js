const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name Must be atleast 3 Char"],
    },
    lastname: {
      type: String,
      minlength: [3, "Last name Must be atleast 3 Char"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "email Must be atleast 3 Char"],
  },
  password: {
    type: String,
    reuired: true,
    select: false,
  },
  socketId: {
    typr: String,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
  return token;
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userMODEL = mongoose.model("user", userSchema);
module.exports = userMODEL;