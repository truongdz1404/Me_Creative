import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { getProjectById, getAllProjects } from "../data/projects";
import { ChevronLeft, ArrowRight } from "lucide-react";

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id || "");
  const allProjects = getAllProjects();

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Dự án không tồn tại</h1>
          <button
            onClick={() => navigate("/#projects")}
            className="px-8 py-3 bg-accent-gold text-white rounded-full font-bold hover:bg-gray-900 transition-all"
          >
            Quay lại danh sách dự án
          </button>
        </div>
      </div>
    );
  }

  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/#projects")}
            className="flex items-center gap-2 text-gray-900 hover:text-accent-gold transition-colors"
          >
            <ChevronLeft size={24} />
            <span className="font-semibold">Quay lại</span>
          </button>
          <div className="text-center">
            <p className="text-xs text-accent-gold uppercase font-bold tracking-widest">{project.category}</p>
            <h1 className="text-lg font-heading font-bold">{project.title}</h1>
          </div>
          <div className="w-24" />
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-screen max-h-[800px] overflow-hidden">
          {project.videoUrl ? (
            <div className="w-full h-full">
              <iframe
                className="w-full h-full"
                src={project.videoUrl}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          )}
        </section>

        {/* Content Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Title & Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex justify-between items-start gap-8 mb-8">
                <div>
                  <p className="text-accent-gold text-sm font-bold tracking-widest uppercase mb-3">
                    {project.category}
                  </p>
                  <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-4">
                    {project.title}
                  </h1>
                  <p className="text-xl text-gray-600">{project.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 mb-1">Khách hàng</p>
                  <p className="text-2xl font-bold text-gray-900 mb-4">{project.client}</p>
                  <p className="text-gray-600 mb-1">Năm</p>
                  <p className="text-2xl font-bold text-accent-gold">{project.year}</p>
                </div>
              </div>
            </motion.div>

            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-12 mb-20 border border-gray-200"
            >
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Tổng Quan Dự Án</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{project.longDescription}</p>
            </motion.div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-12 border border-gray-200"
              >
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Thách Thức</h3>
                <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-12 border border-gray-200"
              >
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Giải Pháp</h3>
                <p className="text-gray-600 leading-relaxed">{project.solution}</p>
              </motion.div>
            </div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-accent-gold/10 to-transparent rounded-2xl p-12 border border-accent-gold/20 mb-20"
            >
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Kết Quả Đạt Được</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent-gold text-white font-bold">
                        ✓
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{result}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Từ khóa</h3>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-900 rounded-full text-sm font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Gallery */}
            {project.gallery.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-20"
              >
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Thư Viện Hình Ảnh</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="rounded-xl overflow-hidden bg-gray-100 aspect-video"
                    >
                      <img
                        src={image}
                        alt={`${project.title} - ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Navigation Section */}
        <section className="py-20 px-6 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Previous Project */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => navigate(`/project/${prevProject.id}`)}
              >
                <p className="text-accent-gold text-sm font-bold uppercase mb-2">Dự Án Trước</p>
                <h3 className="text-2xl font-heading font-bold text-gray-900 group-hover:text-accent-gold transition-colors">
                  {prevProject.title}
                </h3>
              </motion.div>

              {/* Next Project */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer text-right md:text-right"
                onClick={() => navigate(`/project/${nextProject.id}`)}
              >
                <p className="text-accent-gold text-sm font-bold uppercase mb-2">Dự Án Tiếp Theo</p>
                <h3 className="text-2xl font-heading font-bold text-gray-900 group-hover:text-accent-gold transition-colors inline-flex items-center gap-2">
                  {nextProject.title}
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </h3>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
