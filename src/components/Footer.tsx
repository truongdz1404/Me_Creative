import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 pt-28 pb-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center">
              <img 
                src="https://mecreative.com.vn/wp-content/uploads/2025/08/cropped-LOGO-ME-CREATIVE-FINAL-TACH-NEN-02-scaled-2-1024x500.png" 
                alt="ME Creative Logo" 
                className="h-12 w-auto object-contain invert"
              />
            </a>
            <p className="text-gray-400 font-body leading-relaxed">
              Chúng tôi là agency sáng tạo hàng đầu, chuyên cung cấp các giải pháp thương hiệu toàn diện và đột phá.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/mecreative.com.vn" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:text-[#30BBFD] transition-colors" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:text-[#30BBFD] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:text-[#30BBFD] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-8 uppercase tracking-widest">Liên kết</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-400 hover:text-[#30BBFD] transition-colors">Về chúng tôi</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#30BBFD] transition-colors">Dịch vụ</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-[#30BBFD] transition-colors">Dự án</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-[#30BBFD] transition-colors">Đội ngũ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-8 uppercase tracking-widest">Dịch vụ</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-[#30BBFD] transition-colors">Sản xuất hình ảnh</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#30BBFD] transition-colors">Thiết kế sáng tạo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#30BBFD] transition-colors">Phát triển Web</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#30BBFD] transition-colors">Marketing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-8 uppercase tracking-widest">Liên hệ</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin size={20} className="text-[#30BBFD] shrink-0" />
                <span className="text-gray-400">Số 4, Ngõ 130 Vũ Miên, Phường Tây Hồ, Thành phố Hà Nội, Việt Nam</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail size={20} className="text-[#30BBFD] shrink-0" />
                <span className="text-gray-400">me.info@mecreative.vn</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={20} className="text-[#30BBFD] shrink-0" />
                <span className="text-gray-400">+84.932.897.000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 ME Creative. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

