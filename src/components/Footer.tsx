import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-secondary-dark pt-28 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#home" className="text-2xl font-heading font-bold tracking-widest text-white">
              ME<span className="text-accent-gold">.</span>CREATIVE
            </a>
            <p className="text-secondary-medium font-body leading-relaxed">
              Chúng tôi là agency sáng tạo hàng đầu, chuyên cung cấp các giải pháp thương hiệu toàn diện và đột phá.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:text-accent-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:text-accent-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:text-accent-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-8 uppercase tracking-widest">Liên kết</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-secondary-medium hover:text-accent-gold transition-colors">Về chúng tôi</a></li>
              <li><a href="#services" className="text-secondary-medium hover:text-accent-gold transition-colors">Dịch vụ</a></li>
              <li><a href="#projects" className="text-secondary-medium hover:text-accent-gold transition-colors">Dự án</a></li>
              <li><a href="#team" className="text-secondary-medium hover:text-accent-gold transition-colors">Đội ngũ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-8 uppercase tracking-widest">Dịch vụ</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary-medium hover:text-accent-gold transition-colors">Sản xuất hình ảnh</a></li>
              <li><a href="#" className="text-secondary-medium hover:text-accent-gold transition-colors">Thiết kế sáng tạo</a></li>
              <li><a href="#" className="text-secondary-medium hover:text-accent-gold transition-colors">Phát triển Web</a></li>
              <li><a href="#" className="text-secondary-medium hover:text-accent-gold transition-colors">Marketing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-8 uppercase tracking-widest">Liên hệ</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin size={20} className="text-accent-gold shrink-0" />
                <span className="text-secondary-medium">123 Đường ABC, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail size={20} className="text-accent-gold shrink-0" />
                <span className="text-secondary-medium">contact@mecreative.vn</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={20} className="text-accent-gold shrink-0" />
                <span className="text-secondary-medium">0123 456 789</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center">
          <p className="text-secondary-medium text-sm">
            © 2024 ME Creative. All rights reserved. Designed with passion.
          </p>
        </div>
      </div>
    </footer>
  );
};
