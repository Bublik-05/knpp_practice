import PageHero from "@/components/layout/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import BackgroundGlow from "@/components/layout/BackgroundGlow";
import {
  ContactInfo,
  ContactMap,
  ContactFeedback,
  type ContactInfoData,
} from "@/components/contact";

const contact: ContactInfoData = {
  companyName:
    'Товарищество с ограниченной ответственностью «Казахстанские атомные электрические станции»',
  phone: "+7 (7172) 57 57 48",
  address: 'пр. Мангилик ел, 57а БЦ "Аура"',
  email: "kense@knpp.kz",
  workdays: "Пн-Пт: 09:00–18:30",
  lunch: "Обед: 13:00–14:30",
  weekends: "суббота, воскресенье",
};

const mapCoordinates = {
  lat: 51.1282,
  lng: 71.4306,
};

export default function ContactsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden ">
      <BackgroundGlow />
      <PageHero title="Контакты" />
      <div className="max-w-7xl mx-auto px-8 pt-8">
        <Breadcrumb items={[{ label: "Контакты" }]} />
      </div>
      <ContactInfo contact={contact} />
      <ContactMap
        lat={mapCoordinates.lat}
        lng={mapCoordinates.lng}
        address={contact.address}
      />
      <ContactFeedback />
    </main>
  );
}
