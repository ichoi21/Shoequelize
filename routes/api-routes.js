const express = require("express");
const router = express.Router();
const passport = require("../config/passport");
const db = require("../models");

router.post("/api/login", passport.authenticate("local"), (req, res) => {
  res.json({ email: req.user.email, id: req.user.id });
});

router.post("/api/signup", (req, res) => {
  db.User.create({
    email: req.body.email,
    password: req.body.password,
  })
    .then(() => {
      res.redirect(307, "/api/login");
    })
    .catch((err) => res.status(401).json(err));
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/api/user_data", (req, res) => {
  !req.user
    ? res.json({ msg: "no user present" })
    : res.json({ email: req.user.email, id: req.user.id });
});

//my_collection routing below + API search
router.get("/all", (req, res) => {
  db.Shoe.findAll()
    .then((shoes) => {
      res.send(shoes);
      console.log(shoes);
    })
    .catch((err) => res.send(err));
});

//fetch a single todo
router.get("/find/:id", (req, res) => {
  db.Shoe.findOne({
    where: { id: req.params.id },
  })
    .then((shoes) => res.send(shoes))
    .catch((err) => res.send(err));
});

router.post("/add", (req, res) => {
  db.Shoe.create({
    year: req.body.year,
    brand: req.body.brand,
    sku: req.body.sku,
    style: req.body.style,
    gender: req.body.gender,
    color: req.body.color,
    msrp: req.body.msrp,
    market_value: req.body.market_value,
    // image: req.body.image,
  }).then((newProfile) => {
    res.send(newProfile);
  });
});

router.delete("/delete/:id", (req, res) => {
  db.Shoe.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => res.send({ msg: "Deleted shoe!" }))
    .catch((err) => res.send(err));
});

module.exports = router;
