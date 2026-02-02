const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/leads", require("./routes/leadRoutes"));

// Test Route
app.get("/", (req, res) => {
  res.send("Mini CRM Backend is Running ✅");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// Server Start
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
