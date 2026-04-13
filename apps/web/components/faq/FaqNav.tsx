"use client";

export type FaqSectionId = "general" | "project" | "cooperation";

interface Props {
  active: FaqSectionId;
  onSelect: (id: FaqSectionId) => void;
}

const navItems: { id: FaqSectionId; label: string }[] = [
  { id: "general",     label: "Об АЭС и атомной энергетике" },
  { id: "project",     label: "О проекте в Казахстане" },
  { id: "cooperation", label: "Вакансии и сотрудничество" },
];

export default function FaqNav({ active, onSelect }: Props) {
  return (
    <aside className="pl-8 shrink-0">
      <div className="sticky top-16" style={{ height: "calc(100vh - 4rem)", overflowY: "auto" }}>
        <div className="bg-white rounded-lg shadow-sm flex flex-col overflow-hidden w-64">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`
                flex items-start justify-between text-left gap-3 px-5 py-4 text-[15px] font-medium
                transition-colors duration-150
                ${i > 0 ? "border-t border-gray-100" : ""}
                ${active === item.id
                  ? "bg-[#1E4080] text-white"
                  : "text-gray-800 hover:bg-gray-200"}
              `}
            >
              <span>{item.label}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0 mt-0.5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
