import { motion } from "framer-motion";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const phoneNumber = "9766789387"; // Replace with your actual WhatsApp number
  const message = "Hi! I'd like to book an appointment at Rejoice Beauty Salon.";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.open(`tel:+${phoneNumber}`, '_blank');
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        {/* Expanded Menu */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 mb-2"
          >
            <div className="bg-white rounded-lg shadow-lg p-4 min-w-[200px]">
              <div className="text-sm font-medium text-secondary-900 mb-3">
                Contact Us
              </div>
              
              {/* WhatsApp Option */}
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-3 w-full p-2 rounded-lg hover:bg-green-50 transition-colors duration-200 mb-2"
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="text-white text-sm" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-secondary-900">WhatsApp</div>
                  <div className="text-xs text-secondary-600">Chat with us</div>
                </div>
              </button>

              {/* Call Option */}
              <button
                onClick={handleCallClick}
                className="flex items-center space-x-3 w-full p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-secondary-900">Call Us</div>
                  <div className="text-xs text-secondary-600">+91 9766789387</div>
                </div>
              </button>
            </div>
          </motion.div>
        )}

        {/* Main WhatsApp Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 group"
        >
          {isExpanded ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaWhatsapp className="text-2xl" />
          )}
          
          {/* Pulse Animation */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-green-500 rounded-full opacity-30"
          />
        </motion.button>

        {/* Tooltip */}
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-secondary-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap"
          >
            Chat with us on WhatsApp
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-secondary-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </motion.div>
        )}
      </motion.div>

      {/* Backdrop for mobile */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsExpanded(false)}
          className="fixed inset-0 z-40 md:hidden"
        />
      )}
    </>
  );
}
