const express = require("express");
//set up router functionality of express
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//renders home page
router.get("/", homeController.getIndex);
//renders login page get req; if login vallid taken to todos
router.get("/login", authController.getLogin);
//validate login creditinials submitted to login or redirects if invalid
router.post("/login", authController.postLogin);
//validates user logout redirects to home page
router.get("/logout", authController.logout);
//routes to signup page to create account get req
router.get("/signup", authController.getSignup);
//validation creditinials meet requirements for successful sign up and creates user
router.post("/signup", authController.postSignup);

module.exports = router;
