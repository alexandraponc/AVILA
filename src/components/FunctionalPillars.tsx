"use client";

import { Droplets, Leaf, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function FunctionalPillars() {
    const pillars = [
        {
            icon: <Droplets className="w-8 h-8 stroke-[1.5px]" />,
            title: "10g Protein",
            description:
                "100% Hydrolyzed Whey Isolate for maximum clarity.",
        },
        {
            icon: <Leaf className="w-8 h-8 stroke-[1.5px]" />,
            title: "0g Sugar",
            description:
                "Zero sugar, low-calorie (under 80 kcal).",
        },
        {
            icon: <Sparkles className="w-8 h-8 stroke-[1.5px]" />,
            title: "Swiss Quality",
            description:
                "Formulated for daily wellness and effortless sophistication.",
        },
    ];

    return (
        <section className="bg-off-white text-charcoal py-32 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-20 fade-in">
                    <p className="uppercase tracking-[0.2em] text-xs font-bold text-charcoal/50 mb-4 inline-flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-charcoal/30 block"></span>
                        We explain, not preach
                        <span className="w-8 h-[1px] bg-charcoal/30 block"></span>
                    </p>
                    <h2 className="font-display text-4xl font-bold tracking-tight">
                        Science Made Simple
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group flex flex-col items-center text-center p-8 bg-white/50 rounded-2xl border border-charcoal/5 hover:border-charcoal/10 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl"
                        >
                            <div className="mb-8 p-4 bg-off-white rounded-full text-charcoal/80 group-hover:text-charcoal group-hover:scale-110 transition-all duration-500">
                                {pillar.icon}
                            </div>
                            <h3 className="font-display text-xl font-bold mb-4 tracking-tight">
                                {pillar.title}
                            </h3>
                            <p className="text-charcoal/70 leading-relaxed text-balance">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
