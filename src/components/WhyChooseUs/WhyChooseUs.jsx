import React from "react";
import noon_img from '../../assets/noon .png'
export default function WhyChooseUs() {
  return (
    <section id="sucsses" className="relative bg-navy py-20">
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 
        bg-[radial-gradient(#1C7C7A_1px,transparent_1px)]
        [background-size:40px_40px]">
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            لماذا تختار <span className="text-gold">شبكة نون</span>؟
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            حلول أمنية وتقنية متكاملة بمعايير عالية تناسب الأفراد والشركات
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={noon_img}
              alt="Security Systems"
              className="w-full max-w-sm rounded-xl" 
            />
          </div>

          {/* Cards */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">

            <div className="bg-gold border border-gray-400 rounded-xl p-6">
              <h3 className="text-white text-lg font-semibold mb-2">
                فريق متخصص ومحترف
              </h3>
              <p className="text-white text-sm">
                مهندسون وفنيون بخبرة عملية في تنفيذ أنظمة المراقبة والشبكات.
              </p>
            </div>

            <div className="bg-gold border border-gray-400 rounded-xl p-6">
              <h3 className="text-white text-lg font-semibold mb-2">
                حلول مخصصة لكل منشأة
              </h3>
              <p className="text-white text-sm">
                ندرس احتياج الموقع وننفذ الحل الأمني الأنسب بأعلى كفاءة.
              </p>
            </div>

            <div className="bg-gold border border-gray-400 rounded-xl p-6">
              <h3 className="text-white text-lg font-semibold mb-2">
                أحدث التقنيات المعتمدة
              </h3>
              <p className="text-white text-sm">
                نستخدم أحدث أجهزة وأنظمة المراقبة مع تحديثات مستمرة.
              </p>
            </div>

            <div className="bg-gold border border-gray-400rounded-xl p-6">
              <h3 className="text-white text-lg font-semibold mb-2">
                دعم فني واستجابة سريعة
              </h3>
              <p className="text-white text-sm">
                خدمة ما بعد البيع ودعم فني سريع لضمان استمرارية الأنظمة.
              </p>
            </div>

            <div className="bg-gold border border-gray-400 rounded-xl p-6">
              <h3 className="text-white text-lg font-semibold mb-2">
                أسعار تنافسية وحلول مرنة
              </h3>
              <p className="text-white text-sm">
                خطط أسعار تناسب جميع الاحتياجات مع جودة مضمونة.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
