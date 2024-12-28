const userMODEL = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  // const token = req.cookies.token || req.header.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "UnAuthorized" });
  }

  const isBlacklisted = await userMODEL.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(401).json({ message: "---UnAuthorized---" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userMODEL.findById(decoded._id);

    req.user = user;

    return next();
  } catch (err) {
    return res.status(401).json({ message: "UnAuthorized" });
  }
};
