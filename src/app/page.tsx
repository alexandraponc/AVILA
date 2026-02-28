import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Ritual } from "@/components/Ritual";
import { Flavors } from "@/components/Flavors";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-background min-h-screen selection:bg-charcoal selection:text-off-white">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Ritual />
        <Flavors />
      </main>
      <Footer />
    </div>
  );
}
