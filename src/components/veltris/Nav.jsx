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
            <div className="glass rounded-full px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between relative z-50 border border-white/[0.08] backdrop-blur-md">
                {/* BRAND LOGO AREA */}
                <motion.a
                    href="#"
                    className="flex items-center gap-3 sm:gap-4 group relative"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                    {/* Dynamic Interactive Icon Engine */}
                    <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#4F46E5] via-[#3B82F6] to-[#06B6D4] rounded-2xl opacity-25 blur-md group-hover:opacity-60 group-hover:scale-125 transition-all duration-500 ease-out" />
                        <div className="absolute inset-0 rounded-2xl border border-white/[0.05] group-hover:border-[#06B6D4]/40 group-hover:rotate-45 transition-all duration-500 ease-out" />
                        <div className="relative w-8.5 h-8.5 sm:w-9.5 sm:h-9.5 rounded-[14px] bg-[#0D1321] border border-white/[0.08] group-hover:border-white/[0.15] flex items-center justify-center shadow-2xl transition-all duration-300 shadow-black/80">
                            <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 flex items-center justify-center">
                                <span className="absolute left-0 top-0 w-1 sm:w-1.5 h-3 sm:h-3.5 bg-gradient-to-b from-[#4F46E5] to-[#3B82F6] rounded-full transform -rotate-[28deg] origin-bottom-left transition-transform duration-300 group-hover:scale-y-110" />
                                <span className="absolute right-0 top-0 w-1 sm:w-1.5 h-3 sm:h-3.5 bg-gradient-to-b from-[#06B6D4] to-[#3B82F6] rounded-full transform rotate-[28deg] origin-bottom-right transition-transform duration-300 group-hover:scale-y-110" />
                                <span className="absolute bottom-[1px] w-1 h-1 bg-white rounded-full animate-pulse opacity-80" />
                            </div>
                        </div>
                    </div>

                    {/* Luxury Brand Typography Block */}
                    <div className="flex flex-col justify-center">
                        <div className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center leading-none">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#E2E8F0] group-hover:to-[#06B6D4] transition-all duration-500">
                                Veltris
                            </span>
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: "easeInOut",
                                }}
                                className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] ml-1 shadow-[0_0_10px_#06B6D4]"
                            />
                        </div>
                        <span className="text-[8.5px] sm:text-[9.5px] font-extrabold tracking-[0.32em] text-[#475569] uppercase mt-1 transition-all duration-300 group-hover:text-[#94A3B8] group-hover:tracking-[0.36em]">
                            Studio
                        </span>
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
