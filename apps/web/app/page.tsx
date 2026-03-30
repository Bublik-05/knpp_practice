import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Slideshow from "@/components/layout/Slideshow";
import News from "@/components/sections/News";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16 flex flex-col w-full">
        <Slideshow />
        <News />
      </main>
      <Footer />
    </div>
  );
}
