const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  getAllMilestones,
  addMilestone,
  deleteMilestone,
} = require("../controllers/milestoneController");

// All milestone routes protected
router.use(authMiddleware);

// GET all milestones for a user
router.get("/", getAllMilestones);

// POST a new milestone
router.post("/", addMilestone);

// DELETE a milestone by ID
router.delete("/:id", deleteMilestone);

module.exports = router;
