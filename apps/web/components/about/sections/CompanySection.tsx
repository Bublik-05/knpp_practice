import Image from "next/image";

export default function CompanySection() {
  return (
    <section id="section-about-company" className="flex flex-col gap-4 scroll-mt-24">

      <div className="flex gap-10 items-start">
        <p className="flex-1 font-light leading-relaxed text-xl">
          ТОО «Казахстанские атомные электрические станции» (ТОО «КАЭС») создано в 2014 году в соответствии с планом первоочередных мероприятий по строительству АЭС на территории Республики Казахстан (утверждён распоряжением Премьер-Министра РК от 04.05.2014 № 60-р) по обеспечению разработки предпроектной (ТЭО) и проектной (проектно-сметной) документации по строительству АЭС, а также организация работ по строительству АЭС в Республике Казахстан.
        </p>
      </div>
    </section>
  );
}
