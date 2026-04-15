"use client";

interface Props {
  externalUrl: string;
  isInternship: boolean;
}

export default function ApplyButton({ externalUrl, isInternship }: Props) {
  const handleClick = () => {
    if (isInternship) {
      document.getElementById("internship-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.open(externalUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[#1E4080] px-6 py-3 text-sm font-medium text-white hover:bg-[#162f66] transition-colors shadow-sm cursor-pointer"
    >
      Откликнуться
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}
