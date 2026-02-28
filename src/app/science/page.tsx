import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Science } from "@/components/Science";

export default function SciencePage() {
    return (
        <div className="bg-background min-h-screen selection:bg-charcoal selection:text-off-white flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Science />
            </main>
            <Footer />
        </div>
    );
}
