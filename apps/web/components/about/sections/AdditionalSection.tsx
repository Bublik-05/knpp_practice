import Image from "next/image";

export default function AdditionalSection() {
  return (
    <section id="section-additional" className="flex flex-col gap-4 scroll-mt-24">
      <h2 className="text-3xl font-medium text-gray-900">Дополнительная информация</h2>

      <div className="flex gap-10 items-start">
        <div className="flex-1 min-w-0 flex flex-col gap-4 font-light leading-relaxed">
          <p>
            Штат ТОО «КАЭС» укомплектован специалистами, имеющими профильное образование и опыт работы в атомной отрасли и традиционной электроэнергетике. В настоящее время компания готовит научно-обоснованные предложения по срокам, месту строительства и объемам мощности АЭС в соответствии с Общенациональным Планом мероприятий по реализации Послания Главы государства народу Казахстана от 1 сентября 2021 года «Единство народа и системные реформы – прочная основа процветания страны».
          </p>
        </div>
        <div className="shrink-0 w-55 h-55 relative ">
          <Image
            src="/images/activities/fluent_clipboard-settings.svg"
            alt="Информация"
            fill
            className="object-contain "
          />
        </div>
      </div>
    </section>
  );
}
