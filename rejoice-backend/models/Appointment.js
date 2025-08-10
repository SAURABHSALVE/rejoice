const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, required: true },
  date: { type: Date, required: true },
  message: { type: String },
  status: { type: String, default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);
