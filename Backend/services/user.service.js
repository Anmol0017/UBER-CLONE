const userMODEL = require("../models/user.model");
// const controller = require("../controllers/user.controller");

module.exports.creatUser = async ({ firstname, lastname, email, password }) => {
  if (!firstname || !email || !password) {
    throw new Error("All Fields are Required");
  }
  const user = userMODEL.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });
  return user;
};
