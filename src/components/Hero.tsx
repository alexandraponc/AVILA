"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section className="bg-off-white pt-32 pb-16 px-4 md:px-8">
            <div className="relative w-full max-w-[1400px] mx-auto min-h-[75vh] grid md:grid-cols-2 overflow-hidden rounded-[2.5rem] bg-white shadow-xl">

                {/* Left Side: Video */}
                <div className="relative w-full h-[50vh] md:h-full">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/hero-video-moving.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Right Side: Content */}
                <div className="relative z-10 flex flex-col items-start justify-center p-8 md:p-16 lg:p-24 bg-white/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none col-span-1">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="uppercase tracking-[0.25em] text-xs md:text-sm font-bold text-charcoal/80 mb-6"
                    >
                        Protein reimagined
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-charcoal leading-[1.05] mb-8 text-left"
                    >
                        AVILA brings <br className="hidden lg:block" /> clear protein <br className="hidden lg:block" /> into your life
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg md:text-xl text-charcoal/80 max-w-xl mb-10 leading-relaxed font-sans text-left"
                    >
                        A Swiss-born protein soda that refreshes your senses and fuels your body, combining everyday pleasure with proven performance.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <Link
                            href="/shop"
                            className="inline-block bg-charcoal text-white px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-charcoal/90 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                        >
                            <span className="relative z-10">Experience the Clarity</span>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <div className="w-[1px] h-12 relative overflow-hidden bg-off-white/20">
                    <motion.div
                        animate={{
                            y: ["0%", "100%"],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute top-0 left-0 w-full h-[50%] bg-off-white/60"
                    />
                </div>
            </motion.div>
        </section>
    );
}
