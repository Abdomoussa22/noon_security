import React from "react";
import { FaInstagram, FaSnapchatGhost, FaTiktok } from "react-icons/fa";
import logo from "/noon-logo.jpeg";

export default function Footer() {
  return (
    <footer className="py-8 bg-navy text-white mt-10">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center text-center sm:text-right">
          
          {/* Logo */}
          <div className="flex justify-center sm:justify-start">
            <img
              src={logo}
              alt="Logo"
              className="w-20 h-20 object-cover rounded-full shadow-lg border border-white/30"
            />
          </div>

          {/* Text */}
          <div className="text-center">
            <p className="text-lg font-medium">
              © {new Date().getFullYear()} مؤسسة شبكة نون للأنظمة الأمنية
            </p>
          </div>

          {/* Social Media */}
          <div className="flex justify-center sm:justify-end items-center gap-4">
            <a
              target="_blank"
              href="https://www.instagram.com/nooon_network/"
              className="p-3 bg-white/10 border border-white/20 rounded-full hover:bg-white hover:text-navy transition duration-200"
            >
              <FaInstagram size={20} />
            </a>

            <a
              target="_blank"
              href=""
              className="p-3 bg-white/10 border border-white/20 rounded-full hover:bg-white hover:text-navy transition duration-200"
            >
              <FaSnapchatGhost size={22} />
            </a>

            <a
              target="_blank"
              href="https://www.tiktok.com/@noon.network"
              className="p-3 bg-white/10 border border-white/20 rounded-full hover:bg-white hover:text-navy transition duration-200"
            >
              <FaTiktok size={20} />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="mt-6 h-[1px] w-full bg-white/20" />

        {/* Bottom small text */}
        <p className="text-center text-sm text-white/70 mt-4">
          جميع الحقوق محفوظة – تنفيذ بجودة عالية واحترافية
        </p>
      </div>
    </footer>
  );
}
