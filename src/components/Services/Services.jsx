import React from "react";
import { motion } from "framer-motion";
import imagr_S1 from "../../assets/cam5.jpeg";
import imagr_S2 from "../../assets/network.jpeg";
import imagr_S3 from "../../assets/intercom.jpeg";
import imagr_S4 from "../../assets/dashcam.webp";
import imagr_S5 from "../../assets/fingerprint.webp";
import imagr_S6 from "../../assets/alarm.jpeg";
const items = [
  {
    title: "كاميرات مراقبة",
    desc: "كاميرات عالية الجودة للمنازل والشركات مع تحكم مباشر عبر الهاتف.",
    img: `${imagr_S1}`,
  },
  {
    title: "شبكات الانترنت",
    desc: "شبكات موثوقة وربط فروعك بسرعة واستقرار كامل",
    img: `${imagr_S2}`,
  },
  { title: "اجهزة الانتركوم", desc: "تواصل آمن وسريع داخل المنشأة مع تحكم كامل بالدخول والمراقبة", img: `${imagr_S3}` },
  {
    title: "اجهزة الداش كام للسيارات",
    desc: "ألوان عصرية ودهانات متينة",
    img: `${imagr_S4}`,
  },
  {
    title: "اجهزة البصمة",
    desc: "دخول ذكي بالبصمة لحماية المنشآت والتحكم الكامل بالوصول للأفراد",
    img: `${imagr_S5}`,
  },
  {
    title: "الأنظمة الأمنية و الانذار",
    desc: "حلول ذكية للإنذار والتحكم بالدخول لحماية منشأتك بالكامل",
    img: `${imagr_S6}`,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center text-3xl font-extrabold text-navy"
        >
          خدماتنا
        </motion.h3>
        <p className="text-center text-xl  font-medium text-gold">
          نوفّر حلول مراقبة وأنظمة أمنية ذكية بمعايير عالية <br /> توريد • تركيب
          • تمديد • صيانة بأنظمة معتمدة
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="p-5 bg-white border rounded-xl shadow-sm card-hover text-center"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-md flex-shrink-0 m-auto">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-navy">{s.title}</h4>
                <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
