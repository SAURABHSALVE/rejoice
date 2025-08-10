const express = require("express");
const { body, validationResult } = require("express-validator");
const Appointment = require("../models/Appointment.js");

const router = express.Router();

router.post("/",
  [
    body("name").isLength({ min: 2 }).trim().escape(),
    body("email").optional().isEmail().normalizeEmail(),
    body("phone").optional().trim().escape(),
    body("service").optional().trim().escape(),
    body("date").optional().isISO8601().toDate(),
    body("message").optional().trim().escape()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

    try {
      const appt = new Appointment(req.body);
      await appt.save();

      // For now, skip email sending since email is not configured
      console.log("New appointment created:", appt);

      return res.status(201).json({ 
        success: true, 
        message: "Appointment created successfully",
        appointment: appt 
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Server error" });
    }
  }
);

module.exports = router;
