const express = require("express");
const Lead = require("../models/Lead");

const router = express.Router();

/*
   POST → Add new lead
*/
router.post("/", async (req, res) => {
  try {
    const newLead = new Lead(req.body);
    const savedLead = await newLead.save();
    res.status(201).json(savedLead);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/*
   GET → Fetch all leads
*/
router.get("/", async (req, res) => {
  try {
    const leads = await Lead.find();
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/*
   PUT → Update lead status
*/
router.put("/:id", async (req, res) => {
  try {
    const updatedLead = await Lead.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
        notes: req.body.notes,
      },
      { new: true },
    );

    res.json(updatedLead);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/*
   DELETE → Remove lead by ID
*/
router.delete("/:id", async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ message: "Lead deleted successfully ✅" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
