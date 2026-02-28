"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Ritual() {
    return (
        <section className="py-24 md:py-32 bg-background relative z-10 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/3Pm pick me up woman.PNG"
                            alt="Woman enjoying AVILA for a 3PM pick-me-up"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Text Column */}
                    <div className="flex flex-col justify-center max-w-lg">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal mb-8 leading-[1.1]"
                        >
                            Your 3PM pick-me-up, elevated.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-charcoal/70 leading-relaxed font-sans mb-10"
                        >
                            We set out to create more than just a protein drink. AVILA is a ritual for busy professionals and wellness-seekers alike. Ditch the heavy shakes for a crisp, soda-like experience that actually serves your body.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Link href="/science" className="text-charcoal font-semibold tracking-wide uppercase border-b-2 border-charcoal pb-1 hover:text-charcoal/70 hover:border-charcoal/70 transition-colors">
                                Discover the Science
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
