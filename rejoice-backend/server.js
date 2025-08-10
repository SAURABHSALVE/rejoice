// server.js
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const appointmentsRouter = require("./routes/appointments.js");
const contactRouter = require("./routes/contact.js");
const servicesRouter = require("./routes/services.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: process.env.CORS_ORIGIN || "*"
}));

// Rate limiter (basic)
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 60, // limit each IP to 60 requests per windowMs
  message: { error: "Too many requests, please try again later." }
});
app.use(limiter);

// Routes
app.use("/api/appointments", appointmentsRouter);
app.use("/api/contact", contactRouter);
app.use("/api/services", servicesRouter);

// Health check endpoint
app.get("/health", (req, res) => res.json({ ok: true }));

// Root endpoint
app.get("/", (req, res) => {
  res.json({ 
    message: "Rejoice Beauty Salon API", 
    version: "1.0.0",
    status: "running"
  });
});

// Connect DB & start
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected successfully");
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📡 API available at: http://localhost:${PORT}`);
    console.log(`🏥 Health check: http://localhost:${PORT}/health`);
  });
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});
