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
      res.redirect(307, "/api/login");
    } catch (err) {
      res.status(401).json(err);
    }
  },

  logout: (req, res) => {
    req.logout();
    res.redirect("/");
  },
};
