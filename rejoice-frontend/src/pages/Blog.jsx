import { motion } from "framer-motion";
import { FaCalendar, FaUser, FaArrowRight, FaHeart, FaShare } from "react-icons/fa";
import { useState } from "react";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Skincare Tips for Glowing Skin",
      excerpt: "Discover the fundamental skincare practices that will help you achieve naturally glowing and healthy skin all year round.",
      image: "/images/blog/skincare-tips.jpg",
      author: "Dr. Priya Sharma",
      date: "March 15, 2024",
      category: "Skincare",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Ultimate Guide to Hair Care in Summer",
      excerpt: "Learn how to protect and maintain your hair during the hot summer months with these expert tips and recommendations.",
      image: "/images/blog/hair-care-summer.jpg",
      author: "Anjali Mehta",
      date: "March 12, 2024",
      category: "Hair Care",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Anti-Aging Treatments: What Really Works",
      excerpt: "Explore the most effective anti-aging treatments and procedures that can help you maintain youthful skin naturally.",
      image: "/images/blog/anti-aging.jpg",
      author: "Dr. Kavya Patel",
      date: "March 10, 2024",
      category: "Anti-Aging",
      readTime: "8 min read"
    },
    {
      id: 4,
      title: "Spa Day: Benefits of Regular Massage Therapy",
      excerpt: "Discover the incredible physical and mental health benefits of incorporating regular massage therapy into your wellness routine.",
      image: "/images/blog/massage-therapy.jpg",
      author: "Kavya Patel",
      date: "March 8, 2024",
      category: "Wellness",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Natural Ingredients for Beautiful Skin",
      excerpt: "Explore the power of natural ingredients and how they can transform your skincare routine for better results.",
      image: "/images/blog/natural-ingredients.jpg",
      author: "Dr. Priya Sharma",
      date: "March 5, 2024",
      category: "Natural Beauty",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Hair Styling Trends for 2024",
      excerpt: "Stay ahead of the curve with the latest hair styling trends and techniques that are dominating the beauty industry this year.",
      image: "/images/blog/hair-trends-2024.jpg",
      author: "Anjali Mehta",
      date: "March 3, 2024",
      category: "Hair Styling",
      readTime: "9 min read"
    }
  ];

  const categories = ["All", "Skincare", "Hair Care", "Anti-Aging", "Wellness", "Natural Beauty", "Hair Styling"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

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
              Beauty <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Discover expert beauty tips, skincare advice, and the latest trends 
              in beauty and wellness from our team of professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-secondary-100 text-secondary-700 hover:bg-primary-100 hover:text-primary-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card group cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-secondary-600 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-secondary-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <FaUser className="text-primary-600" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaCalendar className="text-primary-600" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span className="text-primary-600 font-medium">{post.readTime}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-secondary-100">
                    <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-2 transition-colors duration-300">
                      <span>Read More</span>
                      <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="flex items-center space-x-4">
                      <button className="text-secondary-400 hover:text-red-500 transition-colors duration-300">
                        <FaHeart className="text-sm" />
                      </button>
                      <button className="text-secondary-400 hover:text-primary-600 transition-colors duration-300">
                        <FaShare className="text-sm" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          {filteredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-center mt-12"
            >
              <button className="btn btn-outline text-lg px-8 py-4">
                Load More Articles
                <FaArrowRight className="ml-2" />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Stay Updated with Beauty Tips
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest beauty tips, trends, 
              and exclusive offers delivered to your inbox.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-l-lg bg-white/90 backdrop-blur-sm border border-white/20 text-secondary-900 placeholder-secondary-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-3 bg-white text-primary-600 rounded-r-lg font-semibold hover:bg-secondary-50 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
