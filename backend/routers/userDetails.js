const router = require("express").Router();
const {
  userDetailsController,
} = require("../controllers/userDetails.controller");

router.post("/", userDetailsController);

module.exports = router;
