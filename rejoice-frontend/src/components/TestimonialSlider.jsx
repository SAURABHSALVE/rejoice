import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaUser } from "react-icons/fa";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Regular Client",
    text: "The facial treatments at Rejoice are absolutely amazing! My skin feels rejuvenated and glowing after every session. The staff is professional and the environment is so relaxing. I've been coming here for 2 years and I couldn't be happier!",
    rating: 5,
    image: null // Using placeholder instead of actual image
  },
  {
    name: "Rohit Verma",
    role: "New Client",
    text: "I was skeptical about beauty treatments, but Rejoice changed my perspective completely. The hair care services are top-notch and the results are incredible. The team is very knowledgeable and made me feel comfortable throughout.",
    rating: 5,
    image: null
  },
  {
    name: "Neha Kapoor",
    role: "Loyal Customer",
    text: "Best beauty clinic in town! I've tried many places but nothing compares to the quality and care at Rejoice. The spa sessions are heavenly and the results are always consistent. Highly recommend to everyone!",
    rating: 5,
    image: null
  },
  {
    name: "Anjali Mehta",
    role: "Frequent Visitor",
    text: "The attention to detail and personalized care at Rejoice is exceptional. Every treatment is tailored to my needs and the results speak for themselves. The staff remembers my preferences and always makes me feel special.",
    rating: 5,
    image: null
  },
  {
    name: "Kavya Patel",
    role: "Satisfied Client",
    text: "I love the relaxing atmosphere and professional service. The skin treatments have transformed my complexion and boosted my confidence. The prices are reasonable for the quality of service provided.",
    rating: 5,
    image: null
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Testimonial */}
      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full"
          >
            <div className="bg-white rounded-2xl shadow-card p-8 md:p-12">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <FaQuoteLeft className="text-2xl text-primary-600" />
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-secondary-700 text-center mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                {/* Placeholder Avatar */}
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center border-4 border-primary-200">
                  <FaUser className="text-2xl text-primary-600" />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-secondary-900 text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary-600 text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                  <div className="flex items-center justify-center space-x-1 mt-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center space-x-4 mt-8">
        <button
          onClick={() => paginate(-1)}
          className="w-12 h-12 bg-white rounded-full shadow-card flex items-center justify-center hover:shadow-card-hover transition-all duration-300 group"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft className="text-primary-600 group-hover:scale-110 transition-transform" />
        </button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary-600 scale-125"
                  : "bg-secondary-300 hover:bg-primary-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          className="w-12 h-12 bg-white rounded-full shadow-card flex items-center justify-center hover:shadow-card-hover transition-all duration-300 group"
          aria-label="Next testimonial"
        >
          <FaChevronRight className="text-primary-600 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Stats */}
      <div className="mt-12 grid grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
          <div className="text-secondary-600 text-sm">Happy Clients</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-primary-600 mb-2">4.9</div>
          <div className="text-secondary-600 text-sm">Average Rating</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
          <div className="text-secondary-600 text-sm">Satisfaction Rate</div>
        </div>
      </div>
    </div>
  );
}
