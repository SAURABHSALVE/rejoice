import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaClock, FaStar, FaArrowRight } from "react-icons/fa";

export default function ServiceCard({ img, title, description, price, duration }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-card hover:shadow-card-hover transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-64">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-primary-600 font-bold">{price}</span>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
          <FaClock className="text-primary-600 text-sm" />
          <span className="text-secondary-700 text-sm font-medium">{duration}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors duration-300">
            {title}
          </h3>
          <div className="flex items-center space-x-1">
            <FaStar className="text-yellow-400 text-sm" />
            <span className="text-sm text-secondary-600">4.9</span>
          </div>
        </div>
        
        <p className="text-secondary-600 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            <span className="text-sm text-secondary-600">Professional treatment</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            <span className="text-sm text-secondary-600">Premium products</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            <span className="text-sm text-secondary-600">Relaxing environment</span>
          </div>
        </div>

        {/* Action Button */}
        <Link to="/contact" className="w-full btn btn-primary group-hover:shadow-glow transition-all duration-300 inline-flex items-center justify-center">
          <span>Book Now</span>
          <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
}
  