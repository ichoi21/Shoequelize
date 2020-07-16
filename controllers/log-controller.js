const db = require("../models");

module.exports = {
  newShoe: async (req, res) => {
    if (req.user) {
      try {
        const newShoe = await db.Shoe.create({
          year: req.body.year,
          brand: req.body.brand,
          PID: req.body.PID,
          style: req.body.style,
          gender: req.body.gender,
          color: req.body.color,
          msrp: req.body.msrp,
          image: req.body.image,
          market_value: req.body.market_value,
          timg: req.body.timg,
          UserId: req.user.id,
        });
        res.send(newShoe);
      } catch (err) {
        res.send({ err_message: err });
      }
    } else {
      res.redirect("/");
    }
  },

  getUserLogs: async (req, res) => {
    if (req.user) {
      try {
        const userShoe = await db.Shoe.findAll({
          where: {
            UserId: req.user.id,
          },
        });
        res.send(userShoe);
      } catch (err) {
        res.send({ err_message: err });
      }
    } else {
      res.redirect("/");
    }
  },

  getAllLogs: async (req, res) => {
    try {
      const allShoes = await db.Shoe.findAll({});
      res.send(allShoes);
    } catch (err) {
      res.send({ err_message: err });
    }
  },
};
