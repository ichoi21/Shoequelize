const db = require("../models");

module.exports = {
  login: (req, res) => {
    res.json({ email: req.user.email, id: req.user.id });
  },

  register: async (req, res) => {
    try {
      await db.User.create({
        email: req.body.email,
        password: req.body.password,
      });

      res.redirect(307, "/auth/login");
    } catch (err) {
      res.stats(401).json(err);
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
          include: [db.Profile, db.Shoe],
        });

        res.send({ email: user.email, profile: user.Profile, log: user.Logs });
      } catch (err) {
        res.send({ err_msg: err });
      }
    } else {
      res.send({});
    }
  },
};
