const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./client/"));

const apiRoutes = require("./lib/routes/api-routes");
app.use(apiRoutes);

const clientRoutes = require("./lib/routes/client-routes");
app.use(clientRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening at: http://localhost:${PORT}`);
  });
});
