import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
    const cols = [
        {
            title: "Studio",
            links: ["About", "Divisions", "Process", "Careers"],
        },
        {
            title: "Services",
            links: [
                "Web Systems",
                "Creative Production",
                "Brand Experience",
                "Automation",
            ],
        },
        {
            title: "Connect",
            links: ["Twitter / X", "LinkedIn", "Instagram", "Dribbble"],
        },
    ];

    return (
        <footer className="relative border-t border-white/10 pt-24 pb-12 overflow-hidden text-white selection:bg-[var(--cyan)] selection:text-black">
            {/* Ambient Background Glow Layer */}
            <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-[var(--cyan)]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-96 h-96 bg-[var(--indigo)]/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Tech Grid Overlay */}
            <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16">
                    {/* Brand Meta Block - Integrated with Premium Logo & Type */}
                    <div className="lg:col-span-2 flex flex-col justify-between items-start space-y-6">
                        <div className="flex flex-col items-start">
                            <motion.a
                                href="#"
                                className="flex items-center gap-3 sm:gap-4 group relative select-none w-full sm:w-auto"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 25,
                                }}
                            >
                                {/* Logo Image Block */}
                                <div className="flex flex-col justify-center flex-shrink-0 overflow-visible p-1">
                                    <motion.img
                                        initial={{
                                            opacity: 0,
                                            scale: 0.8,
                                            rotate: -5,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            scale: 1,
                                            rotate: 0,
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.8,
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                        whileHover={{
                                            scale: 1.05,
                                            rotate: 3,
                                            filter: "drop-shadow(0 0 20px rgba(34, 211, 238, 0.45)) drop-shadow(0 0 40px rgba(34, 211, 238, 0.15))",
                                        }}
                                        src="/icon.png"
                                        alt="Veltris Desktop Icon"
                                        className="hidden md:block h-16 w-auto object-contain transition-all duration-300"
                                    />
                                    <motion.img
                                        src="/logo2.png"
                                        alt="Veltris Mobile Icon"
                                        className="block md:hidden h-12 w-auto object-contain"
                                    />
                                </div>

                                {/* Premium Typography Block */}
                                <div className="hidden md:flex flex-col justify-center leading-none min-w-0 select-none">
                                    <div className="flex items-center">
                                        <h1
                                            className="
                                                text-[18px] sm:text-xl 
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
                                            {"VELTRIS"
                                                .split("")
                                                .map((letter, index) => (
                                                    <motion.span
                                                        key={index}
                                                        initial={{
                                                            y: "100%",
                                                            opacity: 0,
                                                        }}
                                                        whileInView={{
                                                            y: 0,
                                                            opacity: 1,
                                                        }}
                                                        viewport={{
                                                            once: true,
                                                        }}
                                                        transition={{
                                                            duration: 0.8,
                                                            ease: [
                                                                0.16, 1, 0.3, 1,
                                                            ],
                                                            delay: index * 0.04,
                                                        }}
                                                        className="inline-block"
                                                    >
                                                        {letter}
                                                    </motion.span>
                                                ))}
                                        </h1>
                                    </div>

                                    {/* Studios Line */}
                                    <motion.div
                                        initial={{ opacity: 0, scaleX: 0.6 }}
                                        whileInView={{ opacity: 1, scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 1,
                                            ease: [0.16, 1, 0.3, 1],
                                            delay: 0.3,
                                        }}
                                        className="flex items-center gap-1.5 mx-3 origin-center"
                                    >
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
                                        <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-cyan-400/50" />
                                        <span
                                            className="text-[7px] font-bold uppercase text-cyan-400 transition-all duration-300 group-hover:text-cyan-300 flex-shrink-0"
                                            style={{
                                                letterSpacing: "0.55em",
                                                marginRight: "-0.55em",
                                            }}
                                        >
                                            STUDIOS
                                        </span>
                                        <div className="h-[1px] w-6 bg-gradient-to-l from-transparent to-cyan-400/50" />
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
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.8,
                                        }}
                                        className="
                hidden sm:block
                mt-1.5
                font-extrabold
                text-[8px]
                uppercase
                tracking-[0.24em]
                text-slate-500
                group-hover:text-slate-400
                transition-all
                duration-300
            "
                                    >
                                        AI-POWERED EDITING & CREATIVE
                                        ENGINEERING
                                    </motion.span>
                                </div>
                            </motion.a>

                            <p className="mt-6 max-w-sm text-sm text-white/60 leading-relaxed font-sans">
                                A collaborative creative-tech studio building
                                high-performance, scalable digital architectures
                                for modern global brands.
                            </p>
                        </div>

                        {/* Status Chip */}
                        <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md px-3.5 py-2 text-[11px] font-mono tracking-wide text-white/70 shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_8px_#22D3EE]" />
                            </span>
                            <span>
                                system · operational ·{" "}
                                <span className="text-white font-semibold">
                                    99.98% uptime
                                </span>
                            </span>
                        </div>
                    </div>

                    {/* Navigation Link Columns */}
                    {cols.map((c) => (
                        <div key={c.title} className="flex flex-col space-y-5">
                            <div className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-white/40 flex items-center gap-1.5">
                                <span className="text-cyan-400">//</span>{" "}
                                {c.title}
                            </div>
                            <ul className="space-y-3 text-sm font-sans">
                                {c.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="group relative inline-flex items-center text-white/55 hover:text-white transition-colors duration-200 py-0.5"
                                        >
                                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                                {link}
                                            </span>
                                            {c.title === "Connect" && (
                                                <span className="text-cyan-400/0 text-[10px] ml-1 transform translate-y-px transition-all duration-200 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:text-cyan-400/100">
                                                    ↗
                                                </span>
                                            )}
                                            {/* Micro-Underline Interaction */}
                                            <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 group-hover:w-full" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Copyright & Fine Print Bar */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-[11px] text-white/40 tracking-wide">
                    <div className="text-center sm:text-left hover:text-white/60 transition-colors duration-200">
                        © {new Date().getFullYear()} VELTRIS STUDIO — ALL
                        SYSTEMS RESERVED
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <a
                            href="#"
                            className="hover:text-cyan-400 transition-colors duration-200 relative group"
                        >
                            /privacy
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-200 group-hover:w-full" />
                        </a>
                        <a
                            href="#"
                            className="hover:text-cyan-400 transition-colors duration-200 relative group"
                        >
                            /terms
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-200 group-hover:w-full" />
                        </a>
                        <span className="flex items-center gap-1 text-white/30 border-l border-white/10 pl-6 cursor-default select-none">
                            <span className="text-indigo-400">↳</span> crafted
                            with precision
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
