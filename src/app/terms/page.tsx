"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";

export default function TermsOfServicePage() {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const sections = document.querySelectorAll('section[id^="section-"]');

        const observer = new IntersectionObserver(
            (entries) => {
                let foundAny = false;
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                        foundAny = true;
                    }
                });
            },
            { rootMargin: "-20% 0px -60% 0px" } // trigger area
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            // Account for sticky navbar height
            const y = element.getBoundingClientRect().top + window.scrollY - 160;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const toc = [
        { id: "section-1", title: "1. General Conditions" },
        { id: "section-2", title: "2. Products & Nutrition" },
        { id: "section-3", title: "3. Pricing & Payment" },
        { id: "section-4", title: "4. Shipping & Delivery" },
        { id: "section-5", title: "5. Returns & Refunds" },
        { id: "section-6", title: "6. Intellectual Property" },
        { id: "section-7", title: "7. Limitation of Liability" },
        { id: "section-8", title: "8. Governing Law" },
        { id: "section-9", title: "9. Changes to Terms" },
        { id: "section-10", title: "10. Contact Information" },
    ];

    return (
        <div className="bg-[#F9F8F5] min-h-screen selection:bg-charcoal selection:text-off-white flex flex-col font-sans">
            <style jsx global>{`
                html {
                   scroll-behavior: smooth;
                }
                @media print {
                    nav, footer, .toc-sidebar {
                        display: none !important;
                    }
                    body, .bg-[#F9F8F5] {
                        background-color: white !important;
                    }
                    * {
                        color: black !important;
                    }
                    main {
                        padding-top: 0 !important;
                    }
                }
            `}</style>

            <Navbar />

            <main className="flex-1 pt-48 pb-[120px] px-6 md:px-12 flex max-w-[1200px] mx-auto w-full gap-16 items-start">

                {/* Desktop TOC Sidebar */}
                <div className="hidden lg:block sticky top-48 w-64 shrink-0 toc-sidebar">
                    <p className="font-mono text-xs uppercase tracking-widest text-charcoal/50 mb-6">Table of Contents</p>
                    <nav className="flex flex-col space-y-3 border-l border-charcoal/10 pl-4">
                        {toc.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => scrollToSection(e, item.id)}
                                className={`text-sm transition-all duration-300 hover:text-charcoal ${activeSection === item.id ? 'text-charcoal font-semibold translate-x-1' : 'text-charcoal/50'}`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Main Content Area */}
                <div className="w-full max-w-[800px]">
                    <div className="flex justify-between items-start mb-12">
                        <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-charcoal" style={{ letterSpacing: "-0.02em" }}>
                            TERMS OF SERVICE
                        </h1>
                        <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-charcoal/60 bg-charcoal/5 px-3 py-1.5 rounded-full mt-2">
                            [REVISED: 28.02.2026]
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none text-charcoal/80 leading-[1.6]">
                        <p className="mb-12 text-lg">
                            Welcome to AVILA+. These Terms of Service ("Terms") govern your use of our website and the purchase of our sparkling protein water. By accessing our site or purchasing our products, you agree to be bound by these Terms.
                        </p>

                        <section id="section-1" className="mb-12 scroll-mt-32">
                            <h2 className="font-display font-medium text-3xl text-charcoal mb-6 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
                                <span className="font-mono text-xl md:text-2xl mr-3 text-charcoal/40 font-normal">1.</span>
                                General Conditions
                            </h2>
                            <ul className="space-y-4">
                                <li><strong>Identity:</strong> AVILA+ is a brand operated in Switzerland.</li>
                                <li><strong>Eligibility:</strong> By using this site, you represent that you are at least the age of majority in your jurisdiction.</li>
                                <li><strong>Service Refusal:</strong> We reserve the right to refuse service to anyone for any reason at any time.</li>
                            </ul>
                        </section>

                        <section id="section-2" className="mb-12 scroll-mt-32">
                            <h2 className="font-display font-medium text-3xl text-charcoal mb-6 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
                                <span className="font-mono text-xl md:text-2xl mr-3 text-charcoal/40 font-normal">2.</span>
                                Products & Nutrition
                            </h2>
                            <ul className="space-y-4">
                                <li><strong>Precision:</strong> We strive to display our product (AVILA+ Sparkling Protein Water) as accurately as possible.</li>
                                <li><strong>Disclaimer:</strong> Our product delivers 10g of hydrolyzed whey isolate. While we focus on "Science Made Simple," our products are not intended to diagnose, treat, or cure any medical condition.</li>
                                <li><strong>Availability:</strong> All products are subject to availability and we reserve the right to limit quantities.</li>
                            </ul>
                        </section>

                        <section id="section-3" className="mb-12 scroll-mt-32">
                            <h2 className="font-display font-medium text-3xl text-charcoal mb-6 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
                                <span className="font-mono text-xl md:text-2xl mr-3 text-charcoal/40 font-normal">3.</span>
                                Pricing & Payment
                            </h2>
                            <ul className="space-y-4">
                                <li><strong>Currency:</strong> All prices are listed in Swiss Francs (CHF) unless otherwise stated.</li>
                                <li><strong>Changes:</strong> Prices for our products are subject to change without notice.</li>
                                <li><strong>Security:</strong> Payments are processed via secure third-party gateways. AVILA+ does not store your full payment card information.</li>
                            </ul>
                        </section>

                        <section id="section-4" className="mb-12 scroll-mt-32">
                            <h2 className="font-display font-medium text-3xl text-charcoal mb-6 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
                                <span className="font-mono text-xl md:text-2xl mr-3 text-charcoal/40 font-normal">4.</span>
                                Shipping & Delivery
                            </h2>
                            <ul className="space-y-4">
                                <li><strong>Origin:</strong> Products are engineered and shipped with Swiss precision.</li>
                                <li><strong>Risk of Loss:</strong> The risk of loss and title for items purchased pass to you upon our delivery to the carrier.</li>
                                <li><strong>Accuracy:</strong> You agree to provide current, complete, and accurate purchase and account information for all purchases.</li>
                            </ul>
                        </section>

                        <section id="section-5" className="mb-12 scroll-mt-32">
                            <h2 className="font-display font-medium text-3xl text-charcoal mb-6 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
                                <span className="font-mono text-xl md:text-2xl mr-3 text-charcoal/40 font-normal">5.</span>
                                Returns & Refunds
                            </h2>
                            <ul className="space-y-4">
                                <li><strong>Policy:</strong> Due to the consumable nature of our sparkling protein water, returns are generally not accepted for opened products.</li>
                                <li><strong>Damaged Goods:</strong> If your order arrives damaged, please contact <a href="mailto:info@avilaprotein.com" className="text-charcoal font-medium border-b border-charcoal/30 hover:border-charcoal transition-all pb-0.5">info@avilaprotein.com</a> within 48 hours of delivery with photographic evidence.</li>
                            </ul>
                        </section>

                        <section id="section-6" className="mb-12 scroll-mt-32">
                            <h2 className="font-display font-medium text-3xl text-charcoal mb-6 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
                                <span className="font-mono text-xl md:text-2xl mr-3 text-charcoal/40 font-normal">6.</span>
                                Intellectual Property
                            </h2>
                            <ul className="space-y-4">
                                <li><strong>Ownership:</strong> All content on this site, including text, graphics (such as "The Molecular Shift" or "Swiss Purity Renders"), and logos, is the property of AVILA+.</li>
                                <li><strong>Restrictions:</strong> You may not reproduce, duplicate, or sell any portion of our Service without express written permission.</li>
                            </ul>
                        </section>

                        <section id="section-7" className="mb-12 scroll-mt-32">
                            <h2 className="font-display font-medium text-3xl text-charcoal mb-6 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
                                <span className="font-mono text-xl md:text-2xl mr-3 text-charcoal/40 font-normal">7.</span>
                                Limitation of Liability
                            </h2>
                            <ul className="space-y-4">
                                <li><strong>Swiss Law:</strong> To the maximum extent permitted by Swiss law, AVILA+ shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our products or website.</li>
                            </ul>
                        </section>

                        <section id="section-8" className="mb-12 scroll-mt-32">
                            <h2 className="font-display font-medium text-3xl text-charcoal mb-6 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
                                <span className="font-mono text-xl md:text-2xl mr-3 text-charcoal/40 font-normal">8.</span>
                                Governing Law
                            </h2>
                            <ul className="space-y-4">
                                <li><strong>Jurisdiction:</strong> These Terms and any separate agreements shall be governed by and construed in accordance with the laws of Switzerland. Any disputes shall be resolved in the courts of our registered Swiss business location.</li>
                            </ul>
                        </section>

                        <section id="section-9" className="mb-12 scroll-mt-32">
                            <h2 className="font-display font-medium text-3xl text-charcoal mb-6 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
                                <span className="font-mono text-xl md:text-2xl mr-3 text-charcoal/40 font-normal">9.</span>
                                Changes to Terms
                            </h2>
                            <ul className="space-y-4">
                                <li><strong>Updates:</strong> We reserve the right to update these Terms at any time. Continued use of the website following any changes constitutes acceptance of those changes.</li>
                            </ul>
                        </section>

                        <section id="section-10" className="mb-12 scroll-mt-32">
                            <h2 className="font-display font-medium text-3xl text-charcoal mb-6 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
                                <span className="font-mono text-xl md:text-2xl mr-3 text-charcoal/40 font-normal">10.</span>
                                Contact Information
                            </h2>
                            <ul className="space-y-4">
                                <li>Questions about the Terms of Service should be sent to us at <a href="mailto:info@avilaprotein.com" className="text-charcoal font-medium border-b border-charcoal/30 hover:border-charcoal transition-all pb-0.5">info@avilaprotein.com</a>.</li>
                            </ul>
                        </section>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
