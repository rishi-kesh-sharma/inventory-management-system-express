const {
  signup: signupHelper,
  login: loginHelper,
} = require("../helpers/user.helpers");
const viewLogin = async (req, res) => {
  res.render("pages/auth/login", {
    title: "Login",
    layout: "layouts/auth",
  });
};

const login = async (req, res, next) => {
  try {
    const token = await loginHelper(req, res, next);
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
    });
  } catch (err) {
    next(err);
  }
  res.redirect("/dashboard/");
};

const viewSignup = async (req, res) => {
  res.render("pages/auth/signup", {
    title: "SignUp",
    layout: "layouts/auth",
  });
};

const signup = async (req, res, next) => {
  try {
    await signupHelper(req, res, next);
    res.redirect("/user/login");
  } catch (err) {
    next(err);
  }
};

module.exports = { viewLogin, login, viewSignup, signup };
