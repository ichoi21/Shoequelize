const express = require("express");
const session = require("express-session");
const db = require("./models");
const PORT = process.env.PORT || 3000;
const passport = require("./config/passport.js");
const app = express();

// Enables the use of .env files
require("dotenv").config();

// Sets up server to take string and json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// lets me use external js and css files in client folder
app.use(express.static("./client"));

// Sets up session with secret from .env file
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 36 * 100000,
    },
  })
);

// Initializes passport
app.use(passport.initialize());
app.use(passport.session());

// Brings in my routes
const logRoutes = require("./routes/log-routes.js"); //<~~this should be our collection API
const authRoutes = require("./routes/auth-routes.js");
const clientRoutes = require("./routes/client-routes.js");
const profileRoutes = require("./routes/profile-routes.js");

// use routes
app.use(logRoutes, authRoutes, clientRoutes, profileRoutes);

// syncs with database then serves content
db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`listening at: http://localhost:${PORT}`));
});
