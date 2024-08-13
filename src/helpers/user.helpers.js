const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const signup = async (req, res, next) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  if (req.body.password !== req.body["confirm-password"]) {
    throw new Error("passwords not matching");
  }
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  await user.save();
};

const login = async (req, res, next) => {
  if (!req.body.password || !req.body.email) {
    throw new Error("Fields not filled properly");
  }

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    throw new Error(`User not found with email ${req.body.email}`);
  }

  const hasPasswordMatched = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!hasPasswordMatched) {
    throw new Error("Password incorrect");
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  return token;
};
module.exports = { signup, login };
