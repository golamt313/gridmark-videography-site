import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { ContactCTA } from "@/components/ContactCTA";

export default function PricingPage() {
    return (
        <main className="min-h-screen flex flex-col items-center bg-background">
            <Hero />
            <Pricing />
            <Footer />
        </main>
    );
}
