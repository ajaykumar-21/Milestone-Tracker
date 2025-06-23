const mongoose = require("mongoose");

const MilestoneSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  notes: String,
  week: Number,
  userId: { type: String, required: true },
});

module.exports = mongoose.model("Milestone", MilestoneSchema);
