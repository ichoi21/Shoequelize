const express = require("express");
const router = express.Router();
const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/home.html"));
});

router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/about.html"));
});

router.get("/help", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/help.html"));
});

router.get("/login", (req, res) => {
  if (req.user) {
    res.redirect("/members");
  }
  res.sendFile(path.join(__dirname, "../client/login.html"));
});

router.get("/my_collection", isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, "../client/my_collection.html"));
});

router.get("/press", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/press.html"));
});

router.get("/sign_up", (req, res) => {
  if (req.user) {
    res.redirect("/members");
  }
  res.sendFile(path.join(__dirname, "../client/sign_up.html"));
});

router.get("/view_all", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/view_all.html"));
});

module.exports = router;
