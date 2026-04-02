import Image from "next/image";

export default function CompanySection() {
  return (
    <section id="section-about" className="flex flex-col gap-6 scroll-mt-24">
      <h2 className="text-2xl font-medium text-gray-900">О ТОО «КАЭС»</h2>

      <div className="flex gap-10 items-start">
        <p className="flex-1 text-gray-600 font-light leading-relaxed text-[15px]">
          ТОО «Казахстанские атомные электрические станции» (ТОО «КАЭС) создано в 2014 году в соответствии с планом первоочередных мероприятий по строительству АЭС на территории Республики Казахстан (утверждён распоряжением Премьер-Министра РК от 04.05.2014 № 60-р) по обеспечению разработки предпроектной (ТЭО) и проектной (проектно-сметной) документации по строительству АЭС, а также организация работ по строительству АЭС в Республике Казахстан.
        </p>
        <div className="shrink-0 w-40 h-40 relative overflow-hidden">
          <Image src="/images/activities/disket.png" alt="КАЭС" fill />
        </div>
      </div>
    </section>
  );
}
