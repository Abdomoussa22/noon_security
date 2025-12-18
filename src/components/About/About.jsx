import React from "react";
import { motion } from "framer-motion";
// import About_img from '../../assets/cam1.png'
import About_img from "../../assets/bg video.mp4";
export default function About() {
  return (
    <section id="about" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* IMAGE / VIDEO */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <video
            src={About_img}
            autoPlay
            loop
            muted
            className="w-full h-[350px] rounded-2xl object-cover shadow-xl"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-right"
        >
          <h2 className="text-3xl font-extrabold text-navy mb-3 relative inline-block">
            من نحن
            <span className="block w-16 h-1 bg-gold rounded-full mt-2"></span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            نحن مؤسسة{" "}
            <span className="text-navy font-bold">
              شبكة نون للأنظمة الأمنية
            </span>
            ، نقدم حلولًا متكاملة في مجال الأنظمة الأمنية والشبكات، ونخدم
            الأفراد والشركات:
            <br />
            <br />
            – توريد وتركيب كاميرات المراقبة بأنواعها (IP – Analog)
            <br />
            – تنفيذ أنظمة الإنذار والأمن والتحكم بالدخول
            <br />
            – تصميم وتنفيذ شبكات الإنترنت والشبكات الداخلية وربط الفروع
            <br />
            – تركيب أنظمة الإنتركوم للتواصل والتحكم بالدخول
            <br />
            – تنفيذ أنظمة البصمة لإدارة الحضور والوصول
            <br />
            – الصيانة والدعم الفني لجميع الأنظمة الأمنية والشبكية
            <br />
            – حلول أمنية متكاملة من التخطيط حتى التشغيل والتسليم
            <br />
            <br />
            نتميز بالدقة في التنفيذ، وسرعة الإنجاز، واستخدام أجهزة وخامات
            معتمدة، مع التزام كامل بأعلى معايير الجودة والسلامة، لضمان حماية
            المنشآت واستقرار الأنظمة وتحقيق أعلى مستوى من الأمان لعملائنا.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
