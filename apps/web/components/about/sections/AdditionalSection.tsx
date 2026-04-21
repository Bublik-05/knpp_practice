import Image from "next/image";

export default function AdditionalSection() {
  return (
    <section id="section-about-additional" className="flex flex-col gap-4 scroll-mt-24">

      <div className="flex gap-10 items-start">
        <div className="flex-1 min-w-0 flex flex-col gap-4 text-xl font-light leading-relaxed">
          <p>
            Штат ТОО «КАЭС» укомплектован специалистами, имеющими профильное образование и опыт работы в атомной отрасли и традиционной электроэнергетике. В настоящее время компания готовит научно-обоснованные предложения по срокам, месту строительства и объемам мощности АЭС в соответствии с Общенациональным Планом мероприятий по реализации Послания Главы государства народу Казахстана от 1 сентября 2021 года «Единство народа и системные реформы – прочная основа процветания страны».
          </p>
        </div>
      </div>
    </section>
  );
}
