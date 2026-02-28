"use client";

import { motion } from "framer-motion";

import Image from "next/image";

export function TrustProof() {
    return (
        <section id="the-ritual" className="bg-off-white py-32 border-t border-charcoal/5 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-start"
                    >
                        <div className="w-16 h-16 border border-charcoal/20 flex items-center justify-center mb-8 rotate-45">
                            <span className="block w-2h h-2h bg-charcoal -rotate-45 text-[10px] font-bold">+</span>
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-charcoal mb-6 leading-tight">
                            Your 3PM pick-me-up, elevated.
                        </h2>
                        <p className="text-lg text-charcoal/70 mb-8 leading-relaxed font-sans max-w-lg">
                            AVILA is your daily wellness ritual redesigned for the busy professional and wellness-seeker. It's not just a post-workout drink; it's a refreshing, soda-like experience that effortlessly fits into your day.
                        </p>
                        <button className="text-sm font-semibold tracking-widest uppercase border-b border-charcoal pb-1 hover:text-charcoal/70 hover:border-charcoal/70 transition-colors">
                            The Daily Ritual
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl group"
                    >
                        <Image
                            src="/hero-cans.jpg"
                            alt="Refreshing AVILA Soda"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                        />
                        <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-1000" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
