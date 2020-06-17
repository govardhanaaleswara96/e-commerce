const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
// register routes
router.post("/register", userController.registerUser);
// login user routes
router.post("/login", userController.loginUser);

module.exports = router;
