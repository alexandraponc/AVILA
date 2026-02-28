"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-300 bg-off-white shadow-sm border-b border-charcoal/5`}
        >
            {/* Logo area */}
            <Link href="/" className="relative z-10 flex items-center">
                <Image
                    src="/logo.png"
                    alt="AVILA+"
                    width={360}
                    height={144}
                    className="object-contain h-20 w-auto md:h-28"
                    priority
                />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
                <Link href="/our-story" className="text-sm font-medium hover:text-yuzu transition-colors tracking-wide uppercase text-charcoal/80">
                    Our Story
                </Link>
                <Link href="/science" className="text-sm font-medium hover:text-blueberry transition-colors tracking-wide uppercase text-charcoal/80">
                    The Science
                </Link>
                <Link href="/flavors" className="text-sm font-medium hover:text-grapefruit transition-colors tracking-wide uppercase text-charcoal/80">
                    Flavors
                </Link>
                <Link href="/shop" className="bg-charcoal text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide uppercase hover:bg-charcoal/90 transition-colors">
                    Shop Now
                </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden flex flex-col space-y-1.5 p-2">
                <span className="w-6 h-[2px] bg-charcoal rounded-full" />
                <span className="w-4 h-[2px] bg-charcoal rounded-full" />
            </button>
        </motion.nav>
    );
}
