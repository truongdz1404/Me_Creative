import React from "react";
import { motion } from "motion/react";

const projects = [
  {
    image: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-TO-QUOC-TRONG-TIM-_-SHORTLIST.jpg",
    title: "TỔ QUỐC TRONG TIM FILM CONCERT",
    category: "Dự án tích hợp",
  },
  {
    image: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-THE-ZEI-_-ANH-DU-AN-2.png",
    title: "The Zei",
    category: "TVC",
  },
  {
    image: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-ABBANK-_-ANH-DU-AN-2.png",
    title: "Ngân Hàng ABBank",
    category: "Khác",
  },
  {
    image: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-KYMCO-_-ANH-DU-AN-2.png",
    title: "TVC KYMCO",
    category: "TVC",
  },
  {
    image: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-BIGALLY-_-ANH-DU-AN-3.png",
    title: "Show Hỷ Sắc Lạc Hồng",
    category: "Khác",
  },
  {
    image: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-DAILONG-_-ANH-DU-AN-2.png",
    title: "Phim giới thiệu Dailong Cable",
    category: "Phim doanh nghiệp",
  },
  {
    image: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-DONG-DO-_-ANH-DU-AN-2.png",
    title: "Bệnh viện Đông Đô",
    category: "Phim doanh nghiệp",
  },
  {
    image: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-DAI-ICHI-VN-2025-_-ANH-DU-AN-3.png",
    title: "Dai-ichi Life Việt Nam 2026",
    category: "Phim doanh nghiệp",
  },
  {
    image: "https://mecreative.com.vn/wp-content/uploads/2026/03/WE-DID-_-KIENLONGBANK-_-ANH-DU-AN-2.png",
    title: "KienlongBank 30 Năm",
    category: "Dự án tích hợp",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-28 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-accent-gold text-sm font-bold tracking-widest uppercase mb-4">Dự án tiêu biểu</h2>
          <h3 className="text-4xl md:text-6xl font-heading font-bold">NHỮNG <span className="text-accent-gold">KIỆT TÁC</span> SÁNG TẠO</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-secondary-dark aspect-[4/5]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-accent-gold text-sm font-bold tracking-widest uppercase mb-2">
                    {project.category}
                  </p>
                  <h4 className="text-2xl font-heading font-bold text-white">
                    {project.title}
                  </h4>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-accent-gold text-black rounded-full uppercase font-bold tracking-widest hover:bg-white transition-all duration-300"
          >
            Xem tất cả dự án
          </motion.button>
        </div>
      </div>
    </section>
  );
};
