import React from "react";
import { motion } from "motion/react";
import { Lightbulb, ThumbsUp, Grid3x3, Video, Zap, Shield } from "lucide-react";

const commitments = [
  {
    icon: <Zap size={48} className="text-[#30BBFD]" />,
    title: "Sáng tạo không giới hạn",
    description: "ME Creative theo đuổi tư duy mở – nơi mọi ý tưởng đều được bứt phá, không khuôn mẫu, không rào cản.",
  },
  {
    icon: <Lightbulb size={48} className="text-[#30BBFD]" />,
    title: "Khác biệt đến từ bản sắc riêng",
    description: "Chúng tôi khai thác chiều sâu văn hóa, cảm xúc và cá tính thương hiệu riêng có để tạo ra sự khác biệt bền vững.",
  },
  {
    icon: <ThumbsUp size={48} className="text-[#30BBFD]" />,
    title: "Tư duy tổng thể - Giải pháp trọn vẹn",
    description: "ME Creative biến ý tưởng thành giá trị thực – bằng tư duy chiến lược vững vàng và quy trình sản xuất chuyên nghiệp.",
  },
  {
    icon: <Grid3x3 size={48} className="text-[#30BBFD]" />,
    title: "Nghệ thuật là ngôn ngữ kết nối",
    description: "Chúng tôi kể câu chuyện thương hiệu bằng hình ảnh, cảm xúc và trải nghiệm mang tính nghệ thuật.",
  },
  {
    icon: <Video size={48} className="text-[#30BBFD]" />,
    title: "Thấu hiểu - Linh hoạt - Hiệu quả",
    description: "Chúng tôi lắng nghe và thấu hiểu từng mong muốn của khách hàng, linh hoạt thích ứng để mang lại hiệu quả tối ưu.",
  },
];

export const Commitment = () => {
  return (
    <section id="commitment" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 mt-8"
          >
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-12">
              Cam Kết
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 px-8 py-4 bg-blue-500 text-white rounded-full font-bold tracking-widest hover:bg-blue-600 transition-all duration-300 group"
            >
              <span>NHẬN BÁO GIÁ</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Right Section - Commitments Grid */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {commitments.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-8 bg-gray-50 rounded-lg border border-gray-200 hover:border-accent-gold/50 hover:shadow-lg hover:bg-white transition-all duration-300"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-heading font-bold mb-4 text-gray-900 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm font-body leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

