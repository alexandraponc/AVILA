"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const flavors = [
    {
        id: "lemon",
        name: "Yuzu Lemonade",
        image: "/AVILA - Lemon.png",
        color: "bg-[#ffd700]", // Yuzu
        description: "Bright, citrusy, and unequivocally refreshing.",
    },
    {
        id: "blueberry",
        name: "Blueberry Lemonade",
        image: "/AVILA - Blueberry.png",
        color: "bg-[#8972c4]", // Blueberry
        description: "A burst of wild blueberry balanced with zesty lemonade.",
    },
    {
        id: "grapefruit",
        name: "Grapefruit",
        image: "/AVILA - Grapefruit.png",
        color: "bg-[#ff7f50]", // Grapefruit
        description: "Fresh, tart, and perfectly carbonated for the afternoon slump.",
    },
];

export function Flavors() {
    return (
        <section id="flavors" className="py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-charcoal mb-6">
                        Find your clarity.
                    </h2>
                    <p className="text-lg text-charcoal/70 leading-relaxed font-sans">
                        Three distinct flavors. Zero sugar. 10g of protein.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
                    {flavors.map((flavor, index) => (
                        <motion.div
                            key={flavor.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center group"
                        >
                            {/* Individual Can Space */}
                            <div className={`relative w-full aspect-[3/4] rounded-[2rem] mb-8 flex items-center justify-center p-8 bg-charcoal/[0.02] border border-charcoal/5 overflow-hidden transition-all duration-500 hover:shadow-2xl`}>
                                {/* Subtle background glow on hover */}
                                <div className={`absolute inset-0 ${flavor.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                <div className="relative w-full h-full transform group-hover:-translate-y-4 transition-transform duration-700 ease-out">
                                    <Image
                                        src={flavor.image}
                                        alt={flavor.name}
                                        fill
                                        className="object-contain drop-shadow-2xl"
                                    />
                                </div>
                            </div>

                            {/* Flavor Details & Shop Button */}
                            <div className="text-center flex flex-col items-center flex-1 w-full">
                                <div className="flex items-center justify-center gap-3 mb-4">
                                    <span className={`w-2.5 h-2.5 rounded-full ${flavor.color}`} />
                                    <h3 className="font-display text-xl font-bold text-charcoal uppercase tracking-widest">
                                        {flavor.name}
                                    </h3>
                                </div>
                                <p className="text-charcoal/60 text-base mb-10 min-h-[48px] px-4">
                                    {flavor.description}
                                </p>

                                <Link
                                    href="/shop"
                                    className="mt-auto inline-flex items-center justify-center px-8 py-3.5 bg-off-white border border-charcoal/10 text-charcoal font-semibold text-sm tracking-widest uppercase rounded-full hover:bg-charcoal hover:text-white transition-all duration-300 transform group-hover:scale-105 active:scale-95"
                                >
                                    Shop {flavor.name}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
