const docs = [
  {
    title: "План развития",
    date: "дата утверждения — 05.03.2026",
    downloadUrl: "#",
    readUrl: "#",
  },
];

function DownloadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}

function ReadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

export default function DevelopmentSection() {
  return (
    <section id="section-development" className="flex flex-col gap-4 scroll-mt-24">

      <div className="flex flex-col gap-4">
        {docs.map((doc, i) => (
          <div key={i} className="flex flex-col gap-3 bg-gray-50 rounded-lg p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
            <p className="text-gray-700 font-light">{doc.date}</p>
            <p className="font-bold text-gray-900 text-lg">{doc.title}</p>
            <div className="flex gap-3">
              <a
                href={doc.downloadUrl}
                className="inline-flex items-center gap-2 px-7 py-2 bg-[#1E4080] text-white font-light rounded-full border border-transparent hover:bg-white hover:border-[#1E4080] hover:text-black transition-colors whitespace-nowrap"
              >
                <DownloadIcon />
                скачать документ
              </a>
              <a
                href={doc.readUrl}
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-5 py-2 rounded-full font-medium hover:border-[#1E4080] hover:bg-gray-100 transition-colors"
              >
                <ReadIcon />
                читать онлайн
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
