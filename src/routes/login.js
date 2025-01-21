const express = require("express");
const router = express.Router();
const path = require("path");
const User = require("../models/user");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/login.html"));
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res
        .status(400).json({ success: false, message: "Invalid Credentials" });
    }
    global.email = user.email;
    res.redirect("/home");
  } catch (err) {
    res.status(500).json({ success: false, message: "Error logging in" });
  }
});

module.exports = router;
