import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Slideshow from "@/components/layout/Slideshow";
import Footer from "@/components/layout/Footer";

const ttFirs = localFont({
  src: [
    { path: "../public/fonts/tt_firs_neue/TT Firs Neue Trial ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../public/fonts/tt_firs_neue/TT Firs Neue Trial Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/tt_firs_neue/TT Firs Neue Trial Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/tt_firs_neue/TT Firs Neue Trial Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-tt-firs",
});

export const metadata: Metadata = {
  title: "КАЭС — Казахстанские атомные электрические станции",
  description: "Энергия для будущего",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${ttFirs.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1 flex flex-col pt-16">
            <Slideshow />
            <main className="flex-1 flex flex-col w-full">
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
