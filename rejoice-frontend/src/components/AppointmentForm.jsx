import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaCalendar, FaClock, FaPhone, FaCheck, FaSpinner } from "react-icons/fa";

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const services = [
    "Facial Treatment",
    "Hair Care",
    "Spa & Massage",
    "Skin Treatment",
    "Hair Styling",
    "Manicure & Pedicure"
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
    "05:00 PM", "06:00 PM", "07:00 PM"
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.service) newErrors.service = "Please select a service";
    if (!form.date) newErrors.date = "Please select a date";
    if (!form.time) newErrors.time = "Please select a time";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: ""
      });
      setIsSubmitted(false);
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card text-center p-8"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaCheck className="text-2xl text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-secondary-900 mb-2">Appointment Booked!</h3>
        <p className="text-secondary-600">
          Thank you for booking with us. We'll confirm your appointment shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card p-8 max-w-md mx-auto"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Book Your Session</h3>
        <p className="text-white/80">Schedule your beauty transformation today</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              className={`input-field pl-10 ${errors.name ? 'border-red-500' : ''}`}
            />
          </div>
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className={`input-field pl-10 ${errors.email ? 'border-red-500' : ''}`}
            />
          </div>
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Phone Field */}
        <div>
          <div className="relative">
            <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className={`input-field pl-10 ${errors.phone ? 'border-red-500' : ''}`}
            />
          </div>
          {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Service Selection */}
        <div>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`input-field ${errors.service ? 'border-red-500' : ''}`}
          >
            <option value="">Select a Service</option>
            {services.map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
          {errors.service && <p className="text-red-400 text-sm mt-1">{errors.service}</p>}
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="relative">
              <FaCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" />
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className={`input-field pl-10 ${errors.date ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.date && <p className="text-red-400 text-sm mt-1">{errors.date}</p>}
          </div>

          <div>
            <div className="relative">
              <FaClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" />
              <select
                name="time"
                value={form.time}
                onChange={handleChange}
                className={`input-field pl-10 ${errors.time ? 'border-red-500' : ''}`}
              >
                <option value="">Select Time</option>
                {timeSlots.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
            {errors.time && <p className="text-red-400 text-sm mt-1">{errors.time}</p>}
          </div>
        </div>

        {/* Message Field */}
        <div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Any special requests or notes..."
            rows="3"
            className="input-field resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <FaSpinner className="animate-spin mr-2" />
              Booking...
            </>
          ) : (
            "Book Appointment"
          )}
        </button>
      </form>

      {/* Additional Info */}
      <div className="mt-6 text-center">
        <p className="text-white/70 text-sm">
          We'll confirm your appointment within 2 hours
        </p>
      </div>
    </motion.div>
  );
}
