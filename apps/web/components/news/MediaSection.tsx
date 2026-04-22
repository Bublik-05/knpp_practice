import Image from "next/image";

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Атомная энергетика Казахстана: взгляд в будущее",
    description: "Интервью с экспертами о перспективах строительства АЭС в Казахстане",
    duration: "12:34",
  },
  {
    id: "jNQXAC9IVRw",
    title: "Как работает ядерный реактор — видеоэкскурсия",
    description: "Подробный обзор принципов работы ядерного реактора типа ВВЭР",
    duration: "08:15",
  },
  {
    id: "M7lc1UVf-VE",
    title: "Безопасность АЭС: международные стандарты",
    description: "Эксперты МАГАТЭ о системах безопасности современных атомных станций",
    duration: "15:42",
  },
  {
    id: "9bZkp7q19f0",
    title: "АЭС «Балхаш»: история проекта",
    description: "От идеи до реализации — хронология проекта атомной электростанции",
    duration: "10:20",
  },
  {
    id: "kJQP7kiw5Fk",
    title: "Международное сотрудничество в атомной сфере",
    description: "Партнёрство КАЭС с ведущими ядерными организациями мира",
    duration: "07:55",
  },
];

export default function MediaSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Мультимедиа</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="rounded-lg overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Превью */}
            <div className="bg-gray-900 aspect-video relative">
              <Image
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
                fill
                className="object-cover"
                unoptimized
              />
              {/* Оверлей с кнопкой Play */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gray-900 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              {/* Длительность */}
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                {video.duration}
              </div>
            </div>

            {/* Контент */}
            <div className="p-4">
              <p className="font-semibold text-gray-900 leading-snug mb-2">
                {video.title}
              </p>
              <p className="text-sm text-gray-500 font-light leading-relaxed mb-3">
                {video.description}
              </p>
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E4080] text-sm font-medium hover:underline flex items-center gap-1"
              >
                Смотреть на YouTube
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
