"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ClarityFactor() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0.2, 0.4], [100, 0]);

    return (
        <section
            ref={containerRef}
            id="the-science"
            className="bg-charcoal text-off-white py-32 md:py-48 relative overflow-hidden flex items-center justify-center min-h-[80vh]"
        >
            <div className="absolute inset-0 z-0">
                <svg
                    className="absolute w-full h-full opacity-[0.03]"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <filter id="noiseFilter">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.65"
                            numOctaves="3"
                            stitchTiles="stitch"
                        />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
            </div>

            <motion.div
                style={{ opacity, y }}
                className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-16 items-center"
            >
                <div className="order-2 md:order-1 flex justify-center">
                    <div className="relative w-full aspect-square max-w-md bg-gradient-to-tr from-charcoal via-charcoal to-[#3a3a3a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
                        {/* Split Screen Simulation for the fluid transition */}
                        <motion.div className="w-48 h-48 bg-white/5 rounded-full blur-2xl absolute"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div className="w-32 h-32 bg-yuzu/10 rounded-full blur-xl absolute -top-10 -right-10"
                            animate={{
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        />
                        <span className="text-white/20 font-display text-sm uppercase tracking-[0.3em] z-10">Visualizing Clarity</span>
                    </div>
                </div>

                <div className="order-1 md:order-2 flex flex-col items-start max-w-xl">
                    <p className="uppercase tracking-[0.2em] text-xs font-bold text-white/50 mb-4 flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-white/30 block"></span> The Science
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
                        Refreshment you can feel. <br /><span className="text-white/40">Function you can trust.</span>
                    </h2>
                    <p className="text-lg text-white/70 leading-relaxed mb-6">
                        Say goodbye to milky heaviness and gym clichés. No chalky shakes, no extreme routines.
                    </p>
                    <p className="text-lg text-white/70 leading-relaxed">
                        Just a clean, sparkling experience that turns daily wellness into something beautiful.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
