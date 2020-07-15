const db = require("../models");

module.exports = {
  newLog: async (req, res) => {
    if (req.user) {
      try {
        const newShoe = await db.Shoe.create({
          ...req.body,
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
