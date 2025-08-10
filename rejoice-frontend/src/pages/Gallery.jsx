import { motion } from "framer-motion";
import { useState } from "react";
import { FaSearch, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery/salon-interior.jpg",
      alt: "Salon Interior",
      category: "Salon"
    },
    {
      id: 2,
      src: "/images/gallery/facial-treatment.jpg",
      alt: "Facial Treatment",
      category: "Facial"
    },
    {
      id: 3,
      src: "/images/gallery/hair-styling.jpg",
      alt: "Hair Styling",
      category: "Hair"
    },
    {
      id: 4,
      src: "/images/gallery/spa-treatment.jpg",
      alt: "Spa Treatment",
      category: "Spa"
    },
    {
      id: 5,
      src: "/images/gallery/nail-art.jpg",
      alt: "Nail Art",
      category: "Nails"
    },
    {
      id: 6,
      src: "/images/gallery/skin-treatment.jpg",
      alt: "Skin Treatment",
      category: "Skin"
    },
    {
      id: 7,
      src: "/images/gallery/hair-care.jpg",
      alt: "Hair Care",
      category: "Hair"
    },
    {
      id: 8,
      src: "/images/gallery/massage-therapy.jpg",
      alt: "Massage Therapy",
      category: "Spa"
    },
    {
      id: 9,
      src: "/images/gallery/beauty-treatment.jpg",
      alt: "Beauty Treatment",
      category: "Facial"
    },
    {
      id: 10,
      src: "/images/gallery/wellness-session.jpg",
      alt: "Wellness Session",
      category: "Spa"
    },
    {
      id: 11,
      src: "/images/gallery/hair-styling-2.jpg",
      alt: "Hair Styling",
      category: "Hair"
    },
    {
      id: 12,
      src: "/images/gallery/facial-care.jpg",
      alt: "Facial Care",
      category: "Facial"
    }
  ];

  const categories = ["All", "Salon", "Facial", "Hair", "Spa", "Nails", "Skin"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

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
              Our <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Take a look at our beautiful salon, professional treatments, and the 
              amazing transformations we've created for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
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

      {/* Gallery Grid */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
                onClick={() => openModal(image, index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <FaSearch className="text-3xl mx-auto mb-2" />
                    <p className="font-medium">{image.alt}</p>
                    <p className="text-sm opacity-80">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-primary-400 transition-colors z-10"
            >
              <FaTimes size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary-400 transition-colors z-10"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary-400 transition-colors z-10"
            >
              <FaChevronRight size={24} />
            </button>

            {/* Image */}
            <motion.img
              key={selectedImage.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
              <h3 className="font-bold text-lg">{selectedImage.alt}</h3>
              <p className="text-sm opacity-80">{selectedImage.category} Treatment</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
              Ready to Transform Your Look?
            </h2>
            <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
              Book your appointment today and experience the same level of care and 
              attention that you see in our gallery.
            </p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-lg px-8 py-4"
            >
              Book Your Session
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
