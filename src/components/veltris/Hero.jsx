import React from "react";
import { motion } from "framer-motion";

const highImpactCapabilities = [
    "Next-Gen Web Architecture",
    "Cinematic Video Production",
    "High-Conversion UI/UX",
    "Growth Automation Systems",
    "Premium Brand Identity",
    "Performance Optimization",
];

export default function Hero() {
    return (
        <section
            id="top"
            className="relative pt-36 pb-28 md:pt-44 md:pb-40 overflow-hidden bg-[#030712]"
        >
            {/* Ambient Background Infrastructure */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_50%,transparent_100%)] opacity-25 pointer-events-none" />
            <div className="absolute top-1/4 -left-12 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-12 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                {/* System Status Pill */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto mb-8 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 text-xs tracking-wide"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                    </span>
                    <span className="text-gray-400 font-medium">
                        Engine Active
                    </span>
                    <span className="text-gray-600">|</span>
                    <span className="text-cyan-400 font-mono">v5.0_stable</span>
                </motion.div>

                {/* High-Conversion Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-balance text-center font-bold tracking-tight text-white text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.05]"
                >
                    We Engineer Digital Assets That <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-500 bg-clip-text text-transparent">
                        Scale Business Value.
                    </span>
                </motion.h1>

                {/* Punchy Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className="mx-auto mt-6 max-w-2xl text-center text-gray-400 text-lg md:text-xl font-normal leading-relaxed text-balance"
                >
                    Elite engineering meets high-tier digital production. We
                    construct high-performance web systems, premium brand
                    layouts, and cinematic digital content designed to
                    accelerate conversion.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="mt-10 flex flex-wrap items-center justify-center gap-4"
                >
                    <a
                        href="#work"
                        className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-black bg-white hover:bg-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
                    >
                        Explore Showreel
                        <span className="transition-transform group-hover:translate-x-1">
                            →
                        </span>
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                        Scale Your Platform
                    </a>
                </motion.div>

                {/* Performance Core Tags */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-16 flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto"
                >
                    {highImpactCapabilities.map((capability, idx) => (
                        <motion.span
                            key={capability}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                delay: 0.55 + idx * 0.05,
                                duration: 0.4,
                            }}
                            className="rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm px-4 py-2 text-xs font-medium text-gray-300 transition-colors hover:border-cyan-500/30"
                        >
                            <span className="text-cyan-400 mr-2">/</span>
                            {capability}
                        </motion.span>
                    ))}
                </motion.div>

                {/* Live Node Analytics Control Panel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="relative mt-20 mx-auto max-w-5xl"
                >
                    <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-white/10 to-transparent" />
                    <div className="relative border border-white/10 bg-[#0b0f19]/80 backdrop-blur-xl rounded-xl p-2 shadow-2xl">
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <span className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
                                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/40" />
                                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/80" />
                                <span className="ml-3 font-mono text-xs tracking-tight text-gray-400">
                                    veltris_core_metrics // logs.sh
                                </span>
                            </div>
                            <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10 uppercase tracking-widest">
                                Live
                            </span>
                        </div>

                        <div className="grid md:grid-cols-3 gap-px bg-white/5 rounded-b-xl overflow-hidden">
                            {[
                                {
                                    metric: "Growth Velocity",
                                    value: "14.2x",
                                    meta: "Avg conversion lift",
                                    status: "+312%",
                                },
                                {
                                    metric: "Frame Engine Response",
                                    value: "0.24ms",
                                    meta: "Global asset delivery",
                                    status: "Optimized",
                                },
                                {
                                    metric: "Media Throughput",
                                    value: "8K Ultra",
                                    meta: "Cinematic pipeline delivery",
                                    status: "100% Core",
                                },
                            ].map((item) => (
                                <div
                                    key={item.metric}
                                    className="bg-[#070a12] p-6 hover:bg-[#0c101c] transition-colors"
                                >
                                    <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-gray-500 font-semibold">
                                        <span>{item.metric}</span>
                                        <span className="text-cyan-400 text-xs font-mono font-normal">
                                            {item.status}
                                        </span>
                                    </div>
                                    <div className="mt-3 flex items-baseline gap-2.5">
                                        <span className="text-3xl font-bold tracking-tight text-white font-mono">
                                            {item.value}
                                        </span>
                                        <span className="text-xs text-gray-400">
                                            {item.meta}
                                        </span>
                                    </div>

                                    {/* Clean SVG Sparkline Visualizer */}
                                    <div className="mt-4 h-6 relative overflow-hidden rounded bg-white/[0.02]">
                                        <svg
                                            viewBox="0 0 200 32"
                                            className="absolute inset-0 h-full w-full"
                                        >
                                            <path
                                                d="M0 20 L25 12 L50 24 L75 8 L100 18 L125 4 L150 14 L175 6 L200 10"
                                                fill="none"
                                                stroke="#22d3ee"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
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
