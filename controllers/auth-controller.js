const db = require("../models");

module.exports = {
  login: (req, res) => {
    res.json({ email: req.user.email, id: req.user.id });
  },

  register: async (req, res) => {
    try {
      await db.User.create({
        alias: req.body.alias,
        email: req.body.email,
        password: req.body.password,
        shoeSize: req.body.shoeSize,
      });

      res.redirect(307, "/auth/login");
    } catch (err) {
      res.status(401).json(err);
    }
  },

  logout: (req, res) => {
    req.logout();
    res.redirect("/");
  },

  getUser: async (req, res) => {
    if (req.user) {
      try {
        const user = await db.User.findOne({
          where: { id: req.user.id },
          include: [db.User, db.Shoe],
        });

        res.send({
          email: user.email,
          alias: user.alias,
          shoeSize: user.shoeSize,
        });
      } catch (err) {
        res.send({ err_msg: err });
      }
    } else {
      res.send({});
    }
  },
};
