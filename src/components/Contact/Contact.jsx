import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { FaTiktok, FaSnapchatGhost, FaInstagramSquare } from "react-icons/fa";

export default function Contact() {
  // ضع روابطك هنا
  const phone = "+966552265155";
  const whatsappLink = `https://wa.me/966552265155`;
  const email = "wap8noon@gmail.com";
  const addressText = "الرياض - الشفاء - طريق ديراب بعد ستي مول";

  const socialLinks = {
    Snapchat: "",
    instagram: "https://www.instagram.com/nooon_network/",
    tiktok: "https://www.tiktok.com/@noon.network",
    // ضع روابط صفحاتك الحقيقية بدل '#'
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
           initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold text-navy text-center"
        >
          تواصل معنا
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.30, delay: 0.30 }}
          className="text-gray-600 mt-3 text-center"
        >
          يسعدنا تواصلك معنا — استشارة مجانية وطلبات عروض الأسعار متاحة الآن.
        </motion.p>

        {/* Main contact area */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: contact actions */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-md p-6 md:mt-24"
          >
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-navy text-white shadow hover:opacity-95 transition w-full"
                aria-label="اتصل الآن"
              >
                <Phone size={18} />
                <span className="font-medium">اتصل الآن</span>
                <span className="mr-auto text-sm opacity-90">{phone}</span>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gold text-white font-semibold shadow hover:opacity-95 transition w-full"
                aria-label="تواصل واتساب"
              >
                <MessageCircle size={18} />
                <span>تواصل عبر واتساب</span>
                <span className="mr-auto text-sm opacity-90">رسالة سريعة</span>
              </a>

              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg flex-1">
                  <Mail size={20} className="text-navy mt-0.5" />
                  <div className="text-right">
                    <div className="text-sm text-gray-700">
                      البريد الإلكتروني
                    </div>
                    <div className="text-sm font-medium">{email}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg flex-1">
                  <MapPin size={20} className="text-navy mt-0.5" />
                  <div className="text-right">
                    <div className="text-sm text-gray-700">العنوان</div>
                    <div className="text-sm font-medium">{addressText}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: social + small form mockup */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-md p-6"
          >
            <h3 className="text-lg font-semibold text-navy text-right">
              تابعنا على
            </h3>

            <div className="mt-4 flex justify-center md:justify-start gap-4">
              <a
                href={socialLinks.Snapchat}
                target="_blank"
                rel="noreferrer"
                aria-label="Snapchat"
                className="p-3 bg-white border rounded-full shadow hover:bg-navy hover:text-white transition"
              >
                <FaSnapchatGhost />
              </a>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-3 bg-white border rounded-full shadow hover:bg-navy hover:text-white transition"
              >
                <FaInstagramSquare />
              </a>

              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="p-3 bg-white border rounded-full shadow hover:bg-navy hover:text-white transition"
              >
                <FaTiktok />
              </a>
            </div>

            <div className="mt-6 text-right">
              <h4 className="text-md font-medium text-gray-800">
                أو اترك لنا رسالة
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                اكتب رقمك ورسالتك وسنتواصل معك في أقرب وقت.
              </p>

              {/* Simple non-submitting form (placeholder). يمكنك توصيله لأي backend لاحقًا */}
              <form
                action="#"
                className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="الاسم"
                  className="p-3 border rounded-lg"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="رقم الجوال"
                  className="p-3 border rounded-lg"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="البريد الإلكتروني"
                  className="p-3 border rounded-lg sm:col-span-2"
                />
                <textarea
                  name="message"
                  placeholder="نص الرسالة"
                  className="p-3 border rounded-lg sm:col-span-2 h-28"
                />
                <button
                  type="submit"
                  className="sm:col-span-2 px-4 py-3 bg-navy text-white rounded-lg shadow hover:opacity-95 transition"
                >
                  أرسل الرسالة
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
