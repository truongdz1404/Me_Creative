import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Camera, Palette, Globe, Megaphone } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { getAllServices } from "../data/services";

const iconMap: { [key: string]: React.ReactNode } = {
  Megaphone: <Megaphone size={40} className="text-[#30BBFD]" />,
  Camera: <Camera size={40} className="text-[#30BBFD]" />,
  Palette: <Palette size={40} className="text-[#30BBFD]" />,
  Globe: <Globe size={40} className="text-[#30BBFD]" />,
};

export const Services = () => {
  const navigate = useNavigate();
  const services = getAllServices();

  return (
    <section id="services" className="py-28 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-[#30BBFD] text-sm font-bold tracking-widest uppercase mb-4">Dịch vụ</h2>
          <h3 className="text-4xl md:text-6xl font-heading font-bold text-gray-900">GIẢI PHÁP <span className="text-[#30BBFD]">TOÀN DIỆN</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white p-10 rounded-xl border border-gray-200 hover:border-[#30BBFD]/50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => navigate(`/service/${service.id}`)}
            >
              <div className="mb-6">{iconMap[service.icon]}</div>
              <h4 className="text-xl font-heading font-bold mb-4 text-gray-900 group-hover:text-[#30BBFD] transition-colors">{service.title}</h4>
              <p className="text-gray-600 font-body leading-relaxed mb-6">
                {service.shortDescription}
              </p>
              <div className="flex items-center gap-2 text-[#30BBFD] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Tìm hiểu thêm</span>
                <ArrowRight size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

