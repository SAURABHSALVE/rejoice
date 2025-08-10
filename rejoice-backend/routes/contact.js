const express = require("express");
const { body, validationResult } = require("express-validator");

const router = express.Router();

router.post("/",
  [
    body("name").isLength({ min: 2 }).trim().escape(),
    body("email").isEmail().normalizeEmail(),
    body("message").isLength({ min: 10 }).trim().escape()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

    try {
      // For now, just log the contact message since email is not configured
      console.log("New contact message:", req.body);

      return res.status(200).json({ 
        success: true, 
        message: "Message sent successfully" 
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Server error" });
    }
  }
);

module.exports = router;
