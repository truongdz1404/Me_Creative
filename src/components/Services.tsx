import React from "react";
import { motion } from "motion/react";
import { Camera, Palette, Globe, Megaphone } from "lucide-react";

const services = [
  {
    icon: <Megaphone size={40} className="text-accent-gold" />,
    title: "ME Commerce",
    description: "Xây dựng kế hoạch tổng thể và các giải pháp thương mại điện tử cho các doanh nghiệp bán lẻ trên các nền tảng, sàn thương mại điện tử.",
  },
  {
    icon: <Camera size={40} className="text-accent-gold" />,
    title: "Me Talents",
    description: "Hệ thống talent độc quyền kết hợp giải pháp Influencer Marketing sáng tạo, giúp thương hiệu lan tỏa mạnh mẽ và xây dựng cộng đồng người hâm mộ trung thành.",
  },
  {
    icon: <Palette size={40} className="text-accent-gold" />,
    title: "Truyền Thông Tiếp Thị",
    description: "Xây dựng chiến lược truyền thông sáng tạo, đa kênh và nhất quán – từ IMC, branding, ra mắt sản phẩm đến social media.",
  },
  {
    icon: <Globe size={40} className="text-accent-gold" />,
    title: "Sản Xuất Nội Dung",
    description: "Sản xuất trọn gói các loại nội dung: TVC, Music Video (MV), Phim doanh nghiệp, 2D/3D animation, Key Visual, bộ ảnh sản phẩm, nội dung trên các kênh MXH.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-28 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-accent-gold text-sm font-bold tracking-widest uppercase mb-4">Dịch vụ</h2>
          <h3 className="text-4xl md:text-6xl font-heading font-bold text-gray-900">GIẢI PHÁP <span className="text-accent-gold">TOÀN DIỆN</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white p-10 rounded-xl border border-gray-200 hover:border-accent-gold/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h4 className="text-xl font-heading font-bold mb-4 text-gray-900">{service.title}</h4>
              <p className="text-gray-600 font-body leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
