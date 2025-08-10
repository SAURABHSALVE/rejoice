import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaWhatsapp, FaBars, FaTimes, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Gallery", to: "/gallery" },
    { name: "Contact", to: "/contact" }
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-primary-200" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-primary-200" />
              <span>Mumbai, Maharashtra</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-primary-200">Open: Mon-Sat 9AM-8PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                R
              </div>
              <div>
                <h1 className="text-xl font-display font-bold text-secondary-900">Rejoice</h1>
                <p className="text-xs text-primary-600 -mt-1">Hair & Skin</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`cursor-pointer font-medium transition-colors duration-200 relative group ${
                    isActive(item.to) 
                      ? 'text-primary-600' 
                      : 'text-secondary-700 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-500 transition-all duration-300 ${
                    isActive(item.to) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
              <Link to="/contact" className="btn btn-primary">
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary-100 transition-colors"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        } overflow-hidden bg-white border-t border-secondary-100`}>
          <div className="container-custom py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={`block py-3 font-medium transition-colors duration-200 border-b border-secondary-100 last:border-b-0 ${
                  isActive(item.to) 
                    ? 'text-primary-600' 
                    : 'text-secondary-700 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-primary w-full mt-4" onClick={() => setIsOpen(false)}>
              Book Appointment
            </Link>
          </div>
        </div>
      </nav>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-40 group"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="text-white text-2xl group-hover:animate-bounce" />
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
          1
        </div>
      </a>
    </>
  );
}
