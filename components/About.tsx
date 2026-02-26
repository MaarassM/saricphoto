'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-800 mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Hello! I'm a 22-year-old professional photographer based in the beautiful coastal city of Pula, Croatia.
                My passion for photography began as a hobby and has evolved into a profession that I truly love.
              </p>
              <p>
                I specialize in capturing the essence of spaces and moments that matter most to my clients.
                Whether it's showcasing the beauty of a property, immortalizing the joy of a wedding day,
                documenting corporate events, or creating compelling promotional content, I bring dedication
                and creativity to every project.
              </p>
              <p>
                My approach combines technical expertise with an artistic eye, ensuring that each photograph
                tells a unique story. Based in Pula, I serve clients throughout Croatia and beyond, always
                ready to travel for the perfect shot.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">4+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">200+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&h=750&fit=crop"
                alt="Photographer at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent"></div>
            </div>

            {/* Decorative element */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-500/10 rounded-full blur-3xl -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
