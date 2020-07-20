const express = require("express");
const router = express.Router();
const {
  newShoe,
  findShoe,
  getAllShoes,
  deleteShoes,
  getShoesBrand,
  editShoes,
} = require("../controllers/log-controller");

// Get all coffee logs
// Route: http://localhost:3000/logs/all
// Type: GET

router.get("/shoes/all", getAllShoes);

// Get all user shoes
// Route: http://localhost:3000/logs/user
// Type: GET

router.post("/shoes/find/:name", findShoe);

router.get("/shoes/find/:brand", getShoesBrand);

// Create a new user log
// Route: http://localhost:3000/shoe/new
// Type: POST

router.post("/shoe/new", newShoe);

router.delete("/shoe/delete/:id", deleteShoes);

router.patch("/shoes/edit/:id", editShoes);

module.exports = router;
