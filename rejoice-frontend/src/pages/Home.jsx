import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaStar, FaArrowRight, FaPlay, FaUsers, FaAward, FaHeart } from "react-icons/fa";
import ServiceCard from "../components/ServiceCard";
import AppointmentForm from "../components/AppointmentForm";
import TestimonialSlider from "../components/TestimonialSlider";

export default function Home() {
  const stats = [
    { number: "500+", label: "Happy Clients", icon: FaUsers },
    { number: "5+", label: "Years Experience", icon: FaAward },
    { number: "50+", label: "Services Offered", icon: FaHeart },
  ];

  const services = [
    {
      img: "/images/services/facial-treatment.jpg",
      title: "Facial Treatments",
      description: "Rejuvenate your skin with our luxurious facial therapies and advanced skincare solutions.",
      price: "₹1,500",
      duration: "60 min"
    },
    {
      img: "/images/services/hair-care.jpg",
      title: "Hair Care",
      description: "From hair fall treatments to styling, we provide comprehensive hair care solutions.",
      price: "₹800",
      duration: "45 min"
    },
    {
      img: "/images/services/spa-massage.jpg",
      title: "Spa & Relaxation",
      description: "Relax and recharge with our soothing spa sessions and therapeutic massages.",
      price: "₹2,000",
      duration: "90 min"
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500"></div>
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              >
                <FaStar className="text-yellow-300" />
                <span className="text-sm font-medium">Rated 4.9/5 by 500+ clients</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
              >
                Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Beauty Journey
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-white/90 mb-8 max-w-lg mx-auto lg:mx-0"
              >
                Experience world-class hair and skin treatments in a luxurious, 
                relaxing environment designed to enhance your natural beauty.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link to="/contact" className="btn btn-primary text-lg px-8 py-4 group">
                  Book Your Session
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="btn btn-outline text-white border-white/30 hover:bg-white/10 text-lg px-8 py-4 group">
                  <FaPlay className="mr-2" />
                  Watch Video
                </button>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative"
            >
                              <div className="relative">
                  <img
                    src="/images/hero/main-hero.png"
                    alt="Beauty Salon"
                    className="rounded-3xl shadow-2xl floating"
                  />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <FaHeart className="text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary-600">Trusted by</p>
                      <p className="font-bold text-secondary-900">500+ Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-2xl text-primary-600" />
                </div>
                <h3 className="text-3xl font-bold text-secondary-900 mb-2">{stat.number}</h3>
                <p className="text-secondary-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary-50" id="services">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
              Our Premium Services
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Discover our comprehensive range of beauty and wellness services 
              designed to enhance your natural beauty and boost your confidence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn btn-outline text-lg px-8 py-4">
              View All Services
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white" id="testimonials">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients 
              have to say about their experience with us.
            </p>
          </motion.div>
          <TestimonialSlider />
        </div>
      </section>

      {/* Appointment Section */}
      <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600" id="contact">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Ready to Transform Your Beauty?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Book your appointment today and take the first step towards 
                a more confident, beautiful you. Our expert team is ready to 
                provide you with personalized care and attention.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <FaStar className="text-yellow-300 text-sm" />
                  </div>
                  <span>Professional & Experienced Staff</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <FaStar className="text-yellow-300 text-sm" />
                  </div>
                  <span>Premium Quality Products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <FaStar className="text-yellow-300 text-sm" />
                  </div>
                  <span>Relaxing & Hygienic Environment</span>
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
    </div>
  );
}
