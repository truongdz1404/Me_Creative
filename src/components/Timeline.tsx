import React from "react";
import { motion } from "motion/react";

const timelineData = [
  { year: "2018", title: "Thành lập", description: "Bắt đầu hành trình sáng tạo với đội ngũ nòng cốt." },
  { year: "2020", title: "Mở rộng", description: "Phát triển thêm các dịch vụ sản xuất hình ảnh và truyền thông." },
  { year: "2022", title: "Đột phá", description: "Hợp tác với các thương hiệu lớn trong và ngoài nước." },
  { year: "2024", title: "Dẫn đầu", description: "Trở thành agency sáng tạo hàng đầu tại Việt Nam." },
];

export const Timeline = () => {
  return (
    <section id="timeline" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-[#30BBFD] text-sm font-bold tracking-widest uppercase mb-4">Hành trình</h2>
          <h3 className="text-4xl md:text-6xl font-heading font-bold text-gray-900">CỘT MỐC <span className="text-[#30BBFD]">PHÁT TRIỂN</span></h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-px bg-accent-gold/30 hidden md:block"></div>

          <div className="space-y-12 md:space-y-24">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Content */}
                <div className="w-full md:w-1/2 p-4 md:p-8 text-center md:text-left">
                  <div className={`flex flex-col ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                    <span className="text-4xl md:text-6xl font-heading font-bold text-[#30BBFD] mb-4">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-heading font-bold mb-4 text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 font-body leading-relaxed max-w-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="relative z-10 w-12 h-12 flex items-center justify-center">
                  <div className="w-4 h-4 bg-accent-gold rounded-full shadow-[0_0_15px_rgba(198,169,107,0.8)]"></div>
                </div>

                {/* Empty Space */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

