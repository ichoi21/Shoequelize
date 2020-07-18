const db = require("../models");

module.exports = {
  newShoe: async (req, res) => {
    if (req.user) {
      try {
        const newShoe = await db.Shoe.create({
          year: req.body.year,
          brand: req.body.brand,
          PID: req.body.PID,
          name: req.body.name,
          gender: req.body.gender,
          color: req.body.color,
          msrp: req.body.msrp,
          image: req.body.image,
          market_value: req.body.market_value,
          timg: req.body.timg,
          comment: req.body.comment,
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

  getAllShoes: async (req, res) => {
    if (req.user) {
      try {
        const allShoes = await db.Shoe.findAll({
          where: {
            UserId: req.user.id,
          },
        });
        res.send(allShoes);
      } catch (err) {
        res.send({ err_message: err });
      }
    } else {
      res.redirect("/");
    }
  },

  findShoe: async (req, res) => {
    if (req.user) {
      try {
        const foundShoe = await db.Shoe.findOne({
          where: {
            PID: req.params.PID,
          },
        });
        res.send(foundShoe);
      } catch (err) {
        res.send({ err_message: err });
      }
    } else {
      res.redirect("/");
    }
  },

  deleteShoes: async (req, res) => {
    if (req.user) {
      try {
        await db.Shoe.destroy({
          where: {
            id: req.params.id,
            UserId: req.user.id,
          },
        });
        res.send({ msg: "shoes deleted!" });
      } catch (err) {
        res.send({ err_message: err });
      }
    } else {
      res.redirect("/");
    }
  },
};
