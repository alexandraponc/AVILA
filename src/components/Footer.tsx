import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-background pt-24 pb-12 px-6 md:px-12 border-t border-charcoal/10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
                {/* Brand */}
                <div className="flex flex-col items-center md:items-start space-y-6">
                    <Image
                        src="/logo.png"
                        alt="AVILA+"
                        width={140}
                        height={50}
                        className="object-contain h-12 w-auto mix-blend-multiply opacity-80"
                    />
                    <p className="text-sm text-charcoal/60 max-w-xs text-center md:text-left font-sans">
                        Protein reimagined for everyday life. Swiss quality, clean label, effortless sophistication.
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-col md:flex-row gap-12 text-center md:text-left">
                    <div className="flex flex-col space-y-4">
                        <h4 className="font-display font-semibold text-charcoal tracking-wide uppercase text-sm">Explore</h4>
                        <Link href="/our-story" className="text-sm text-charcoal/70 hover:text-charcoal transition-colors">Our Story</Link>
                        <Link href="/science" className="text-sm text-charcoal/70 hover:text-charcoal transition-colors">The Science</Link>
                        <Link href="/flavors" className="text-sm text-charcoal/70 hover:text-charcoal transition-colors">Flavors</Link>
                        <Link href="/shop" className="text-sm text-charcoal/70 hover:text-charcoal transition-colors">Shop</Link>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h4 className="font-display font-semibold text-charcoal tracking-wide uppercase text-sm">Legal</h4>
                        <Link href="/terms" className="text-sm text-[#555555] hover:text-charcoal transition-colors">Terms of Service</Link>
                        <Link href="/privacy" className="text-sm text-[#555555] hover:text-charcoal transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-charcoal/10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-2 text-center md:text-left">
                    <p className="text-xs text-[#555555]">
                        &copy; {new Date().getFullYear()} AVILA Clear Protein Soda. All rights reserved.
                    </p>
                    <p className="font-mono text-[10px] text-[#555555] tracking-widest uppercase mt-2">
                        AVILA+ is a registered trademark. Engineered and Produced in Switzerland.
                    </p>
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="text-charcoal/50 hover:text-charcoal transition-colors text-sm">Instagram</a>
                    <a href="#" className="text-charcoal/50 hover:text-charcoal transition-colors text-sm">TikTok</a>
                </div>
            </div>
        </footer>
    );
}
