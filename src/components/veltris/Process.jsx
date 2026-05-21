import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import SectionHeader from "./Section";
import { Binary, Compass, Cpu, Layers, Radio, Terminal } from "lucide-react";

const steps = [
    {
        n: "01",
        t: "Discovery",
        d: "Audit, alignment and stakeholder mapping.",
        icon: Compass,
        color: "from-cyan-500 to-blue-500",
        shadow: "shadow-cyan-500/10",
        glow: "bg-cyan-500/20",
        accent: "text-cyan-400",
    },
    {
        n: "02",
        t: "Strategy",
        d: "Positioning, scope and execution blueprint.",
        icon: Binary,
        color: "from-blue-500 to-indigo-500",
        shadow: "shadow-blue-500/10",
        glow: "bg-blue-500/20",
        accent: "text-blue-400",
    },
    {
        n: "03",
        t: "Design",
        d: "Systems, components and creative direction.",
        icon: Layers,
        color: "from-indigo-500 to-purple-500",
        shadow: "shadow-indigo-500/10",
        glow: "bg-indigo-500/20",
        accent: "text-indigo-400",
    },
    {
        n: "04",
        t: "Development",
        d: "Engineering with edge-native infrastructure.",
        icon: Terminal,
        color: "from-purple-500 to-fuchsia-500",
        shadow: "shadow-purple-500/10",
        glow: "bg-purple-500/20",
        accent: "text-purple-400",
    },
    {
        n: "05",
        t: "Launch",
        d: "Release orchestration and quality gates.",
        icon: Cpu,
        color: "from-fuchsia-500 to-rose-500",
        shadow: "shadow-fuchsia-500/10",
        glow: "bg-fuchsia-500/20",
        accent: "text-fuchsia-400",
    },
    {
        n: "06",
        t: "Scale",
        d: "Iteration, growth loops and optimization.",
        icon: Radio,
        color: "from-rose-500 to-cyan-500",
        shadow: "shadow-rose-500/10",
        glow: "bg-rose-500/20",
        accent: "text-rose-400",
    },
];

