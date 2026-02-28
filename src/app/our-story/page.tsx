"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function OurStory() {
    return (
        <div className="bg-background min-h-screen selection:bg-charcoal selection:text-off-white">
            <Navbar />

            <main className="pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 relative overflow-hidden">
                {/* Subtle background decoration */}
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-charcoal/[0.03] to-transparent pointer-events-none" />

                <article className="max-w-3xl mx-auto relative z-10">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mb-20 md:mb-32 text-center"
                    >
                        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-charcoal mb-8">
                            Our Story
                        </h1>
                        <div className="w-16 h-[2px] bg-charcoal/20 mx-auto" />
                    </motion.div>

                    <div className="space-y-16 md:space-y-24 text-lg md:text-xl text-charcoal/80 leading-relaxed font-sans">

                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">We were tired of the compromise.</h2>
                            <p>
                                For years, adding protein to our day meant settling. It meant enduring chalky shakes, milky heaviness, and artificial aftertastes that felt more like a chore than a choice. We were frustrated by an industry that told us functional nutrition had to taste like a gym cliché. We believed that wellness shouldn’t feel clinical.
                            </p>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">Designed by us, for us.</h2>
                            <p>
                                Like you, we have demanding jobs, growing families, and schedules that don't always leave room for extreme wellness routines. We wanted a product that fit seamlessly into real life—a daily ritual that offered joyful balance without sacrifice or rigidity. We wanted a refreshing 3 PM pick-me-up that we actually looked forward to drinking. Because we couldn't find it, we decided to create it.
                            </p>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">An obsession with quality.</h2>
                            <p>
                                We didn’t just want to make another functional beverage; we wanted to perfect it. We are relentless in our belief that a product can taste incredible and be incredibly good for you. Rooted in Switzerland’s tradition of precision and purity, we obsessed over every detail of our formula. We stripped away the noise, the heavy syrups, and the buzzwords to focus on transparency and performance.
                            </p>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">Ready for the world.</h2>
                            <p className="mb-8">
                                The result is AVILA+: a uniquely crisp, sparkling experience delivering 10g of fast-absorbing hydrolyzed whey isolate with zero sugar. It offers the refreshment of a premium soda, backed by the intelligence of a supplement.
                            </p>
                            <p className="mb-8">
                                We made this for our own busy lives, and now, we are finally ready to share it with yours.
                            </p>
                            <div className="bg-charcoal/[0.03] p-8 md:p-12 rounded-3xl border border-charcoal/5 mt-12">
                                <p className="text-xl md:text-2xl font-medium text-charcoal italic leading-relaxed mb-8">
                                    "Taking care of yourself should feel as effortless as opening a delicious can of freshness."
                                </p>
                                <p className="font-display font-bold text-charcoal tracking-widest uppercase text-sm">
                                    — The AVILA+ Team
                                </p>
                            </div>
                        </motion.section>

                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
