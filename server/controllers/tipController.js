const Tip = require("../models/Tip");

// Add a tip to a milestone
const addTip = async (req, res) => {
  const { milestoneId, tip } = req.body;

  if (!milestoneId || !tip) {
    return res
      .status(400)
      .json({ message: "Milestone ID and tip are required" });
  }

  try {
    const newTip = new Tip({
      milestoneId,
      tip,
      contributedBy: req.user.email,
    });

    const saved = await newTip.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Could not save tip" });
  }
};

// Get all tips for a milestone
const getTipsByMilestone = async (req, res) => {
  try {
    const tips = await Tip.find({ milestoneId: req.params.milestoneId });
    res.json(tips);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch tips" });
  }
};

module.exports = {
  addTip,
  getTipsByMilestone,
};
