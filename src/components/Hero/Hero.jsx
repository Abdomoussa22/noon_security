import React from "react";
import { motion } from "framer-motion";
import bg from "../../assets/bg video.mp4";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative w-full
        h-[70vh] md:h-[100vh]
        flex items-center justify-center
        text-center
        mt-16
      "
    >
      {/* BACKGROUND VIDEO */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="
            absolute inset-0
            w-full h-full
            object-cover md:object-cover
            object-center
            bg-black
          "
        >
          <source src={bg} type="video/mp4" />
          المتصفح لا يدعم تشغيل الفيديو
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-xl md:max-w-3xl px-4 md:px-6 text-white">
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-2xl sm:text-3xl md:text-5xl
            font-extrabold
            leading-tight
          "
        >
           شبكة نون للأنظمة الأمنية
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="
            mt-3 md:mt-4
            text-sm sm:text-base md:text-lg
            text-gray-200
          "
        >
          حلول أمنية متكاملة لحماية منشأتك باحترافية عالية – كاميرات مراقبة –
          أنظمة أمنية – شبكات – صيانة داخل السعودية.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-5 md:mt-6 flex gap-3 md:gap-4 justify-center"
        >
          <a
            href="tel:+966552265155"
            className="
              bg-gold text-white font-semibold 
              px-5 py-2.5 md:px-6 md:py-3
              rounded-lg shadow-lg
              hover:bg-gold/90 transition-all
            "
          >
            اتصل الآن
          </a>

          <a
            href="https://wa.me/966552265155"
            target="_blank"
            rel="noreferrer"
            className="
              border-2 border-white
              px-5 py-2.5 md:px-6 md:py-3
              rounded-lg 
              hover:bg-white hover:text-navy
              transition-all font-semibold
            "
          >
            واتساب
          </a>
        </motion.div>
      </div>
    </section>
  );
}
