const db = require("../models");

// User controllers will check for a user session and
// will return empty object if not authenticated

module.exports = {
  // Updates zip code. Must be passed a user id and zip code
  updateZip: (req, res) => {
    !req.user
      ? res.json({})
      : db.User.update(
          { zip: req.body.zip },
          { where: { id: req.user.id } }
        ).then((result) => {
          req.user.zip = parseInt(req.body.zip);
          res.send(result);
        });
  },
  // Returns user data from session.
  getData: (req, res) => {
    !req.user
      ? res.json({})
      : res.json({
          email: req.user.email,
          userId: req.user.id,
          zip: req.user.zip,
        });
  },
};
