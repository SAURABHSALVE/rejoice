import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaStar, FaClock, FaArrowRight, FaCheck } from "react-icons/fa";

export default function Services() {
  const serviceCategories = [
    {
      title: "Facial Treatments",
      description: "Rejuvenate your skin with our advanced facial therapies",
      services: [
        { name: "Classic Facial", price: "₹800", duration: "45 min", description: "Deep cleansing and moisturizing facial" },
        { name: "Anti-Aging Facial", price: "₹1,200", duration: "60 min", description: "Advanced anti-aging treatment" },
        { name: "Acne Treatment", price: "₹1,000", duration: "50 min", description: "Specialized acne clearing facial" },
        { name: "Gold Facial", price: "₹1,500", duration: "75 min", description: "Luxury gold-infused facial therapy" }
      ],
      image: "/images/services/facial-treatment.jpg"
    },
    {
      title: "Hair Care",
      description: "Comprehensive hair care solutions for all hair types",
      services: [
        { name: "Hair Cut & Style", price: "₹500", duration: "45 min", description: "Professional haircut and styling" },
        { name: "Hair Fall Treatment", price: "₹1,200", duration: "60 min", description: "Advanced hair fall prevention" },
        { name: "Hair Coloring", price: "₹1,500", duration: "90 min", description: "Professional hair coloring service" },
        { name: "Keratin Treatment", price: "₹2,500", duration: "120 min", description: "Smoothing keratin treatment" }
      ],
      image: "/images/services/hair-care.jpg"
    },
    {
      title: "Spa & Massage",
      description: "Relax and rejuvenate with our therapeutic spa treatments",
      services: [
        { name: "Swedish Massage", price: "₹1,200", duration: "60 min", description: "Relaxing full body massage" },
        { name: "Hot Stone Massage", price: "₹1,800", duration: "75 min", description: "Therapeutic hot stone therapy" },
        { name: "Aromatherapy", price: "₹1,500", duration: "60 min", description: "Essential oil massage therapy" },
        { name: "Couple Massage", price: "₹2,500", duration: "90 min", description: "Romantic couple spa session" }
      ],
      image: "/images/services/spa-massage.jpg"
    },
    {
      title: "Skin Treatments",
      description: "Advanced skin care treatments for glowing skin",
      services: [
        { name: "Chemical Peel", price: "₹2,000", duration: "60 min", description: "Advanced skin exfoliation" },
        { name: "Microdermabrasion", price: "₹1,800", duration: "45 min", description: "Deep skin cleansing treatment" },
        { name: "LED Therapy", price: "₹1,500", duration: "30 min", description: "Advanced light therapy" },
        { name: "Hydrafacial", price: "₹2,500", duration: "75 min", description: "Hydrating facial treatment" }
      ],
      image: "/images/services/skin-treatment.jpg"
    },
    {
      title: "Nail Care",
      description: "Professional nail care and beauty services",
      services: [
        { name: "Manicure", price: "₹400", duration: "30 min", description: "Classic hand care treatment" },
        { name: "Pedicure", price: "₹600", duration: "45 min", description: "Complete foot care treatment" },
        { name: "Gel Nail Art", price: "₹800", duration: "60 min", description: "Creative gel nail designs" },
        { name: "Nail Extension", price: "₹1,200", duration: "90 min", description: "Professional nail extensions" }
      ],
      image: "/images/services/nail-care.jpg"
    },
    {
      title: "Body Treatments",
      description: "Comprehensive body care and wellness treatments",
      services: [
        { name: "Body Scrub", price: "₹1,200", duration: "45 min", description: "Exfoliating body treatment" },
        { name: "Body Wrap", price: "₹1,500", duration: "60 min", description: "Detoxifying body wrap" },
        { name: "Cellulite Treatment", price: "₹1,800", duration: "75 min", description: "Anti-cellulite therapy" },
        { name: "Body Contouring", price: "₹2,200", duration: "90 min", description: "Advanced body shaping" }
      ],
      image: "/images/services/body-treatment.jpg"
    }
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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of beauty and wellness services designed to 
              enhance your natural beauty and boost your confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                      {category.title}
                    </h3>
                    <p className="text-secondary-600 mb-6">
                      {category.description}
                    </p>
                    
                    <div className="space-y-4">
                      {category.services.map((service, serviceIndex) => (
                        <div key={service.name} className="border-b border-secondary-100 pb-3 last:border-b-0">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-secondary-900">{service.name}</h4>
                            <div className="text-right">
                              <div className="font-bold text-primary-600">{service.price}</div>
                              <div className="text-sm text-secondary-500 flex items-center">
                                <FaClock className="mr-1" />
                                {service.duration}
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-secondary-600">{service.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Experience Our Services?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book your appointment today and take the first step towards a more 
              confident, beautiful you.
            </p>
            <Link to="/contact" className="btn btn-secondary text-lg px-8 py-4">
              Book Appointment
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
