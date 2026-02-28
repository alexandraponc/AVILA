"use client";

import { motion } from "framer-motion";

const pillars = [
    {
        title: "10g Protein",
        description: "100% Hydrolyzed Whey Isolate for maximum clarity and rapid absorption.",
    },
    {
        title: "0g Sugar",
        description: "Zero sugar, naturally sweetened, and refreshingly low-calorie (under 80 kcal).",
    },
    {
        title: "Swiss Quality",
        description: "Formulated for daily wellness and effortless sophistication.",
    },
];

export function Pillars() {
    return (
        <section className="py-24 md:py-32 bg-background relative z-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-xl mb-16 md:mb-24">
                    <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-charcoal mb-6">
                        The Clean Label
                    </h2>
                    <p className="text-lg text-charcoal/70 leading-relaxed font-sans">
                        No compromises. Just crystal-clear refreshment paired with functional benefits that elevate your daily routine.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="flex flex-col space-y-4"
                        >
                            <div className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center mb-2">
                                <span className="text-charcoal/40 text-sm font-medium">0{index + 1}</span>
                            </div>
                            <h3 className="font-display text-2xl font-semibold text-charcoal">
                                {pillar.title}
                            </h3>
                            <p className="text-charcoal/70 leading-relaxed font-sans text-base">
                                {pillar.description}
                            </p>
                            <div className="w-8 h-[1px] bg-charcoal/20 mt-4" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
