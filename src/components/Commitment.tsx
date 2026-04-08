import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Zap, Heart, Target, Star } from "lucide-react";

const commitments = [
  {
    icon: <ShieldCheck size={40} className="text-accent-gold" />,
    title: "Chất lượng",
    description: "Cam kết chất lượng cao nhất trong từng sản phẩm.",
  },
  {
    icon: <Zap size={40} className="text-accent-gold" />,
    title: "Tốc độ",
    description: "Đảm bảo tiến độ và phản hồi nhanh chóng.",
  },
  {
    icon: <Heart size={40} className="text-accent-gold" />,
    title: "Tận tâm",
    description: "Lắng nghe và thấu hiểu nhu cầu của khách hàng.",
  },
  {
    icon: <Target size={40} className="text-accent-gold" />,
    title: "Hiệu quả",
    description: "Mang lại giá trị thực tế cho doanh nghiệp.",
  },
  {
    icon: <Star size={40} className="text-accent-gold" />,
    title: "Sáng tạo",
    description: "Luôn đổi mới và dẫn đầu xu hướng.",
  },
];

export const Commitment = () => {
  return (
    <section id="commitment" className="py-28 px-6 bg-secondary-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-accent-gold text-sm font-bold tracking-widest uppercase mb-4">Cam kết</h2>
          <h3 className="text-4xl md:text-6xl font-heading font-bold">GIÁ TRỊ <span className="text-accent-gold">CỐT LÕI</span></h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {commitments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 bg-black rounded-xl border border-white/5 hover:border-accent-gold/30 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h4 className="text-lg font-heading font-bold mb-4">{item.title}</h4>
              <p className="text-secondary-medium text-sm font-body leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
