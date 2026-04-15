import AnnouncementCard from "./AnnouncementCard";
import { announcements } from "@/lib/announcements";
import Breadcrumb from "@/components/ui/Breadcrumb";
import PageHero from "../layout/PageHero";

export default function AnnouncementList() {
  return (
    <section>
      <PageHero title="Закупки" />
      <div className="flex w-full px-30 pb-10 flex-col gap-5">
        <div className="flex flex-col justify-between flex-[1.4] py-14">
          <Breadcrumb
            items={[{ label: "Закупки" }]}
            className="mb-8"
          />
          <div className="flex flex-col gap-6">
            <h1 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl">
              Информация для потенциальных поставщиков
            </h1>
            <p className="font-light leading-relaxed text-lg">
              Товарищество с ограниченной ответственностью «Казахстанские атомные
              электрические станции» настоящим сообщает, что вся информация по
              закупкам Товарищества (планы закупок, объявления, итоги, протоколы и
              т.д.) размещена на Портале закупок АО «Самрук-Казына».
            </p>
          </div>
        </div>
              
        <div className="flex flex-col flex-[0.6] gap-4 py-10">
          {announcements.map((item) => (
            <AnnouncementCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      
    </section>
  );
}
