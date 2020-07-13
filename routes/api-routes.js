const express = require("express");
const router = express.Router();
const db = require("../models");

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
