const express = require("express");
const Inquiry = require("../models/Inquiry");

const router = express.Router();

// Submit a new inquiry
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newInquiry = new Inquiry({ name, email, message });
    await newInquiry.save();
    res.status(201).json({ message: "Inquiry submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit inquiry." });
  }
});

// Get all inquiries
router.get("/", async (req, res) => {
  try {
    const inquiries = await Inquiry.find();
    res.status(200).json(inquiries);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch inquiries." });
  }
});

module.exports = router;
