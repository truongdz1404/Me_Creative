import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { getServiceById, getAllServices } from "../data/services";
import { ArrowRight, BarChart3, Box, Sliders, Film, Plus, Minus } from "lucide-react";
import { Megaphone, Camera, Palette, Globe } from "lucide-react";

const iconMap: { [key: string]: React.ReactNode } = {
    Megaphone: <Megaphone size={40} className="text-[#30BBFD]" />,
    Camera: <Camera size={40} className="text-[#30BBFD]" />,
    Palette: <Palette size={40} className="text-[#30BBFD]" />,
    Globe: <Globe size={40} className="text-[#30BBFD]" />,
};

const featureIconMap: { [key: string]: React.ReactNode } = {
    BarChart: <BarChart3 size={32} className="text-[#30BBFD]" />,
    Box: <Box size={32} className="text-[#30BBFD]" />,
    Sliders: <Sliders size={32} className="text-[#30BBFD]" />,
    Film: <Film size={32} className="text-[#30BBFD]" />,
};

export const ServiceDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const service = getServiceById(id || "");
    const allServices = getAllServices();
    const [expandedFaq, setExpandedFaq] = useState<number>(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Dịch vụ không tồn tại</h1>
                    <button
                        onClick={() => {
                            navigate("/");
                            setTimeout(() => {
                                const element = document.getElementById("services");
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" });
                                }
                            }, 100);
                        }}
                        className="px-8 py-3 bg-[#30BBFD] text-white rounded-full font-bold hover:bg-gray-900 transition-all"
                    >
                        Quay lại danh sách dịch vụ
                    </button>
                </div>
            </div>
        );
    }

    const currentIndex = allServices.findIndex(s => s.id === service.id);
    const nextService = currentIndex < allServices.length - 1 ? allServices[currentIndex + 1] : allServices[0];
    const prevService = currentIndex > 0 ? allServices[currentIndex - 1] : allServices[allServices.length - 1];

    return (
        <div className="min-h-screen bg-white text-gray-900">
            <main>
                {/* Breadcrumb Section with Video Background */}
                <section className="relative w-full pt-24 pb-16 overflow-hidden bg-black/80">
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
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="mb-6 flex justify-center">
                                {iconMap[service.icon]}
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-tight text-white mb-6 tracking-tighter">
                                {service.title}
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                                {service.shortDescription}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Service Content Section */}
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        {/* Main Title & Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16 text-center"
                        >
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
                                Transforming ideas into visually stunning narratives.
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                                {service.description}
                            </p>
                        </motion.div>

                        {/* Service Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-20 pb-20 border-b border-gray-200"
                        >
                            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Service description</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                            <p className="text-gray-600 leading-relaxed">{service.longDescription}</p>
                        </motion.div>

                        {/* Features Section */}
                        {service.features && service.features.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-20"
                            >
                                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-10">Service description</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {service.features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex gap-6"
                                        >
                                            <div className="flex-shrink-0">
                                                {featureIconMap[feature.icon]}
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* What's Included Section */}
                        {service.whatIncluded && service.whatIncluded.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-20"
                            >
                                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8">What's included</h3>
                                <div className="space-y-4">
                                    {service.whatIncluded.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                            className="flex gap-4 p-4"
                                        >
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#30BBFD] text-white text-sm">
                                                    ✓
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className="text-gray-900 font-semibold mb-1">{item.title}</h5>
                                                <p className="text-gray-600 text-sm">{item.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Benefits & Deliverables */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Lợi Ích</h3>
                                <ul className="space-y-4">
                                    {service.benefits.map((benefit, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex gap-3"
                                        >
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#30BBFD] text-white text-sm font-bold">
                                                    ✓
                                                </div>
                                            </div>
                                            <p className="text-gray-600">{benefit}</p>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Thành Phẩm</h3>
                                <ul className="space-y-4">
                                    {service.deliverables.map((deliverable, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: 10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex gap-3"
                                        >
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#30BBFD] text-white text-sm font-bold">
                                                    ✓
                                                </div>
                                            </div>
                                            <p className="text-gray-600">{deliverable}</p>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        {/* Process Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-20"
                        >
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Quy Trình Làm Việc</h2>
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                {service.process.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative"
                                    >
                                        <div className="bg-gradient-to-br from-[#30BBFD] to-[#0a9cdc] rounded-xl p-6 text-white h-full flex flex-col items-center text-center">
                                            <div className="mb-3 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
                                                {index + 1}
                                            </div>
                                            <p className="font-semibold text-sm">{step}</p>
                                        </div>
                                        {index < service.process.length - 1 && (
                                            <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                                                <ArrowRight size={24} className="text-[#30BBFD]" />
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Gallery */}
                        {service.gallery.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-20"
                            >
                                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Hình Ảnh Dịch Vụ</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {service.gallery.map((image, index) => (
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
                                                alt={`${service.title} - ${index + 1}`}
                                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                                                referrerPolicy="no-referrer"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* FAQ Section */}
                        {service.faqs && service.faqs.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-20"
                            >
                                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Popular questions</h2>
                                <div className="space-y-4">
                                    {service.faqs.map((faq, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                            className="border border-gray-200 rounded-lg overflow-hidden"
                                        >
                                            <button
                                                onClick={() => setExpandedFaq(expandedFaq === index ? -1 : index)}
                                                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                            >
                                                <h4 className="text-lg font-semibold text-gray-900 text-left">{faq.question}</h4>
                                                {expandedFaq === index ? (
                                                    <Minus size={24} className="text-[#30BBFD] flex-shrink-0" />
                                                ) : (
                                                    <Plus size={24} className="text-[#30BBFD] flex-shrink-0" />
                                                )}
                                            </button>
                                            {expandedFaq === index && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="px-6 py-4 bg-gray-50 border-t border-gray-200"
                                                >
                                                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                                </motion.div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Tags */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mb-20"
                        >
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Từ khóa</h3>
                            <div className="flex flex-wrap gap-3">
                                {service.tags.map((tag, index) => (
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
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                                onClick={() => navigate(`/service/${prevService.id}`)}
                            >
                                <p className="text-[#30BBFD] text-sm font-bold uppercase mb-2">Dịch Vụ Trước</p>
                                <h3 className="text-2xl font-heading font-bold text-gray-900 group-hover:text-[#30BBFD] transition-colors">
                                    {prevService.title}
                                </h3>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer text-right"
                                onClick={() => navigate(`/service/${nextService.id}`)}
                            >
                                <p className="text-[#30BBFD] text-sm font-bold uppercase mb-2">Dịch Vụ Tiếp Theo</p>
                                <h3 className="text-2xl font-heading font-bold text-gray-900 group-hover:text-[#30BBFD] transition-colors inline-flex items-center gap-2">
                                    {nextService.title}
                                    <ArrowRight size={24} />
                                </h3>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};
