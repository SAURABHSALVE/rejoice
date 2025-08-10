import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import AppointmentForm from "../components/AppointmentForm";

export default function Contact() {
  const contactInfo = [
    {
      icon: FaPhone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211"],
      link: "tel:+919876543210"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      details: ["info@rejoicebeauty.com", "bookings@rejoicebeauty.com"],
      link: "mailto:info@rejoicebeauty.com"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      details: ["123 Beauty Street", "Mumbai, Maharashtra 400001", "India"],
      link: "https://maps.google.com"
    },
    {
      icon: FaClock,
      title: "Business Hours",
      details: ["Monday - Saturday: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
      link: null
    }
  ];

  const socialLinks = [
    { icon: FaWhatsapp, href: "https://wa.me/919876543210", label: "WhatsApp", color: "bg-green-500" },
    { icon: FaFacebook, href: "#", label: "Facebook", color: "bg-blue-600" },
    { icon: FaInstagram, href: "#", label: "Instagram", color: "bg-pink-600" },
    { icon: FaTwitter, href: "#", label: "Twitter", color: "bg-blue-400" }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-secondary-900 mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start your beauty journey? Contact us today to book your appointment 
              or learn more about our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-display font-bold text-secondary-900 mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-xl text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 mb-2">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-secondary-600 hover:text-primary-600 transition-colors"
                        >
                          {info.details.map((detail, i) => (
                            <p key={i}>{detail}</p>
                          ))}
                        </a>
                      ) : (
                        info.details.map((detail, i) => (
                          <p key={i} className="text-secondary-600">{detail}</p>
                        ))
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-secondary-900 mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300`}
                      aria-label={social.label}
                    >
                      <social.icon className="text-xl" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-secondary-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-6xl text-primary-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">Our Location</h3>
                  <p className="text-secondary-600 mb-4">
                    123 Beauty Street<br />
                    Mumbai, Maharashtra 400001
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-600">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Book Your Appointment
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Ready to transform your beauty? Book your appointment today and take the 
                first step towards a more confident, beautiful you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <FaPhone className="text-white text-sm" />
                  </div>
                  <span>Call us: +91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <FaWhatsapp className="text-white text-sm" />
                  </div>
                  <span>WhatsApp: +91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-white text-sm" />
                  </div>
                  <span>Email: info@rejoicebeauty.com</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <AppointmentForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and booking process.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="card"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                How do I book an appointment?
              </h3>
              <p className="text-secondary-600">
                You can book an appointment by calling us, using our online form, 
                or messaging us on WhatsApp. We'll confirm your booking within 2 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="card"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                What are your business hours?
              </h3>
              <p className="text-secondary-600">
                We're open Monday to Saturday from 9:00 AM to 8:00 PM, and Sundays 
                from 10:00 AM to 6:00 PM.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="card"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                Do you offer home services?
              </h3>
              <p className="text-secondary-600">
                Currently, we provide all our services at our salon location. 
                This ensures the best quality and hygiene standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="card"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                What payment methods do you accept?
              </h3>
              <p className="text-secondary-600">
                We accept cash, credit/debit cards, UPI, and digital wallets. 
                Payment is due at the time of service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
