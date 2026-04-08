import React from "react";
import { motion } from "motion/react";
import { ChevronDown, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <div className="relative w-full h-full overflow-hidden">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/l1yYSuezN1w?controls=0&rel=0&playsinline=1&cc_load_policy=0&enablejsapi=1&mute=1&autoplay=1&loop=1&playlist=l1yYSuezN1w"
            title="ME Creative Showreel 2025"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6">
        {/* Animated Text with Scroll Effect */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-bold leading-tight text-white mb-6"
          >
            <motion.span
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block"
            >
              <span className="text-accent-gold">M</span>aster creativity
            </motion.span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-heading font-bold leading-tight text-white mt-4"
          >
            <motion.span
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block"
            >
              <span className="text-pink-500">E</span>nhance success
            </motion.span>
          </motion.h2>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mb-12 leading-relaxed"
        >
          Me Creative là Creative Advertising Agency tiên phong tạo ra các giải pháp quảng cáo và truyền thông mang tính sáng tạo độc bản
        </motion.p>

        {/* Customer Rating Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="flex items-center space-x-3">
            <span className="text-accent-gold font-bold text-lg">Đánh Giá Khách Hàng</span>
            <span className="text-white text-sm tracking-widest uppercase">→</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-white font-heading text-2xl font-bold">4.9 out of 5</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-accent-gold text-accent-gold"
                />
              ))}
            </div>
          </div>
          <span className="text-white/60 text-sm">Được đánh giá 5 trên 5</span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 z-20"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