export default function Process() {
    const containerRef = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Scroll performance monitoring for lines
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 70%"],
    });

    const scaleLine = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    // Safe calculated hover space width for desktop only
    const hoverWidth = hoveredIndex !== null ? `${hoveredIndex * 20}%` : "0%";

    return (
        <section
            id="process"
            className="relative py-20 md:py-28 lg:py-36 overflow-hidden bg-[#030712] text-white"
        >
            {/* Ambient background grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] md:bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_40%,transparent_100%)] opacity-10 pointer-events-none" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
                <SectionHeader
                    eyebrow="EXECUTION SYSTEM"
                    title={
                        <>
                            Structured execution.{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-600">
                                Scalable systems.
                            </span>
                        </>
                    }
                    subtitle="A repeatable workflow engineered to ship premium outcomes — predictably."
                />

                <div
                    ref={containerRef}
                    className="relative mt-16 md:mt-24 lg:mt-32"
                >
                    {/* --- 1. DESKTOP ONLY PIPELINE TRACKER --- */}
                    <div className="absolute left-[8.33%] right-[8.33%] top-6 h-[2px] bg-slate-950 hidden lg:block rounded-full -z-20 border border-slate-900/50">
                        <motion.div
                            style={{ scaleX: scaleLine }}
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 via-indigo-500 via-fuchsia-500 to-rose-500 origin-left"
                        />
                        <motion.div
                            animate={{ width: hoverWidth }}
                            transition={{
                                type: "spring",
                                stiffness: 90,
                                damping: 16,
                            }}
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 via-indigo-500 via-fuchsia-500 to-rose-500 origin-left shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                        />
                    </div>

                    {/* --- 2. MOBILE ONLY CENTER/BACKGROUND TRACKER --- */}
                    <div className="absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 top-2 bottom-2 w-[2px] bg-slate-950/80 block lg:hidden rounded-full -z-20 border border-slate-900/50">
                        <motion.div
                            style={{ scaleY: scaleLine }}
                            className="absolute inset-x-0 top-0 bg-gradient-to-b from-cyan-500 via-blue-500 via-purple-500 via-rose-500 to-cyan-500 origin-top"
                        />
                    </div>

                    {/* Process Content Grid Matrix */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-6 lg:gap-4 relative z-10">
                        {steps.map((s, i) => {
                            const Icon = s.icon;
                            const isHovered = hoveredIndex === i;
                            const isAnyHovered = hoveredIndex !== null;

                            return (
                                <motion.div
                                    key={s.n}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-20px" }}
                                    transition={{
                                        duration: 0.7,
                                        delay: i * 0.04,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    onMouseEnter={() => setHoveredIndex(i)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    onTouchStart={() => setHoveredIndex(i)}
                                    onTouchEnd={() => setHoveredIndex(null)}
                                    className="relative group cursor-pointer flex flex-col w-full"
                                >
                                    {/* DESKTOP ONLY TIMELINE NODE */}
                                    <div className="relative hidden lg:flex items-center justify-center mb-6 z-30">
                                        <div
                                            className={`relative flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 border border-slate-900 transition-all duration-500 ${
                                                isHovered
                                                    ? "border-slate-500 scale-110 " +
                                                      s.shadow
                                                    : ""
                                            }`}
                                        >
                                            <div
                                                className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm ${s.glow}`}
                                            />
                                            <Icon
                                                className={`h-4 w-4 text-slate-500 transition-colors duration-300 ${
                                                    isHovered
                                                        ? "text-white"
                                                        : ""
                                                }`}
                                            />
                                        </div>
                                    </div>

                                    {/* MOBILE EXTRA-PREMIUM ADAPTIVE CARD */}
                                    <div
                                        className={`w-full rounded-2xl border bg-slate-950/60 p-6 backdrop-blur-md relative overflow-hidden transition-all duration-500 flex flex-col justify-between min-h-[210px] sm:min-h-[190px] lg:min-h-[180px] z-10
                                            `}
                                    >
                                        {/* --- FIX: Premium Top Accent Gradient Border System --- */}
                                        <div className="absolute top-0 inset-x-0 h-[2px] bg-slate-900 z-20">
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-r ${s.color} opacity-30 transition-opacity duration-300 group-hover:opacity-100`}
                                            />
                                            <motion.div
                                                initial={{ scaleX: 0 }}
                                                animate={{
                                                    scaleX: isHovered ? 1 : 0,
                                                }}
                                                transition={{
                                                    duration: 0.4,
                                                    ease: "easeInOut",
                                                }}
                                                className={`absolute inset-0 bg-gradient-to-r ${s.color} origin-left shadow-[0_1px_10px_rgba(255,255,255,0.2)]`}
                                            />
                                        </div>

                                        <div>
                                            {/* MOBILE INLINE BADGE SYSTEM */}
                                            <div className="flex items-center justify-between lg:block mb-4 lg:mb-0">
                                                <span
                                                    className={`font-mono text-xs font-black tracking-widest transition-colors duration-300 ${
                                                        isHovered
                                                            ? "text-white"
                                                            : "text-slate-600"
                                                    }`}
                                                >
                                                    {s.n}
                                                </span>

                                                {/* Micro Icon Badge for Mobile Screens Only */}
                                                <div
                                                    className={`lg:hidden p-2 rounded-lg bg-slate-900/80 border border-slate-800/80 transition-colors duration-300 ${
                                                        isHovered
                                                            ? "border-slate-700"
                                                            : ""
                                                    }`}
                                                >
                                                    <Icon
                                                        className={`h-4 w-4 text-slate-400 transition-colors duration-300 ${
                                                            isHovered
                                                                ? s.accent
                                                                : ""
                                                        }`}
                                                    />
                                                </div>
                                            </div>

                                            {/* Title & Desc */}
                                            <h3 className="text-base font-bold text-slate-100 tracking-tight transition-colors duration-300 group-hover:text-white">
                                                {s.t}
                                            </h3>

                                            <p className="mt-2 text-xs sm:text-[13px] text-slate-400 leading-relaxed font-normal transition-colors duration-300 group-hover:text-slate-300">
                                                {s.d}
                                            </p>
                                        </div>

                                        {/* Technical Base Stats */}
                                        <div className="mt-5 pt-3 border-t border-slate-900/80 flex items-center justify-between">
                                            <span className="font-mono text-[9px] tracking-widest text-slate-600 uppercase">
                                                Active Pipeline
                                            </span>
                                            <div
                                                className={`h-1.5 w-1.5 rounded-full bg-slate-800 transition-all duration-500 ${
                                                    isHovered
                                                        ? "bg-emerald-400 shadow-[0_0_8px_#34d399] scale-125"
                                                        : ""
                                                }`}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
