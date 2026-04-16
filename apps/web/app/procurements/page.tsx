import AnnouncementList from "@/components/procurements/AnnouncementList";
import BackgroundGlow from "@/components/layout/BackgroundGlow";

export default function Procurements() {
  return (
      <main className="relative min-h-screen overflow-hidden ">
        <BackgroundGlow />  
        <AnnouncementList />
      </main>
    );
}