const express = require("express");
const router = express.Router();
const {
  newShoe,
  getUserLogs,
  getAllShoes,
  deleteShoes,
} = require("../controllers/log-controller");

// Get all coffee logs
// Route: http://localhost:3000/logs/all
// Type: GET

router.get("/logs/all", getAllShoes);

// Get all user coffee logs
// Route: http://localhost:3000/logs/user
// Type: GET

router.get("/logs/user", getUserLogs);

// Create a new user log
// Route: http://localhost:3000/shoe/new
// Type: POST

router.post("/shoe/new", newShoe);

router.delete("/shoe/delete/:id", deleteShoes);

module.exports = router;
