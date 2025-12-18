import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/proj1.jpg";
import img2 from "../../assets/proj2.jpg";
import img3 from "../../assets/proj3.jpg";
import img4 from "../../assets/proj4.jpg";
import img5 from "../../assets/proj5.jpg";
import img6 from "../../assets/proj6.jpg";
import img7 from "../../assets/proj7.jpg";
import img8 from "../../assets/proj8.jpg";
import img9 from "../../assets/proj9.jpg";
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function Gallery() {
  return (
    <section id="gallery" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-center text-3xl font-extrabold text-navy mb-4">
          معرض الأعمال
        </h3>
        <p
          style={{ width: "80%", textAlign: "center", margin: "0 auto 50px" }}
          className="text-center text-xl font-medium text-gold"
        >
          نستعرض مشاريعنا المنفذة بأعلى جودة في السعودية، تشمل: كاميرات مراقبة،
          أنظمة إنذار وأمن، شبكات وإنترنت، صيانة ودعم فني، إنتركوم، وأنظمة
          البصمة. كل مشروع يعكس خبرتنا واحترافيتنا في حماية المنشآت وتحقيق أعلى
          مستويات الأمان.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-lg"
            >
              <img
                src={src}
                alt={`work-${i}`}
                className="w-full h-40 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
