const express = require("express");
const session = require("express-session");
const passport = require("./config/passport.js");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./models");

require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./client"));

const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);

const clientRoutes = require("./routes/client-routes");
app.use(clientRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening at: http://localhost:${PORT}`);
  });
});
