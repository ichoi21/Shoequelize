const express = require("express");
const session = require("express-session");
const passport = require("./config/passport.js");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 3000;

require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./client/"));

// Configure session
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      // Session will last for 1 hour
      maxAge: 3600000,
    },
  })
);

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

const apiRoutes = require("./lib/routes/api-routes");
app.use(apiRoutes);

const clientRoutes = require("./lib/routes/client-routes");
app.use(clientRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`listening at: http://localhost:${PORT}`));
});
