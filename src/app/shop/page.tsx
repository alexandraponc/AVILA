"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import Image from "next/image";

export default function ShopComingSoon() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);
        setError("");

        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setSubmitted(true);
                setEmail("");
            } else {
                const data = await response.json();
                setError(data.error || "Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("Network error. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-background min-h-screen selection:bg-charcoal selection:text-off-white flex flex-col">
            <Navbar />

            <main className="flex-1 bg-off-white pt-32 pb-16 px-4 md:px-8 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="relative w-full max-w-[1400px] mx-auto min-h-[75vh] grid md:grid-cols-2 overflow-hidden rounded-[2.5rem] bg-white shadow-xl">

                    {/* Left Side: Image */}
                    <div className="relative w-full h-[40vh] md:h-full">
                        <Image
                            src="/shop-bg.jpg"
                            alt="AVILA Cans on Shelf"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Right Side: Form Content in a transparent box */}
                    <div className="relative z-10 flex flex-col items-center justify-center p-8 md:p-12 lg:p-20 bg-white/50 backdrop-blur-md col-span-1 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-8"
                        >
                            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-charcoal mb-4">
                                Coming Soon
                            </h1>
                            <p className="text-lg md:text-xl text-charcoal/70 font-sans font-light">
                                We are perfecting the formula. <br className="hidden md:block" />
                                Be the first to experience AVILA+.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full max-w-md bg-white/60 backdrop-blur-lg p-8 rounded-[2rem] border border-charcoal/5 shadow-2xl shadow-charcoal/5"
                        >
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-8"
                                >
                                    <div className="w-16 h-16 bg-off-white rounded-full flex items-center justify-center mx-auto mb-6 border border-charcoal/10">
                                        <svg className="w-6 h-6 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-charcoal mb-2">You're on the list.</h3>
                                    <p className="text-charcoal/60">We'll notify you as soon as we launch.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                                    <div>
                                        <label htmlFor="email" className="sr-only">Email address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            disabled={isLoading}
                                            placeholder="Enter your email"
                                            className="w-full px-6 py-4 bg-background border border-charcoal/10 rounded-xl text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-charcoal/20 transition-all font-sans disabled:opacity-50"
                                        />
                                    </div>

                                    {error && (
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="text-red-500 text-sm font-sans"
                                        >
                                            {error}
                                        </motion.p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-charcoal text-white px-8 py-4 rounded-xl font-semibold tracking-widest uppercase text-sm flex justify-center items-center hover:bg-charcoal/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? (
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        ) : "Get Notified"}
                                    </button>
                                </form>
                            )}

                            <div className="mt-8 pt-6 border-t border-charcoal/5">
                                <p className="text-sm font-medium text-charcoal/60 uppercase tracking-widest mb-3">
                                    Follow our journey
                                </p>
                                <a
                                    href="https://instagram.com/drinkavilaprotein"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-charcoal hover:text-charcoal/70 transition-colors group font-semibold"
                                >
                                    <svg className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                    @drinkavilaprotein
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
