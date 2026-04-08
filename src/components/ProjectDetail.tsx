import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { getProjectById, getAllProjects } from "../data/projects";
import { ChevronLeft, ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";

export const ProjectDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const project = getProjectById(id || "");
    const allProjects = getAllProjects();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Dự án không tồn tại</h1>
                    <button
                        onClick={() => navigate("/#projects")}
                        className="px-8 py-3 bg-[#30BBFD] text-white rounded-full font-bold hover:bg-gray-900 transition-all"
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
            {/* Navbar */}
            <nav
                className={cn(
                    "fixed top-0 left-0 w-full z-50 transition-all duration-500",
                    isScrolled ? "bg-white/95 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"
                )}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <a href="#" className="flex items-center">
                        <img
                            src="https://mecreative.com.vn/wp-content/uploads/2025/08/cropped-LOGO-ME-CREATIVE-FINAL-TACH-NEN-02-scaled-2-1024x500.png"
                            alt="ME Creative Logo"
                            className="h-12 w-auto object-contain"
                        />
                    </a>
                    <button
                        onClick={() => navigate("/#projects")}
                        className={cn(
                            "flex items-center gap-2 font-semibold transition-colors duration-300",
                            isScrolled
                                ? "text-gray-900 hover:text-[#30BBFD]"
                                : "text-white hover:text-[#30BBFD]"
                        )}
                    >
                        <ChevronLeft size={24} />
                        <span>Quay lại</span>
                    </button>
                </div>
            </nav>

            <main>
                {/* Hero Section like Homepage */}
                <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
                    {/* YouTube Video Background */}
                    <div className="absolute inset-0 z-0 w-full h-full">
                        <div className="relative w-full h-full overflow-hidden">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/l1yYSuezN1w?controls=0&rel=0&playsinline=1&cc_load_policy=0&enablejsapi=1&mute=1&autoplay=1&loop=1&playlist=l1yYSuezN1w"
                                title="ME Creative Showreel 2025"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                referrerPolicy="strict-origin-when-cross-origin"
                            ></iframe>
                        </div>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6">
                        {/* Project Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-black leading-tight text-white mb-6 tracking-tighter">
                                {project.title}
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                                {project.client && `Khách hàng: ${project.client}`}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Project Content Section */}
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        {/* Project Metadata */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 pb-20 border-b border-gray-200"
                        >
                            <div>
                                <p className="text-gray-600 text-sm font-semibold uppercase tracking-widest mb-2">Năm</p>
                                <p className="text-2xl font-bold text-[#30BBFD]">{project.year}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm font-semibold uppercase tracking-widest mb-2">Khách hàng</p>
                                <p className="text-lg font-bold text-gray-900">{project.client}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm font-semibold uppercase tracking-widest mb-2">Danh mục</p>
                                <p className="text-lg font-bold text-gray-900">{project.category}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm font-semibold uppercase tracking-widest mb-2">Loại</p>
                                <p className="text-lg font-bold text-gray-900">Sản phẩm</p>
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-20"
                        >
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Về Dự Án</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
                        </motion.div>

                        {/* Challenge & Solution */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Thách Thức</h3>
                                <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Giải Pháp</h3>
                                <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                            </motion.div>
                        </div>

                        {/* Project Video */}
                        {project.videoUrl && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-20 rounded-xl overflow-hidden"
                            >
                                <iframe
                                    className="w-full aspect-video rounded-xl"
                                    src={project.videoUrl}
                                    title={project.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </motion.div>
                        )}

                        {/* Gallery */}
                        {project.gallery.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-20"
                            >
                                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Hình Ảnh Dự Án</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {project.gallery.map((image, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="rounded-xl overflow-hidden bg-gray-100"
                                        >
                                            <img
                                                src={image}
                                                alt={`${project.title} - ${index + 1}`}
                                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                                                referrerPolicy="no-referrer"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Results */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-20"
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
                                            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#30BBFD] text-white font-bold">
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
                        {/* Navigation Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-20 border-t border-gray-200">
                            {/* Previous Project */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                                onClick={() => navigate(`/project/${prevProject.id}`)}
                            >
                                <p className="text-[#30BBFD] text-sm font-bold uppercase mb-2">Dự Án Trước</p>
                                <h3 className="text-2xl font-heading font-bold text-gray-900 group-hover:text-[#30BBFD] transition-colors">
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
                                <p className="text-[#30BBFD] text-sm font-bold uppercase mb-2">Dự Án Tiếp Theo</p>
                                <h3 className="text-2xl font-heading font-bold text-gray-900 group-hover:text-[#30BBFD] transition-colors inline-flex items-center gap-2">
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

