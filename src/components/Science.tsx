"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function Science() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Section 1 & 2: Parallax and Blur for Molecular Shift
    const shiftY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const blurAmount = useTransform(scrollYProgress, [0.1, 0.4], ["blur(12px)", "blur(0px)"]);

    // Hover State for Section 2 Brightness
    const [isHoveringIsolate, setIsHoveringIsolate] = useState(false);

    // Section 5 Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="science" ref={containerRef} className="bg-[#F9F8F5] relative overflow-hidden text-charcoal font-sans">

            {/* Section 1 & 2: The Transition & Molecular Shift */}
            <div className="relative min-h-[90vh] flex flex-col md:flex-row items-center py-24">

                {/* Content Left */}
                <div className="w-full md:w-1/2 px-6 md:px-12 lg:px-24 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
                            The Science of <br /> <span className="text-charcoal/50">Clarity.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-charcoal/80 max-w-lg mb-12">
                            <p>
                                We stripped away the milky heaviness and artificial fillers to engineer a fundamentally different protein experience.
                            </p>
                            <p>
                                Fast-absorbing, ultra-purified, and radically bioavailable.
                            </p>
                        </div>

                        {/* Hover trigger for Section 2 */}
                        <div
                            className="inline-block border-l-2 border-charcoal pl-6 py-2 cursor-default group"
                            onMouseEnter={() => setIsHoveringIsolate(true)}
                            onMouseLeave={() => setIsHoveringIsolate(false)}
                        >
                            <p className="font-display text-3xl font-bold transition-colors group-hover:text-charcoal/70">
                                10g Hydrolyzed Isolate
                            </p>
                            <p className="text-sm font-mono text-charcoal/60 uppercase tracking-widest mt-2">
                                Absolute Bioavailability
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Image Right (Parallax + Mask + Blur + Brightness) */}
                <div className="absolute top-0 right-0 w-full md:w-[60%] h-full pointer-events-none">
                    {/* Linear Gradient Mask to fade seamlessly into #F9F8F5 */}
                    <div
                        className="absolute inset-0 z-10"
                        style={{
                            background: "linear-gradient(to right, #F9F8F5 0%, transparent 40%, transparent 100%, #F9F8F5 100%), linear-gradient(to bottom, #F9F8F5 0%, transparent 20%, transparent 80%, #F9F8F5 100%)"
                        }}
                    />

                    <motion.div
                        style={{
                            y: shiftY,
                            filter: blurAmount,
                            opacity: 0.9,
                        }}
                        className={`absolute inset-0 transition-all duration-700 ease-out ${isHoveringIsolate ? 'brightness-125 saturate-150' : 'brightness-100 saturate-100'}`}
                    >
                        <Image
                            src="/Image_1_The_Molecular_Shift.png"
                            alt="The Molecular Shift"
                            fill
                            className="object-cover object-right"
                            priority
                        />
                    </motion.div>
                </div>
            </div>

            {/* Section 3: The Transparency Matrix (Zero Sugar) */}
            <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="relative w-full h-[600px] rounded-[24px] overflow-hidden border border-charcoal/5 shadow-2xl flex items-center justify-center group">

                    {/* Ken Burns scrolling background */}
                    <motion.div
                        className="absolute inset-0 w-full h-[120%]"
                        animate={{ y: ["0%", "-16%"] }}
                        transition={{ repeat: Infinity, repeatType: "mirror", duration: 25, ease: "linear" }}
                    >
                        <Image
                            src="/Image_2_The_Macro_Effervescence.jpg"
                            alt="Macro Effervescence"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Glassmorphism Copy Block */}
                    <div className="relative z-10 backdrop-blur-[8px] bg-white/20 p-10 md:p-16 rounded-3xl border border-white/30 text-center max-w-xl mx-6">
                        <h3 className="font-display text-4xl font-bold mb-4 text-charcoal drop-shadow-sm">
                            Zero Sugar / Clean Label
                        </h3>
                        <p className="text-lg text-charcoal/80 mb-8 font-medium drop-shadow-sm line-clamp-3">
                            No artificial sweeteners. No stevia aftertaste. Just pure, effervescent refreshment naturally flavored with real extracts.
                        </p>
                        <div className="flex justify-center gap-12 font-mono text-sm font-semibold tracking-widest text-charcoal drop-shadow-sm">
                            <div className="flex flex-col items-center">
                                <span className="text-3xl font-display mb-1">0g</span> SUGAR
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-3xl font-display mb-1">45</span> CALORIES
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 4: The Origin (Swiss Precision) */}
            <div className="relative w-full aspect-[21/9] min-h-[500px] flex items-center">

                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Image_3_The_Swiss_Purity_Renders.jpg"
                        alt="Swiss Precision Origin"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Gradient Overlay for Text Readability */}
                <div
                    className="absolute inset-0 z-10"
                    style={{ background: "linear-gradient(to right, rgba(249, 248, 245, 1) 30%, rgba(249, 248, 245, 0) 100%)" }}
                />

                {/* Content */}
                <div className="relative z-20 px-6 md:px-12 lg:px-24 max-w-3xl">
                    <h3 className="font-display text-4xl md:text-6xl font-bold mb-6 text-charcoal">
                        Engineered in Switzerland.
                    </h3>
                    <p className="text-xl text-charcoal/80 mb-10 max-w-xl font-light">
                        A commitment to supreme purity. Distilled from the finest alpine ingredients and formulated in world-class facilities for uncompromising quality.
                    </p>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center justify-center px-8 py-4 bg-charcoal text-white font-semibold text-sm tracking-widest uppercase rounded-full hover:bg-charcoal/90 transition-all duration-300"
                    >
                        View Lab Transparency Report
                    </button>
                </div>
            </div>

            {/* Section 5: The Lab Transparency Report (Modal) */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12">

                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-charcoal/30 backdrop-saturate-[180%] backdrop-blur-[20px]"
                        onClick={() => setIsModalOpen(false)}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="relative w-full max-w-4xl bg-[#F9F8F5] rounded-3xl overflow-hidden shadow-2xl border border-charcoal/10"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-6 right-6 z-30 p-2 text-charcoal/60 hover:text-charcoal bg-white/50 rounded-full backdrop-blur-md transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Watermark Background */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none scale-150 transform translate-x-1/4 translate-y-1/4">
                            <Image
                                src="/Image_3_The_Swiss_Purity_Renders.jpg"
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Table Content */}
                        <div className="relative z-20 p-8 md:p-16">
                            <h3 className="font-display text-3xl font-bold mb-2">Transparency Report</h3>
                            <p className="text-charcoal/60 font-mono text-sm uppercase tracking-widest border-b border-charcoal/10 pb-8 mb-8">
                                Batch: SUI-04-2025 // Status: Verified Pure
                            </p>

                            <div className="space-y-4 font-mono text-sm">
                                {[
                                    { label: "Protein Source", value: "100% Whey Isolate (Hydrolyzed)" },
                                    { label: "Purity Level", value: "99.8% Micro-filtered" },
                                    { label: "Lactose Content", value: "< 0.01g (Clinically Zero)" },
                                    { label: "Sugar / Aspartame", value: "0.0g / 0.0g" },
                                    { label: "BCAAs per Serving", value: "4.5g Natural Occurrence" },
                                ].map((row, i) => (
                                    <div key={i} className="flex justify-between items-center py-3 border-b border-charcoal/5 last:border-0 hover:bg-charcoal/5 px-4 rounded-lg transition-colors">
                                        <span className="text-charcoal/70 font-sans font-medium">{row.label}</span>
                                        <span className="text-charcoal font-bold tracking-wider">{row.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}

        </section>
    );
}
