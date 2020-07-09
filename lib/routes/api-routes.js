const express = require("express");
const router = express.Router();
const stockxAPI = require("stockx-api");
const stockX = new stockxAPI();

router.post("/api", (req, res) => {
  console.log("API HIT");
  stockX
    .searchProducts(req.body.text, {
      limit: 5,
    })
    .then((products) => res.json(products))
    .catch((err) => console.log(`Error searching: ${err.message}`));
});

router.post("/api/login", (req, res) => {
  console.log("Logging in...");

  stockX
    .login({
      user: req.body.username,
      password: req.body.password,
    })
    .then(() => res.json({ msg: "Logged in successfully!" }))
    .catch((err) => res.send(err));
});

module.exports = router;
