const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

// NOTE: In real-world, you’d check password, etc.
router.post("/login", (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: "Email is required" });

  // Just generate a token based on email
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
});

module.exports = router;
