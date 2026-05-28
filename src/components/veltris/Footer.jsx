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
                    <div className="lg:col-span-2 flex flex-col justify-between items-start gap-8 md:gap-10">
                        {/* Brand Section */}
                        <div className="flex flex-col items-start w-full">
                            <motion.a
                                href="#"
                                className="
                relative flex flex-col items-start
                group select-none
                w-full sm:w-auto
            "
                                whileHover={{ y: -1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 18,
                                }}
                            >
                                {/* Logo + Glow Wrapper */}
                                <div className="relative flex items-center justify-center">
                                    {/* Ambient Glow */}
                                    <div
                                        className="
                        absolute inset-0
                        rounded-full
                        bg-cyan-400/15
                        blur-2xl
                        scale-75
                        opacity-70
                        transition-all duration-700
                        group-hover:scale-100
                        group-hover:opacity-100
                    "
                                    />

                                    {/* Secondary Glow */}
                                    <div
                                        className="
                        absolute inset-0
                        bg-gradient-to-r
                        from-cyan-400/10
                        via-sky-400/10
                        to-transparent
                        blur-3xl
                        opacity-60
                    "
                                    />

                                    {/* Logo */}
                                    <motion.img
                                        src="/logo1.png"
                                        alt="Veltris Logo"
                                        initial={{
                                            opacity: 0,
                                            y: 8,
                                            scale: 0.95,
                                        }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        whileHover={{
                                            scale: 1.04,
                                            y: -2,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeOut",
                                        }}
                                        className="
                        relative z-10
                        object-contain

                        h-12
                        sm:h-14
                        md:h-16
                        lg:h-[60px]
                        xl:h-20

                        w-auto

                        transition-all duration-500
                        drop-shadow-[0_0_12px_rgba(34,211,238,0.18)]
                        group-hover:drop-shadow-[0_0_22px_rgba(34,211,238,0.35)]
                    "
                                    />
                                </div>

                                {/* Tagline */}
                                <div
                                    className="
                    mt-2 sm:mt-3
                    flex items-center gap-2
                    flex-wrap
                "
                                >
                                    <div className="h-[1px] w-5 bg-cyan-400/40" />

                                    <span
                                        className="
                        text-[8px]
                        sm:text-[9px]
                        md:text-[10px]

                        uppercase
                        tracking-[0.28em]

                        text-cyan-100/70
                        font-medium
                        whitespace-nowrap
                    "
                                    >
                                        AI-Powered Editing & Creative
                                        Engineering
                                    </span>
                                </div>
                            </motion.a>

                            {/* Description */}
                            <p
                                className="
                mt-5 md:mt-6
                max-w-xs sm:max-w-sm md:max-w-md

                text-[13px]
                sm:text-sm
                md:text-[15px]

                leading-relaxed
                text-white/55
                font-light
            "
                            >
                                A collaborative creative-tech studio crafting
                                cinematic digital experiences, scalable systems,
                                and high-performance brand architectures for
                                modern global businesses.
                            </p>
                        </div>

                        {/* Status Capsule */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{
                                type: "spring",
                                stiffness: 240,
                                damping: 18,
                            }}
                            className="
            inline-flex items-center gap-3

            rounded-full
            border border-white/10
            bg-white/[0.03]

            backdrop-blur-xl

            px-4 py-2.5

            text-[10px]
            sm:text-[11px]

            font-mono
            tracking-[0.18em]
            uppercase

            text-white/70

            shadow-[0_0_30px_rgba(255,255,255,0.03)]
        "
                        >
                            {/* Live Dot */}
                            <span className="relative flex h-2.5 w-2.5">
                                <span
                                    className="
                    absolute inline-flex h-full w-full
                    rounded-full
                    bg-cyan-400
                    opacity-75
                    animate-ping
                "
                                />

                                <span
                                    className="
                    relative inline-flex
                    h-2.5 w-2.5
                    rounded-full
                    bg-cyan-400
                    shadow-[0_0_12px_#22D3EE]
                "
                                />
                            </span>

                            <span className="flex items-center gap-2 flex-wrap">
                                <span>System Operational</span>

                                <span className="text-white/30">•</span>

                                <span className="text-white font-semibold tracking-[0.15em]">
                                    99.98% Uptime
                                </span>
                            </span>
                        </motion.div>
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
