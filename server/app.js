const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const milestoneRoutes = require("./routes/milestones");
const tipRoutes = require("./routes/tips");
const authRoutes = require("./routes/auth");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/milestones", milestoneRoutes);
app.use("/api/tips", tipRoutes);
app.use("/api/auth", authRoutes);

// DB Connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.log("DB connection error:", err));
