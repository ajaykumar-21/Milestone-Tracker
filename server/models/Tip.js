const mongoose = require("mongoose");

const TipSchema = new mongoose.Schema({
  milestoneId: { type: mongoose.Schema.Types.ObjectId, ref: "Milestone" },
  tip: String,
  contributedBy: String, // could be username or userId
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Tip", TipSchema);
