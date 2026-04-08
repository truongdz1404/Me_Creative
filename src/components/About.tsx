import React from "react";
import { motion } from "motion/react";

export const About = () => {
  return (
    <section id="about" className="py-28 px-6 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-accent-gold text-sm font-bold tracking-widest uppercase mb-6">Về chúng tôi</h2>
          <p className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-10 text-gray-900 text-balance">
            CHÚNG TÔI LÀ NHỮNG NGƯỜI <span className="text-accent-gold">SÁNG TẠO</span>,
            TẬN TÂM VÀ LUÔN ĐỔI MỚI.
          </p>
          <p className="text-lg md:text-xl font-body text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Tại ME Creative, chúng tôi không chỉ tạo ra những sản phẩm đẹp mắt,
            chúng tôi xây dựng những câu chuyện thương hiệu đầy cảm hứng,
            giúp doanh nghiệp của bạn kết nối sâu sắc hơn với khách hàng.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
