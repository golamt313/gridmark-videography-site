import { Hero } from "@/components/Hero";
import { VideoGrid } from "@/components/VideoGrid";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Hero />
      <div className="w-full max-w-[1600px] flex-1">
        <VideoGrid />
      </div>
      <Footer />
    </main>
  );
}
