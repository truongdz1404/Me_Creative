import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { getAllProjects } from "../data/projects";

export const Projects = () => {
  const navigate = useNavigate();
  const projects = getAllProjects();

  return (
    <section id="projects" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-[#30BBFD] text-sm font-bold tracking-widest uppercase mb-4">Dự án tiêu biểu</h2>
          <h3 className="text-4xl md:text-6xl font-heading font-bold text-gray-900">NHỮNG <span className="text-[#30BBFD]">KIỆT TÁC</span> SÁNG TẠO</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => navigate(`/project/${project.id}`)}
              className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/5] border border-gray-200 cursor-pointer"
            >
              <img
                src={project.thumbnailImage}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-[#30BBFD] text-sm font-bold tracking-widest uppercase mb-2">
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
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-12 py-4 bg-accent-gold text-white rounded-full uppercase font-bold tracking-widest hover:bg-gray-900 transition-all duration-300"
          >
            Xem tất cả dự án
          </motion.button>
        </div>
      </div>
    </section>
  );
};

