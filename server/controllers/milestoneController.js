const Milestone = require("../models/Milestone");

// Get all milestones for the logged-in user
const getAllMilestones = async (req, res) => {
  try {
    const milestones = await Milestone.find({ userId: req.user.email }).sort({
      date: 1,
    });
    res.json(milestones);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch milestones" });
  }
};

// Add a new milestone
const addMilestone = async (req, res) => {
  const { title, date, notes, week } = req.body;

  if (!title || !date) {
    return res.status(400).json({ message: "Title and date are required" });
  }

  try {
    const newMilestone = new Milestone({
      title,
      date,
      notes,
      week,
      userId: req.user.email,
    });

    const saved = await newMilestone.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Could not save milestone" });
  }
};

// Delete a milestone by ID
const deleteMilestone = async (req, res) => {
  try {
    const deleted = await Milestone.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Milestone not found" });

    res.json({ message: "Milestone deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting milestone" });
  }
};

module.exports = {
  getAllMilestones,
  addMilestone,
  deleteMilestone,
};
