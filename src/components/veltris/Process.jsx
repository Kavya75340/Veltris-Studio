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
    },
    {
        n: "02",
        t: "Strategy",
        d: "Positioning, scope and execution blueprint.",
        icon: Binary,
        color: "from-blue-500 to-indigo-500",
        shadow: "shadow-blue-500/10",
        glow: "bg-blue-500/20",
    },
    {
        n: "03",
        t: "Design",
        d: "Systems, components and creative direction.",
        icon: Layers,
        color: "from-indigo-500 to-purple-500",
        shadow: "shadow-indigo-500/10",
        glow: "bg-indigo-500/20",
    },
    {
        n: "04",
        t: "Development",
        d: "Engineering with edge-native infrastructure.",
        icon: Terminal,
        color: "from-purple-500 to-fuchsia-500",
        shadow: "shadow-purple-500/10",
        glow: "bg-purple-500/20",
    },
    {
        n: "05",
        t: "Launch",
        d: "Release orchestration and quality gates.",
        icon: Cpu,
        color: "from-fuchsia-500 to-rose-500",
        shadow: "shadow-fuchsia-500/10",
        glow: "bg-fuchsia-500/20",
    },
    {
        n: "06",
        t: "Scale",
        d: "Iteration, growth loops and optimization.",
        icon: Radio,
        color: "from-rose-500 to-cyan-500",
        shadow: "shadow-rose-500/10",
        glow: "bg-rose-500/20",
    },
];

export default function Process() {
    const containerRef = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Scroll progress trigger
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 75%", "end 60%"],
    });

    const scaleX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    // Calculate dynamic hover width (6 steps means 5 gaps of 20% each)
    const hoverWidth = hoveredIndex !== null ? `${hoveredIndex * 20}%` : "0%";

    return (
        <section
            id="process"
            className="relative py-28 lg:py-36 overflow-hidden bg-[#030712] text-white"
        >
            {/* Ambient background matrix */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_40%,transparent_100%)] opacity-10 pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
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

                <div ref={containerRef} className="relative mt-24 lg:mt-32">
                    {/* 
                      --- HIGH-END DESKTOP PIPELINE TRACKER ---
                      Dono tracks line up perfectly. Hover layer catches up dynamically with spring response.
                    */}
                    <div className="absolute left-[8.33%] right-[8.33%] top-6 h-[2px] bg-slate-900 hidden lg:block rounded-full -z-20 overflow-visible">
                        {/* 1. Base Scroll Line (Always responsive to user scroll position) */}
                        <motion.div
                            style={{ scaleX }}
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 via-indigo-500 via-purple-500 via-fuchsia-500 to-rose-500 origin-left"
                        />

                        {/* 2. Interactive Hover Fill Line (Overrides scroll line smoothly on cursor hover) */}
                        <motion.div
                            animate={{ width: hoverWidth }}
                            transition={{
                                type: "spring",
                                stiffness: 80,
                                damping: 15,
                                mass: 0.8,
                            }}
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 via-indigo-500 via-purple-500 via-fuchsia-500 to-rose-500 origin-left shadow-[0_0_14px_rgba(168,85,247,0.65)]"
                        />
                    </div>

                    {/* Process Container Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-4 relative z-10">
                        {steps.map((s, i) => {
                            const Icon = s.icon;
                            const isHovered = hoveredIndex === i;
                            const isAnyHovered = hoveredIndex !== null;

                            return (
                                <motion.div
                                    key={s.n}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-40px" }}
                                    transition={{
                                        duration: 0.6,
                                        delay: i * 0.05,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    onMouseEnter={() => setHoveredIndex(i)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className="relative group cursor-pointer flex flex-col items-start lg:items-center"
                                >
                                    {/* Mobile/Tablet Vertical Tracker Track */}
                                    <div className="absolute left-[21px] top-11 bottom-[-48px] w-[2px] bg-slate-900 block lg:hidden group-last:hidden z-0" />

                                    {/* Timeline Node Wrapper */}
                                    <div className="relative flex items-center justify-start lg:justify-center mb-6 pl-[2px] lg:pl-0 z-30">
                                        <div
                                            className={`relative flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 transition-all duration-500 ${
                                                isHovered
                                                    ? "border-slate-500 scale-110 shadow-lg " +
                                                      s.shadow
                                                    : ""
                                            }`}
                                        >
                                            <div
                                                className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md ${s.glow}`}
                                            />
                                            <Icon
                                                className={`h-4 w-4 text-slate-500 transition-all duration-300 ${
                                                    isHovered
                                                        ? "text-white rotate-[15deg]"
                                                        : "group-hover:text-slate-300"
                                                }`}
                                            />
                                        </div>
                                    </div>

                                    {/* Main Ultra-Premium Card */}
                                    <div
                                        className={`w-full ml-16 lg:ml-0 rounded-2xl border bg-slate-950/40 p-6 backdrop-blur-md relative overflow-hidden transition-all duration-500 flex flex-col justify-between min-h-[195px] z-10
                                            ${
                                                isHovered
                                                    ? "border-slate-700 bg-slate-900/20 translate-y-[-4px] shadow-2xl shadow-black/60"
                                                    : "border-slate-900/80"
                                            } 
                                            ${
                                                isAnyHovered && !isHovered
                                                    ? "opacity-35 blur-[0.3px]"
                                                    : "opacity-100"
                                            }`}
                                    >
                                        {/* Top Accent Tech Bar */}
                                        <div
                                            className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${
                                                s.color
                                            } transform origin-left transition-transform duration-500 ${
                                                isHovered
                                                    ? "scale-x-100"
                                                    : "scale-x-0"
                                            }`}
                                        />

                                        {/* Content Wrapper */}
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <span
                                                    className={`font-mono text-xs font-black tracking-widest transition-colors duration-300 ${
                                                        isHovered
                                                            ? "text-white"
                                                            : "text-slate-600"
                                                    }`}
                                                >
                                                    // {s.n}
                                                </span>
                                            </div>

                                            <h3 className="mt-4 text-base font-bold text-slate-200 tracking-tight transition-colors duration-300 group-hover:text-white">
                                                {s.t}
                                            </h3>

                                            <p className="mt-2 text-xs text-slate-400 leading-relaxed font-normal transition-colors duration-300 group-hover:text-slate-300">
                                                {s.d}
                                            </p>
                                        </div>

                                        {/* Bottom Status Dot */}
                                        <div className="mt-5 pt-3 border-t border-slate-900/60 flex items-center justify-between">
                                            <span className="font-mono text-[9px] tracking-widest text-slate-600 uppercase">
                                                Ready State
                                            </span>
                                            <div
                                                className={`h-1 w-1 rounded-full bg-slate-800 transition-all duration-500 ${
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
