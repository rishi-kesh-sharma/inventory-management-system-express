const express = require("express");
const methodOverride = require("method-override");
const path = require("path");
const dotenv = require("dotenv");
const expressLayouts = require("express-ejs-layouts");
const userRoutes = require("./routes/user.route.js");

const app = express();

// dotenv config
dotenv.config();

// connect db
require("./db/connect.js");

const PORT = process.env.PORT || 4000;

// setup middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride());

// serve static files
app.use("/public", express.static(path.resolve(__dirname, "public")));

// set views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// layout
app.use(expressLayouts);
app.set("layout", "./views/layouts/default");

// routes

//user routes
app.use("/user", userRoutes);

// test route
app.get("/", (req, res) => {
  res.render("index");
});

// listen to server
app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});

app.use((err, req, res, next) => {
  console.log(err, "error");
  res.send(err.message);
});
