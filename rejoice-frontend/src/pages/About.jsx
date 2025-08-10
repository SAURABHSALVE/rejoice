import { motion } from "framer-motion";
import { FaStar, FaUsers, FaAward, FaHeart, FaCheck } from "react-icons/fa";

export default function About() {
  const features = [
    "Professional & Certified Staff",
    "Premium Quality Products",
    "Hygienic Environment",
    "Personalized Care",
    "Modern Equipment",
    "Affordable Pricing"
  ];

  const team = [
    {
      name: "Dr. Priya Sharma",
      role: "Lead Dermatologist",
      image: "/images/team/priya-sharma.jpg",
      experience: "8+ Years"
    },
    {
      name: "Anjali Mehta",
      role: "Senior Hair Specialist",
      image: "/images/team/anjali-mehta.jpg",
      experience: "6+ Years"
    },
    {
      name: "Kavya Patel",
      role: "Spa Therapist",
      image: "/images/team/kavya-patel.jpg",
      experience: "5+ Years"
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
              About <span className="gradient-text">Rejoice</span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              We are passionate about enhancing your natural beauty and boosting your confidence 
              through world-class treatments and personalized care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                Founded in 2019, Rejoice Hair & Skin was born from a simple vision: to create a 
                sanctuary where beauty meets wellness, and every client feels valued and beautiful.
              </p>
              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                Over the years, we've grown from a small local salon to one of Mumbai's most 
                trusted beauty destinations, serving thousands of satisfied clients with our 
                commitment to excellence and innovation.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                  <div className="text-secondary-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                  <div className="text-secondary-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                  <div className="text-secondary-600">Services</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/images/hero/salon-interior.jpg"
                alt="Our Salon"
                className="rounded-2xl shadow-card"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <FaStar className="text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-600">Rated</p>
                    <p className="font-bold text-secondary-900">4.9/5 Stars</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
              Our Mission & Values
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              We believe in enhancing natural beauty while promoting wellness and self-confidence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHeart className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Passion for Beauty</h3>
              <p className="text-secondary-600">
                We're passionate about helping you look and feel your best, 
                using the latest techniques and premium products.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Client-First Approach</h3>
              <p className="text-secondary-600">
                Your satisfaction is our priority. We listen to your needs and 
                customize treatments to achieve your desired results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaAward className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Excellence</h3>
              <p className="text-secondary-600">
                We maintain the highest standards of quality, hygiene, and 
                professionalism in everything we do.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                Why Choose Rejoice?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaCheck className="text-primary-600 text-sm" />
                    </div>
                    <span className="text-secondary-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/services/facial-treatment.jpg"
                alt="Our Services"
                className="rounded-2xl shadow-card"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Our certified professionals are dedicated to providing you with the best 
              beauty and wellness experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="card text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-secondary-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 mb-2">{member.role}</p>
                <p className="text-secondary-600 text-sm">{member.experience} Experience</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
