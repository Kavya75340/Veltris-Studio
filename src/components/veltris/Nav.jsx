import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Responsive Icons

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        "Studio",
        "Divisions",
        "Services",
        "Work",
        "Process",
        "Contact",
    ];

    // Mobile Overlay Menu Animations
    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
                staggerChildren: 0.07,
                delayChildren: 0.1,
            },
        },
    };

    const linkVariants = {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0 },
    };

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-3 left-0 right-0 z-50 w-full px-4 sm:px-8 md:px-12 lg:px-20"
        >
            {/* Main Nav Capsule */}
            <div className="glass rounded-full px-4 sm:px-5 py-1 sm:py-1 flex items-center justify-between relative z-50 border border-white/[0.08] backdrop-blur-md">
                {/* BRAND LOGO AREA */}
                <motion.a
                    href="#"
                    className="flex items-center gap-3 sm:gap-4 group relative select-none w-full sm:w-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                    {/* Logo Image Block - Cleaned overflow to fix cut-off shadows */}
                    <div className="flex flex-col justify-center flex-shrink-0 overflow-visible p-2">
                        {/* Desktop Logo (/icon.png) - Premium Glow Effect */}
                        <motion.img
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1],
                                delay: 0.1,
                            }}
                            whileHover={{
                                scale: 1.05,
                                rotate: 3,
                                // Full wrap smooth balanced glow around the entire asset
                                filter: "drop-shadow(0 0 20px rgba(34, 211, 238, 0.45)) drop-shadow(0 0 40px rgba(34, 211, 238, 0.15))",
                            }}
                            src="/icon.png"
                            alt="Veltris Desktop Icon"
                            className="hidden md:block h-20 w-auto object-contain transition-all duration-300 dynamic-glow"
                        />

                        {/* Mobile Logo (/logo2.png) - Compact Entry Effect */}
                        <motion.img
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                            src="/logo2.png"
                            alt="Veltris Mobile Icon"
                            className="block md:hidden h-12 w-auto object-contain"
                        />
                    </div>

                    {/* Premium Typography Block */}
                    <div className="hidden md:flex flex-col justify-center leading-none group min-w-0 select-none">
                        {/* Main Brand Name with Staggered Letter Animation */}
                        <div className="flex items-center">
                            <h1
                                className="
                    text-[22px] sm:text-2xl 
                    font-black
                    uppercase
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-r
                    from-white
                    via-slate-100
                    to-slate-300
                    drop-shadow-[0_0_18px_rgba(255,255,255,0.08)]
                    transition-all
                    duration-500
                    group-hover:from-white
                    group-hover:via-cyan-100
                    group-hover:to-cyan-400
                    flex overflow-hidden py-1
                "
                                style={{
                                    letterSpacing: "0.58em",
                                    marginRight: "-0.58em",
                                }}
                            >
                                {"VELTRIS".split("").map((letter, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ y: "100%", opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.8,
                                            ease: [0.16, 1, 0.3, 1],
                                            delay: index * 0.06,
                                        }}
                                        className="inline-block"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </h1>
                        </div>

                        {/* Studios Line with Scale & Fade Expansion */}
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0.6 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{
                                duration: 1,
                                ease: [0.16, 1, 0.3, 1],
                                delay: 0.5,
                            }}
                            className="flex items-center gap-1.5 mx-3 origin-center"
                        >
                            {/* Animated Glow Dot (Left) */}
                            <motion.div
                                animate={{
                                    opacity: [0.5, 1, 0.5],
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: "easeInOut",
                                }}
                                className="w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE] flex-shrink-0"
                            />

                            {/* Left Line */}
                            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-cyan-400/50" />

                            {/* STUDIOS Text */}
                            <span
                                className="
                    text-[8px]
                    font-bold
                    uppercase
                    text-cyan-400
                    transition-all
                    duration-300
                    group-hover:text-cyan-300
                    flex-shrink-0
                "
                                style={{
                                    letterSpacing: "0.55em",
                                    marginRight: "-0.55em",
                                }}
                            >
                                STUDIOS
                            </span>

                            {/* Right Line */}
                            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-cyan-400/50" />

                            {/* Animated Glow Dot (Right) */}
                            <motion.div
                                animate={{
                                    opacity: [0.5, 1, 0.5],
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: "easeInOut",
                                    delay: 1,
                                }}
                                className="w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE] flex-shrink-0"
                            />
                        </motion.div>

                        {/* Tagline - Smooth Fade Slide */}
                        <motion.span
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="
                hidden sm:block
                mt-1.5
                font-extrabold
                text-[7px]
                uppercase
                tracking-[0.24em]
                text-slate-500
                group-hover:text-slate-400
                transition-all
                duration-300
            "
                        >
                            AI-POWERED EDITING & CREATIVE ENGINEERING
                        </motion.span>
                    </div>
                </motion.a>

                {/* DESKTOP LINKS (Hidden on Mobile/Tablet) */}
                <nav className="hidden lg:flex items-center gap-1 text-sm">
                    {items.map((i) => (
                        <a
                            key={i}
                            href={`#${i.toLowerCase()}`}
                            className="px-3 py-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                        >
                            {i}
                        </a>
                    ))}
                </nav>

                {/* CALL TO ACTION BUTTON (Adaptive sizes) */}
                <div className="hidden sm:flex items-center gap-4">
                    <a
                        href="#contact"
                        className="group relative inline-flex items-center gap-2 rounded-full bg-white text-black text-xs sm:text-sm font-medium pl-4 pr-1.5 py-1.5 hover:bg-white/90 transition duration-300"
                    >
                        Book a call
                        <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-0.5">
                            →
                        </span>
                    </a>
                </div>

                {/* MOBILE & TABLET HAMBURGER BUTTON (Visible below 1024px) */}
                <div className="flex lg:hidden items-center gap-2">
                    {/* Compact CTA for phones when menu is closed */}
                    {!isOpen && (
                        <a
                            href="#contact"
                            className="sm:hidden text-xs bg-white text-black font-semibold px-3 py-1.5 rounded-full"
                        >
                            Call
                        </a>
                    )}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 active:scale-95 transition-all z-50"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>

            {/* FULLSCREEN MOBILE DRAWER OVERLAY */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-x-0 top-0 min-h-screen bg-[#030712]/98 backdrop-blur-xl pt-28 pb-10 px-6 flex flex-col justify-between z-40 border-b border-white/5 lg:hidden"
                    >
                        {/* Mobile Navigation Links */}
                        <div className="flex flex-col gap-2 mt-2">
                            <span className="font-mono text-[10px] tracking-[0.25em] text-slate-600 uppercase">
                                Navigation Menu
                            </span>
                            <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent mb-2" />
                            {items.map((i) => (
                                <motion.a
                                    variants={linkVariants}
                                    key={i}
                                    href={`#${i.toLowerCase()}`}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl font-bold tracking-tight text-slate-300 hover:text-white transition-colors py-1 flex items-center justify-between group"
                                >
                                    <span>{i}</span>
                                    <span className="text-xl opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#06B6D4]">
                                        →
                                    </span>
                                </motion.a>
                            ))}
                        </div>

                        {/* Mobile Menu Footer Details */}
                        <div className="flex flex-col gap-4 mt-auto">
                            <motion.a
                                variants={linkVariants}
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-center font-semibold text-sm text-white shadow-lg shadow-indigo-500/20"
                            >
                                Book a Premium Call
                            </motion.a>
                            <div className="flex justify-between items-center text-[10px] font-mono text-slate-600 px-1">
                                <span>©2026 VELTRIS STUDIO</span>
                                <span>SYSTEM ACTIVE</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
