import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "ME Creative đã giúp chúng tôi thay đổi hoàn toàn diện mạo thương hiệu. Sự sáng tạo và chuyên nghiệp của họ là không thể bàn cãi.",
    name: "Ông Nguyễn Hoàng Nam",
    position: "CEO, TechVision",
  },
  {
    text: "Dịch vụ sản xuất hình ảnh của ME Creative thực sự ấn tượng. Họ thấu hiểu tinh thần thương hiệu và truyền tải nó một cách tuyệt vời.",
    name: "Bà Lê Thu Trang",
    position: "Marketing Director, FashionHub",
  },
  {
    text: "Chúng tôi rất hài lòng với website mới. Giao diện hiện đại, tốc độ nhanh và trải nghiệm người dùng cực kỳ mượt mà.",
    name: "Ông Phạm Minh Đức",
    position: "Founder, EcoLife",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-28 px-6 bg-gray-50 border-t border-b border-gray-200 overflow-hidden\">
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <Quote size={60} className="text-accent-gold/20 mx-auto mb-8" />
          <h2 className="text-accent-gold text-sm font-bold tracking-widest uppercase mb-4">Khách hàng nói gì</h2>
          <h3 className="text-4xl md:text-6xl font-heading font-bold text-gray-900">LỜI <span className="text-accent-gold">KHẲNG ĐỊNH</span></h3>
        </div>

        <div className="relative h-[400px] md:h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <p className="text-2xl md:text-3xl font-body text-gray-700 italic leading-relaxed mb-10 max-w-3xl">
                "{testimonials[currentIndex].text}"
              </p>
              <div>
                <h4 className="text-xl font-heading font-bold text-gray-900 mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-accent-gold text-sm font-bold tracking-widest uppercase">
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex justify-center space-x-6 mt-12">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-accent-gold hover:text-white transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-accent-gold hover:text-white transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
