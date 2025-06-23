const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { addTip, getTipsByMilestone } = require("../controllers/tipController");

// Anyone logged-in can view and add tips
router.use(authMiddleware);

// POST a new tip
router.post("/", addTip);

// GET all tips for a milestone
router.get("/:milestoneId", getTipsByMilestone);

module.exports = router;
