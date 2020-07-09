const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./client/"));

const apiRoutes = require("./lib/routes/api-routes");
app.use(apiRoutes);

const clientRoutes = require("./lib/routes/client-routes");
app.use(clientRoutes);

app.listen(PORT, () => console.log(`listening at: http://localhost:${PORT}`));
