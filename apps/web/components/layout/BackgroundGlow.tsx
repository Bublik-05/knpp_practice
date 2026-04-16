export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      {/* Светлая вуаль */}
      <div
        className="absolute left-[18%] top-[8%] h-[72%] w-[58%] rounded-[999px] blur-[120px]"
        style={{
          background: "rgba(245, 240, 233, 0.45)",
        }}
      />

      {/* Молочно-белое пятно по центру */}
      <div
        className="absolute left-[34%] top-[18%] h-[520px] w-[430px] rounded-[999px] blur-[130px]"
        style={{
          background: "rgba(255, 255, 255, 0.20)",
          transform: "rotate(8deg)",
        }}
      />

      {/* Тёплое золотое пятно сверху слева */}
      <div
        className="absolute left-[-2%] top-[-8%] h-[660px] w-[300px] rounded-[999px] blur-[120px]"
        style={{
          background: "rgba(224, 197, 143, 0.18)",
          transform: "rotate(-12deg)",
        }}
      />

      {/* Мягкое связующее пятно */}
      <div
        className="absolute left-[30%] top-[34%] h-[420px] w-[240px] rounded-[999px] blur-[110px]"
        style={{
          background: "rgba(245, 240, 233, 0.16)",
          transform: "rotate(10deg)",
        }}
      />

      {/* Холодное синее пятно справа */}
      <div
        className="absolute right-[4%] top-[24%] h-[520px] w-[220px] rounded-[999px] blur-[120px]"
        style={{
          background: "rgba(60, 80, 125, 0.14)",
          transform: "rotate(10deg)",
        }}
      />

      {/* Нижний синий акцент */}
      <div
        className="absolute right-[3%] bottom-[0%] h-[300px] w-[210px] rounded-[999px] blur-[95px]"
        style={{
          background: "rgba(17, 34, 80, 0.16)",
          transform: "rotate(14deg)",
        }}
      />
    </div>
  );
}