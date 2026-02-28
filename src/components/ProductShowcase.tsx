"use client";

import { motion } from "framer-motion";

export function ProductShowcase() {
    const products = [
        {
            name: "Yuzu Lemon",
            image: "/AVILA - Lemon.png",
            color: "bg-yuzu",
            textColor: "text-yuzu",
            hoverBg: "hover:bg-yuzu/5",
            shadow: "hover:shadow-[0_0_40px_-10px_rgba(255,215,0,0.3)]",
        },
        {
            name: "Blueberry",
            image: "/AVILA - Blueberry.png",
            color: "bg-blueberry",
            textColor: "text-blueberry",
            hoverBg: "hover:bg-blueberry/5",
            shadow: "hover:shadow-[0_0_40px_-10px_rgba(137,114,196,0.3)]",
        },
        {
            name: "Grapefruit",
            image: "/AVILA - Grapefruit.png",
            color: "bg-grapefruit",
            textColor: "text-grapefruit",
            hoverBg: "hover:bg-grapefruit/5",
            shadow: "hover:shadow-[0_0_40px_-10px_rgba(255,127,80,0.3)]",
        },
    ];

    return (
        <section id="flavors" className="bg-white py-32 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-24">
                    <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-charcoal mb-6">
                        The Clarity Collection
                    </h2>
                    <p className="text-charcoal/60 text-lg max-w-xl mx-auto">
                        Three distinct profiles. Zero compromises.
                    </p>
                </div>

                <div className="flex flex-col gap-24 lg:gap-32 w-full max-w-[1200px] mx-auto mt-16">
                    {products.map((product, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`group relative grid md:grid-cols-2 gap-12 lg:gap-24 items-center`}
                            >
                                {/* Image Container */}
                                <div className={`relative w-full aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center rounded-3xl overflow-hidden ${isEven ? 'md:order-1' : 'md:order-2'} ${product.hoverBg} transition-colors duration-700 bg-charcoal/[0.02]`}>
                                    <div className={`absolute inset-0 ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
                                    <img
                                        src={product.image}
                                        alt={`AVILA ${product.name}`}
                                        className="w-2/3 h-2/3 object-contain relative z-10 group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-2xl"
                                    />
                                </div>

                                {/* Text Container */}
                                <div className={`flex flex-col justify-center ${isEven ? 'md:order-2 md:pl-8 lg:pl-16' : 'md:order-1 md:pr-8 lg:pr-16'}`}>
                                    <h3 className="font-display text-4xl lg:text-5xl font-bold text-charcoal mb-6">
                                        {product.name}
                                    </h3>

                                    <p className="text-lg text-charcoal/70 mb-10 max-w-md leading-relaxed">
                                        Experience the perfectly balanced, refreshing taste of our {product.name} clear protein soda. Formulated with 10g of highly purified whey isolate and absolutely zero sugar.
                                    </p>

                                    <div className="space-y-4 mb-10">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-2 h-2 rounded-full ${product.color}`} />
                                            <p className="text-sm font-semibold text-charcoal/80 uppercase tracking-widest">10g Protein Isolate</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className={`w-2 h-2 rounded-full ${product.color}`} />
                                            <p className="text-sm font-semibold text-charcoal/80 uppercase tracking-widest">0g Sugar</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className={`w-2 h-2 rounded-full ${product.color}`} />
                                            <p className="text-sm font-semibold text-charcoal/80 uppercase tracking-widest">Clear Sparkling</p>
                                        </div>
                                    </div>

                                    <button className={`self-start text-sm font-bold tracking-widest uppercase border-b-2 border-transparent pb-1 ${product.textColor} hover:border-current transition-colors`}>
                                        Shop {product.name}
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
