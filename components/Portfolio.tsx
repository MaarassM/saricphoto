'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

type Category = 'all' | 'apartments' | 'weddings' | 'events' | 'promotions';

interface PortfolioItem {
  id: number;
  category: Category;
  title: string;
  imageUrl: string;
}

const portfolioItems: PortfolioItem[] = [
  // Apartments
  { id: 1, category: 'apartments', title: 'Modern Apartment Interior', imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=800&fit=crop' },
  { id: 2, category: 'apartments', title: 'Luxury Living Room', imageUrl: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=600&h=800&fit=crop' },
  { id: 3, category: 'apartments', title: 'Contemporary Kitchen', imageUrl: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=600&h=800&fit=crop' },
  { id: 4, category: 'apartments', title: 'Elegant Bedroom', imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=800&fit=crop' },
  { id: 5, category: 'apartments', title: 'Spacious Balcony View', imageUrl: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=600&h=800&fit=crop' },
  { id: 6, category: 'apartments', title: 'Minimalist Dining Area', imageUrl: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&h=800&fit=crop' },

  // Weddings
  { id: 7, category: 'weddings', title: 'Romantic Wedding Ceremony', imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop' },
  { id: 8, category: 'weddings', title: 'Bride and Groom Portrait', imageUrl: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=800&fit=crop' },
  { id: 9, category: 'weddings', title: 'Wedding Reception Details', imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=800&fit=crop' },
  { id: 10, category: 'weddings', title: 'First Dance Moment', imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=800&fit=crop' },
  { id: 11, category: 'weddings', title: 'Beach Wedding Sunset', imageUrl: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=800&fit=crop' },
  { id: 12, category: 'weddings', title: 'Wedding Bouquet', imageUrl: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=800&fit=crop' },

  // Events
  { id: 13, category: 'events', title: 'Corporate Conference', imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=800&fit=crop' },
  { id: 14, category: 'events', title: 'Networking Event', imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=800&fit=crop' },
  { id: 15, category: 'events', title: 'Birthday Party Celebration', imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=800&fit=crop' },
  { id: 16, category: 'events', title: 'Concert Performance', imageUrl: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=800&fit=crop' },
  { id: 17, category: 'events', title: 'Product Launch', imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=800&fit=crop' },
  { id: 18, category: 'events', title: 'Gala Dinner', imageUrl: 'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=600&h=800&fit=crop' },

  // Promotions
  { id: 19, category: 'promotions', title: 'Restaurant Menu Shoot', imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=800&fit=crop' },
  { id: 20, category: 'promotions', title: 'Fashion Product Photography', imageUrl: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=800&fit=crop' },
  { id: 21, category: 'promotions', title: 'Hotel Promotional Shots', imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=800&fit=crop' },
  { id: 22, category: 'promotions', title: 'Brand Campaign', imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=800&fit=crop' },
  { id: 23, category: 'promotions', title: 'Lifestyle Product Shoot', imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=800&fit=crop' },
  { id: 24, category: 'promotions', title: 'Tourism Promotion', imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=800&fit=crop' },
];

const categories = [
  { id: 'all' as Category, label: 'All Work', icon: '📸' },
  { id: 'apartments' as Category, label: 'Apartments', icon: '🏠' },
  { id: 'weddings' as Category, label: 'Weddings', icon: '💍' },
  { id: 'events' as Category, label: 'Events', icon: '🎉' },
  { id: 'promotions' as Category, label: 'Promotions', icon: '📱' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-800 mb-4">
            Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my work across different photography categories
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-navy-800 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-white/80 text-sm capitalize">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
