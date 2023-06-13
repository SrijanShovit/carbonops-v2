const express = require("express");
const router = express.Router();

const { login, signup } = require("../Controller/Auth");
const { auth, isorganization, isAdmin } = require("../middleware/auth");

router.post("/login", login);
router.post("/signup", signup);

//testing protected routes for single middleware
router.get("/test", auth, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected route for TESTS",
  });
});

// //Protected Route
router.get("/organization", auth, isorganization, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected route for Students",
  });
});

router.get("/admin", auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected route for Admin",
  });
});

module.exports = router;
