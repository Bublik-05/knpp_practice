export interface ContactInfoData {
  companyName: string;
  phone: string;
  address: string;
  email: string;
  workdays: string;
  lunch: string;
  weekends: string;
}

interface ContactInfoProps {
  contact: ContactInfoData;
}

export default function ContactInfo({ contact }: ContactInfoProps) {
  return (
    <div className="w-full bg-[#F0F0F0]">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Наименование */}
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <p className="font-bold text-gray-900 text-xl mb-2">Наименование:</p>
            <p className="text-gray-700   text-lg font-light leading-relaxed">
              {contact.companyName}
            </p>
          </div>

          {/* Телефон / адрес / почта */}
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm space-y-4">
            <div>
              <p className="font-bold text-gray-900  text-xl">Телефон:</p>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="text-[#1E4080] hover:underline   text-lg font-light"
              >
                {contact.phone}
              </a>
            </div>
            <div>
              <p className="font-bold text-gray-900 text-xl">Адрес:</p>
              <p className="text-[#1E4080] text-lg font-light">{contact.address}</p>
            </div>
            <div>
              <p className="font-bold text-gray-900 text-xl">Почта:</p>
              <a
                href={`mailto:${contact.email}`}
                className="text-[#1E4080] hover:underline text-lg font-light"
              >
                {contact.email}
              </a>
            </div>
          </div>

          {/* Режим работы */}
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <p className="font-bold text-gray-900 text-xl mb-2">Режим работы:</p>
            <p className="text-gray-700 text-lg font-light">{contact.workdays}</p>
            <p className="text-gray-700 text-lg font-light">{contact.lunch}</p>
            <p className="text-gray-700 text-lg font-light mt-2">
              <span className="font-bold text-xl text-gray-900">Выходные:</span>{" "}
              {contact.weekends}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
