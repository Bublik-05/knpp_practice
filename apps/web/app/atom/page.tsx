import AtomContent from "@/components/atom/AtomContent";
import BackgroundGlow from "@/components/layout/BackgroundGlow";

export default function AboutPage() {
  return (
      <main className="relative min-h-screen overflow-hidden ">
        <BackgroundGlow />
        <div className="relative z-10">
          <AtomContent />
        </div>
      </main>
    );
}
