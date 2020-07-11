const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/api", (req, res) => {
  axios
    .get(`https://stockx.com/api/browse?_search=yeezy`, {
      headers: { "User-Agent": "Chrome/83.0.4103.116" },
    })
    .then((res) => {
      console.log(res.data);
      res.json(res.data);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
