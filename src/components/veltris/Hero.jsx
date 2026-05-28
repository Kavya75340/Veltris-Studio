import React from "react";
import { motion } from "framer-motion";

const expertiseTags = [
    "High-Performance Web Systems",
    "High-Retention Video Editing",
    "ConversionUI/UX Design",
    "Brand Systems & Strategy",
    "Marketing Automation",
    "Performance Motion Graphics",
];

const metrics = [
    {
        title: "Active Client Pipelines",
        value: "14 Live",
        context: "Global & Domestic enterprises",
        status: "+3 this quarter",
    },
    {
        title: "Avg. Project Turnaround",
        value: "18 Days",
        context: "Concept to production deployment",
        status: "optimized",
    },
    {
        title: "Average Growth Impact",
        value: "42% YoY",
        context: "Client retention & engagement boost",
        status: "verified metric",
    },
];

export default function Hero() {
    return (
        <section
            id="hero-section"
            className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden bg-slate-950 text-white"
        >
            {/* Premium Background Ambiance */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
            <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-12 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                {/* Live Studio Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto mb-6 flex w-fit items-center gap-2.5 rounded-full border border-white/10 bg-slate-900/60 backdrop-blur-md px-3.5 py-1.5 text-xs tracking-wide"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                    </span>
                    <span className="text-slate-300 font-medium">
                        Availability: Accepting Q2/Q3 Projects
                    </span>
                    <span className="text-slate-600">|</span>
                    <span className="text-cyan-400 font-mono">
                        IST · EST · GMT
                    </span>
                </motion.div>

                {/* Primary Value Proposition */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-balance text-center font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-[1.05] bg-clip-text text-"
                >
                    <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                        We build high-converting websites &
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                        cinematic digital assets for global brands.
                    </span>
                </motion.h1>

                {/* Short, Natural, No-Fluff Copy */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className="mx-auto mt-6 max-w-2xl text-center text-slate-400 text-base md:text-lg leading-relaxed text-balance"
                >
                    A premium digital agency engineered to bridge software
                    development, high-end video production, and conversion
                    design into single-vendor execution. No delays. Just
                    predictable business growth.
                </motion.p>

                {/* Strategic CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="mt-8 flex flex-wrap items-center justify-center gap-4"
                >
                    <a
                        href="#portfolio"
                        className="group relative inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition shadow-[0_0_30px_-5px_rgba(6,182,212,0.4)]"
                    >
                        Explore Case Studies
                        <span className="transition-transform group-hover:translate-x-1">
                            →
                        </span>
                    </a>
                    <a
                        href="#calendar"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-3.5 text-sm font-medium text-slate-300 hover:bg-white/10 hover:border-white/20 transition"
                    >
                        Book Strategy Call
                    </a>
                </motion.div>

                {/* Structured Competencies / Floating Tags */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-16 flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto"
                >
                    {expertiseTags.map((tag, idx) => (
                        <motion.span
                            key={tag}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                delay: 0.5 + idx * 0.05,
                                duration: 0.4,
                            }}
                            className="rounded-full border border-slate-800 bg-slate-900/40 backdrop-blur-sm px-4 py-2 text-xs font-medium text-slate-300 flex items-center"
                        >
                            <span className="text-cyan-400 mr-2">✓</span>
                            {tag}
                        </motion.span>
                    ))}
                </motion.div>

                {/* Real-Time Operational Performance Dashboard */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="relative mt-20 mx-auto max-w-5xl"
                >
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                    <div className="relative border border-white/10 bg-slate-900/40 backdrop-blur-xl rounded-2xl p-2 shadow-2xl">
                        {/* Terminal Header Bar */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <span className="h-2.5 w-2.5 rounded-full bg-slate-800" />
                                <span className="h-2.5 w-2.5 rounded-full bg-slate-800" />
                                <span className="h-2.5 w-2.5 rounded-full bg-cyan-500/80" />
                                <span className="ml-2 font-mono text-xs text-slate-400 tracking-wide">
                                    veltris-studio // production-metrics.log
                                </span>
                            </div>
                            <span className="font-mono text-[11px] text-slate-500 uppercase tracking-widest hidden sm:inline">
                                Network Status: Operational
                            </span>
                        </div>

                        {/* Interactive Metrics Grid */}
                        <div className="grid md:grid-cols-3 gap-px bg-slate-800/50 rounded-b-xl overflow-hidden">
                            {metrics.map((item, index) => (
                                <div
                                    key={item.title}
                                    className="bg-slate-950/80 p-6 flex flex-col justify-between"
                                >
                                    <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                                        <span>{item.title}</span>
                                        <span className="text-cyan-400 font-mono text-xs">
                                            {item.status}
                                        </span>
                                    </div>
                                    <div className="mt-4 flex items-baseline gap-2">
                                        <span className="text-3xl font-bold tracking-tight text-white">
                                            {item.value}
                                        </span>
                                        <span className="text-xs text-slate-400">
                                            {item.context}
                                        </span>
                                    </div>

                                    {/* SVG Sparkline Graph */}
                                    <div className="mt-5 h-8 relative overflow-hidden rounded-lg bg-slate-900/50 border border-slate-900">
                                        <svg
                                            viewBox="0 0 200 32"
                                            className="absolute inset-0 h-full w-full"
                                        >
                                            <defs>
                                                {/* Declared once safely with dynamic indexing */}
                                                <linearGradient
                                                    id={`gradient-${index}`}
                                                    x1="0"
                                                    y1="0"
                                                    x2="0"
                                                    y2="1"
                                                >
                                                    <stop
                                                        offset="0%"
                                                        stopColor="#06B6D4"
                                                        stopOpacity="0.4"
                                                    />
                                                    <stop
                                                        offset="100%"
                                                        stopColor="#06B6D4"
                                                        stopOpacity="0"
                                                    />
                                                </linearGradient>
                                            </defs>
                                            <path
                                                d={
                                                    index === 0
                                                        ? "M0 24 L20 18 L40 22 L60 10 L80 16 L100 6 L120 14 L140 4 L160 12 L180 8 L200 10"
                                                        : index === 1
                                                        ? "M0 10 L30 14 L60 8 L90 20 L120 12 L150 6 L180 14 L200 4"
                                                        : "M0 26 L40 24 L80 18 L120 14 L160 10 L200 6"
                                                }
                                                fill="none"
                                                stroke="#06B6D4"
                                                strokeWidth="1.5"
                                            />
                                            <path
                                                d={
                                                    index === 0
                                                        ? "M0 24 L20 18 L40 22 L60 10 L80 16 L100 6 L120 14 L140 4 L160 12 L180 8 L200 10 L200 32 L0 32 Z"
                                                        : index === 1
                                                        ? "M0 10 L30 14 L60 8 L90 20 L120 12 L150 6 L180 14 L200 4 L200 32 L0 32 Z"
                                                        : "M0 26 L40 24 L80 18 L120 14 L160 10 L200 6 L200 32 L0 32 Z"
                                                }
                                                fill={`url(#gradient-${index})`}
                                            />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
