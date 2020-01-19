const express = require("express");
const router = express.Router();

//@route  GET api/Posts
//@desc
//@access   Public
router.get(
  "/",

  (req, res) => {
    res.send("posts router");
  }
);

module.exports = router;
