import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" }
  ];

  const services = [
    "Facial Treatments",
    "Hair Care",
    "Spa & Massage",
    "Skin Treatment",
    "Hair Styling",
    "Manicure & Pedicure"
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaYoutube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                R
              </div>
              <div>
                <h3 className="text-xl font-display font-bold">Rejoice</h3>
                <p className="text-primary-400 text-sm">Hair & Skin</p>
              </div>
            </div>
            <p className="text-secondary-300 mb-6 leading-relaxed">
              Transform your beauty journey with our world-class treatments. 
              We're committed to enhancing your natural beauty and boosting your confidence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-secondary-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-secondary-300">
                    123 Beauty Street,<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary-400 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-300"
                >
                  +91 98765 43210
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:info@rejoicebeauty.com"
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-300"
                >
                  info@rejoicebeauty.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaClock className="text-primary-400 flex-shrink-0" />
                <div>
                  <p className="text-secondary-300">
                    Mon - Sat: 9:00 AM - 8:00 PM<br />
                    Sunday: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-secondary-800 py-8">
        <div className="container-custom">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
            <p className="text-secondary-300 mb-6 max-w-md mx-auto">
              Subscribe to our newsletter for beauty tips, special offers, and updates.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg bg-secondary-800 border border-secondary-700 text-white placeholder-secondary-400 focus:outline-none focus:border-primary-500"
              />
              <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-r-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-400 text-sm">
              © {currentYear} Rejoice Hair & Skin. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-secondary-400 hover:text-primary-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-secondary-400 hover:text-primary-400 transition-colors duration-300">
                Terms of Service
              </a>
              <span className="text-secondary-600">|</span>
              <span className="text-secondary-400">
                Crafted with 💖 by Bhaiya
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
  