const router = require("express").Router();
const User = require("../models/User");

router.post("/signup", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

router.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);
  res.json(user || { message: "Invalid credentials" });
});

module.exports = router;
