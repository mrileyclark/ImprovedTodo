const express = require("express");
const app = express();
const mongoose = require("mongoose");
//handles auth with stratgies using local to application
const passport = require("passport");
//help with having logged in users/session
const session = require("express-session");
//help with having logged in users/session
const MongoStore = require("connect-mongo")(session);
//flash notfications pop up when login/signup errors
const flash = require("express-flash");
//logs of get/post reqs to terminal
const logger = require("morgan");
const connectDB = require("./config/database");
//links to routes
const mainRoutes = require("./routes/main");
const todoRoutes = require("./routes/todos");

//access to config files
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//connects to DB
connectDB();

//sets ejs as templates
app.set("view engine", "ejs");
//static files set up
app.use(express.static("public"));
//looks at req and pull stuff when need from it - ie forms
app.use(express.urlencoded({ extended: true }));
//
app.use(express.json());
//sets up morgan to log
app.use(logger("dev"));

// Sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//flashes errors on screen without refreshing the page
app.use(flash());

//listen for req made on home route - user login/signup
app.use("/", mainRoutes);
//listen for req made from authorized users to todos routes
app.use("/todos", todoRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});
