const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/api", (req, res) => {
  axios
    .get(
      `https://stockx.com/api/browse?_search=yeezy&year=2019&brand=adidas&gender=men`,
      {
        headers: { "User-Agent": "Chrome/83.0.4103.116" },
      }
    )
    .then((res) => {
      for (let i = 0; i < 5; i++) {
        console.log(
          res.data.Products[i].year +
            "\n" +
            res.data.Products[i].brand +
            "\n" +
            res.data.Products[i].styleId +
            "\n" +
            res.data.Products[i].shoe +
            "\n" +
            res.data.Products[i].gender +
            "\n" +
            res.data.Products[i].colorway +
            "\n" +
            res.data.Products[i].retailPrice +
            "\n" +
            res.data.Products[i].market.lastSale +
            "\n" +
            res.data.Products[i].media.smallImageUrl +
            "\n"
        );
      }

      res.json({ msg: "Success!" });
    })
    .catch((err) => res.send(err));
});

module.exports = router;
