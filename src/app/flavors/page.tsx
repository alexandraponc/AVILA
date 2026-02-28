import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Flavors } from "@/components/Flavors";

export default function FlavorsPage() {
    return (
        <div className="bg-background min-h-screen selection:bg-charcoal selection:text-off-white flex flex-col">
            <Navbar />
            <main className="flex-1 pt-32">
                <Flavors />
            </main>
            <Footer />
        </div>
    );
}
