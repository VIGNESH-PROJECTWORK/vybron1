import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const UserReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Published in IEEE Transactions on AI",
      rating: 5,
      review: "After publishing my IEEE paper with Vybron's help, I received 3 job offers from top tech companies! The quality of work opened doors I never imagined.",
      project: "Post-Publication Success",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Scopus Indexed Publication",
      rating: 5,
      review: "My Scopus paper got 50+ citations within 6 months! Vybron's research methodology and writing quality made my work stand out in the academic community.",
      project: "High Citation Impact",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      role: "Conference Best Paper Award",
      rating: 5,
      review: "Won the 'Best Paper Award' at IEEE International Conference! The innovative approach Vybron suggested made my research groundbreaking.",
      project: "Award-Winning Research",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 4,
      name: "Prof. Alex Kumar",
      role: "Promoted to Associate Professor",
      rating: 5,
      review: "Got promoted to Associate Professor after publishing 3 high-impact papers with Vybron! Their expertise accelerated my academic career significantly.",
      project: "Career Advancement",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 5,
      name: "Dr. Lisa Thompson",
      role: "Research Grant Recipient",
      rating: 5,
      review: "Secured a $500K research grant after my IEEE publication! The strong foundation Vybron provided made my grant proposal irresistible to funders.",
      project: "Grant Success",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 6,
      name: "Dr. David Park",
      role: "Industry Research Lead",
      rating: 5,
      review: "My published research led to a patent and a senior research position at Google! Vybron's innovative approach created real-world impact.",
      project: "Patent & Industry Success",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 7,
      name: "Dr. Maria Santos",
      role: "International Collaboration",
      rating: 5,
      review: "My IEEE paper opened doors to collaborate with researchers from 5 different countries! The global recognition has been incredible.",
      project: "Global Research Network",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 8,
      name: "Dr. James Wilson",
      role: "Startup Founder",
      rating: 5,
      review: "My published research became the foundation for my $2M funded startup! Vybron's work quality gave investors confidence in our technology.",
      project: "Startup Success",
      avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            What Our <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Success stories from students and researchers who achieved their academic goals with us
          </p>
        </motion.div>
      </div>

      {/* Sliding Reviews Container */}
      <div className="relative">
        <motion.div
          className="flex space-x-6"
          animate={{
            x: [0, -100 * reviews.length + '%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          style={{ width: `${200 * reviews.length}%` }}
        >
          {duplicatedReviews.map((review, index) => (
            <motion.div
              key={`${review.id}-${index}`}
              className="flex-shrink-0 w-96 mx-3"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 dark:border-gray-600 relative overflow-hidden group">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Quote icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-8 h-8 text-blue-600" />
                </div>

                <div className="relative z-10">
                  {/* User Info */}
                  <div className="flex items-center mb-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-blue-100 dark:ring-blue-800"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                        {review.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {review.role}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {renderStars(review.rating)}
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                      ({review.rating}.0)
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    "{review.review}"
                  </p>

                  {/* Project Tag */}
                  <div className="inline-block bg-gradient-to-r from-blue-100 to-violet-100 dark:from-blue-900/30 dark:to-violet-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                    {review.project}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-50 to-transparent dark:from-gray-800 dark:to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-blue-50 to-transparent dark:from-gray-800 dark:to-transparent z-10 pointer-events-none" />
      </div>

      {/* Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">750+</div>
            <div className="text-gray-600 dark:text-gray-300">Published Papers</div>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-violet-600 mb-2">95%</div>
            <div className="text-gray-600 dark:text-gray-300">Acceptance Rate</div>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-emerald-600 mb-2">85%</div>
            <div className="text-gray-600 dark:text-gray-300">Career Growth</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default UserReviewsSection;