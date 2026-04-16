export default function PageHero({ title }: { title: string }) {
  return (
    <div className="relative overflow-visible bg-[#1a2f6e]" style={{ minHeight: 140 }}>
      {/* Grid texture */}
      <div
        className="absolute inset-0 overflow-hidden opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px)," +
            "repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px)",
        }}
      />

      {/* Первый атом */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          right: "16%",
          top: "-50px",
          width: 430,
          zIndex: 5,
          transform: "rotate(25deg)",
        }}
      >
        {/* золотое свечение */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl"
          style={{
            width: "38%",
            height: "38%",
            background: "rgba(224,197,143,0.30)",
            zIndex: 0,
          }}
        />

        <img
          src="/images/atom.png"
          alt=""
          aria-hidden
          className="relative z-10 w-full h-auto drop-shadow-2xl"
        />
      </div>

      {/* Второй атом */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          right: "0%",
          top: "-40px",
          width: 600,
          zIndex: 10,
          transform: "scaleX(-1) rotate(25deg)",
        }}
      >
        {/* золотое свечение */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl"
          style={{
            width: "38%",
            height: "38%",
            background: "rgba(224,197,143,0.30)",
            zIndex: 0,
          }}
        />

        <img
          src="/images/atom.png"
          alt=""
          aria-hidden
          className="relative z-10 w-full h-auto drop-shadow-2xl"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
      </div>
    </div>
  );
}