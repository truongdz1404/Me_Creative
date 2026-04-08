import React, { useState } from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Youtube, Twitter } from "lucide-react";

export const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    region: "",
    product: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <footer id="footer" className="bg-[#2B2B2B] pt-20 pb-0 px-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Company Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-heading font-bold text-[#FF23FD]">
              Công ty cổ phần truyền thông và sáng tạo ME<br />
              <span className="text-base font-normal">( ME CREATIVE., JSC )</span>
            </h3>

            {/* Contact Info */}
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#30BBFD] shrink-0 mt-1" />
                <span className="text-white text-sm"><span className="font-bold">Địa Chỉ:</span> Số 4, Ngõ 130 Vũ Miên, Phường Tây Hồ, Thành phố Hà Nội, Việt Nam</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-[#30BBFD] shrink-0" />
                <span className="text-white text-sm"><span className="font-bold">Email:</span> me.info@mecreative.vn</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-[#30BBFD] shrink-0" />
                <span className="text-white text-sm"><span className="font-bold">Hotline:</span> +84.932.897.000</span>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 pt-4">
              <a href="https://www.facebook.com/mecreative.com.vn" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#30BBFD] flex items-center justify-center text-white hover:bg-[#1FA0E0] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-[#30BBFD] flex items-center justify-center text-white hover:bg-[#1FA0E0] transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-[#30BBFD] flex items-center justify-center text-white hover:bg-[#1FA0E0] transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-[#30BBFD] flex items-center justify-center text-white hover:bg-[#1FA0E0] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-[#30BBFD] flex items-center justify-center text-white hover:bg-[#1FA0E0] transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-6">
            <h4 className="text-3xl font-heading font-bold text-[#FF23FD]">Gửi Tin Nhắn</h4>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Tên của bạn"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white border-0 text-gray-700 placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-[#30BBFD] transition-all"
                required
              />
              
              <input
                type="tel"
                name="phone"
                placeholder="Điện thoại"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white border-0 text-gray-700 placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-[#30BBFD] transition-all"
                required
              />
              
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white border-0 text-gray-700 placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-[#30BBFD] transition-all"
                required
              />
              
              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white border-0 text-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-[#30BBFD] transition-all appearance-none cursor-pointer"
                required
              >
                <option value="">KHU VỰC</option>
                <option value="Ha Noi">Hà Nội</option>
                <option value="TP Ho Chi Minh">TP Hồ Chí Minh</option>
                <option value="Mien Bac">Các tỉnh Miền Bắc</option>
                <option value="Mien Trung">Các tỉnh Miền Trung</option>
                <option value="Mien Nam">Các tỉnh Miền Nam</option>
              </select>
              
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white border-0 text-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-[#30BBFD] transition-all appearance-none cursor-pointer"
                required
              >
                <option value="">SẢN PHẨM QUAN TÂM</option>
                <option value="Phim quang cao">Phim quảng cáo - iTVC</option>
                <option value="Phim doanh nghiep">Phim doanh nghiệp</option>
                <option value="Video Viral">Video Viral</option>
                <option value="Dich vu Hau ky">Dịch vụ Hậu kỳ</option>
                <option value="Phim 2D 3D">Phim 2D - 3D</option>
                <option value="Dich vu Khac">Dịch vụ Khác</option>
              </select>
              
              <textarea
                name="message"
                placeholder="Nội dung nhắn gửi"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                maxLength={2000}
                className="w-full px-6 py-4 bg-white border-0 text-gray-700 placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-[#30BBFD] transition-all resize-none"
              ></textarea>
              
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-[#30BBFD] hover:bg-[#1FA0E0] text-white font-bold py-4 px-8 rounded-full transition-colors text-lg"
                >
                  Gửi
                </button>
                <button
                  type="button"
                  className="w-20 h-20 bg-[#30BBFD] hover:bg-[#1FA0E0] text-white font-bold rounded-full flex items-center justify-center transition-colors flex-shrink-0"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-700 pb-12">
          <p className="text-gray-400 text-sm text-center">
            © 2025 ME Creative. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

