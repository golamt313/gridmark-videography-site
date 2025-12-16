import { Hero } from "@/components/Hero";
import { VideoGrid } from "@/components/VideoGrid";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";
import { BackToTop } from "@/components/BackToTop";
import { ContactCTA } from "@/components/ContactCTA";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Hero />
      <div className="w-full max-w-[1600px] flex-1">
        <VideoGrid />
      </div>
      <Pricing />
      <ContactCTA />
      <Footer />
      <BackToTop />
    </main>
  );
}
