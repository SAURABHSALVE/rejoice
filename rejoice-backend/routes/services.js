const express = require("express");
const Service = require("../models/Service.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
