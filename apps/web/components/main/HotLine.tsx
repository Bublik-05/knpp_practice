"use client";

const features = [
  {
    id: 1,
    text: "Рассмотрение 100%\nобращений",
  },
  {
    id: 2,
    text: "Конфиденциальность и анонимность",
    highlight: true,
  },
  {
    id: 3,
    text: "Сообщите нам\nhotline@atom.gov.kz",
  },
];

export default function HotLine() {
  return (
    <section className="p-30 flex flex-col gap-10">
      {/* Заголовок */}
      <div className="flex flex-col gap-2 text-center items-center">
        <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl">
          Горячая линия
        </h2>
        <p className="font-medium text-xl leading-relaxed max-w-xl">
          Мы гарантируем вам
        </p>
      </div>

      <div className="w-full py-10 flex items-center justify-between gap-8">
        {features.map((f, i) => (
          <div key={f.id} className="flex-1 flex items-center text-center justify-center">
            {/* Разделитель слева */}
            {i > 0 && (
              <div className="w-px h-12 bg-white/10  shrink-0" />
            )}

            {f.highlight ? (
              /* Текст с анимацией сверкания */
              <span
                className="text-center text-3xl font-medium whitespace-pre-line leading-snug shimmer-text"
                style={{
                  background:
                    "linear-gradient(90deg, #3B5FA0 0%, #3B5FA0 30%, #8AABF7 50%, #3B5FA0 70%, #3B5FA0 100%)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer 4.8s linear infinite",
                }}
              >
                {f.text}
              </span>
            ) : (
              <p
                className="text-center text-[#3B5FA0] text-xl font-light whitespace-pre-line leading-snug"
              >
                {f.text}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Keyframe animation */}
      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </section>
  );
}
