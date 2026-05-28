import React from "react";
import { motion } from "framer-motion";

const expertiseTags = [
    "High-Performance Web Platforms",
    "Cinematic Video Production",
    "Conversion-Focused UI/UX Design",
    "Brand Strategy & Identity",
    "Marketing Workflow Automation",
    "Motion Graphics & Visual Systems",
];

const metrics = [
    {
        title: "Active Client Projects",
        value: "14 Live",
        context: "Global projects currently in development",
        status: "3 Active Builds",
    },
    {
        title: "Average Launch Timeline",
        value: "18 Days",
        context: "From approved design to live deployment",
        status: "Structured Delivery",
    },
    {
        title: "Client Growth Snapshot",
        value: "+42% YoY",
        context: "Engagement growth across recent launches",
        status: "Portfolio Review",
    },
];

// Framer Motion Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 15 },
    },
};

export default function Hero() {
    return (
        <section
            id="hero-section"
            className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-950 text-white selection:bg-cyan-500/30"
        >
            {/* Premium Background Ambiance */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-30 pointer-events-none" />

            {/* Ambient Lighting Orbs */}
            <div
                className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none animate-pulse"
                style={{ animationDuration: "8s" }}
            />
            <div
                className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none animate-pulse"
                style={{ animationDuration: "12s" }}
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                {/* Studio Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mx-auto mb-8 flex w-fit items-center gap-3 rounded-full border border-white/5 bg-slate-900/40 backdrop-blur-xl px-4 py-2 text-xs tracking-wide shadow-xl shadow-black/40"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                    </span>

                    <span className="text-slate-300 font-medium">
                        Studio Status: Accepting Q2/Q3 Projects
                    </span>

                    <span className="text-slate-700 font-light">|</span>

                    <span className="text-cyan-400 font-mono tracking-wider text-[10px] uppercase">
                        GMT · EST · GST · IST
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        cubicBezier: [0.16, 1, 0.3, 1],
                    }}
                    className="text-balance text-center font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[70px] leading-[1.05] max-w-7xl mx-auto"
                >
                    <span className="bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent block mb-2">
                        We build high-performance web experiences &
                    </span>

                    <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                        cinematic digital systems for modern brands.
                    </span>
                </motion.h1>

                {/* Supporting Copy */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.15,
                        cubicBezier: [0.16, 1, 0.3, 1],
                    }}
                    className="mx-auto mt-8 max-w-2xl text-center text-slate-400 text-base md:text-lg leading-relaxed text-balance font-light"
                >
                    We combine custom web development, cinematic content
                    production, and conversion-focused design into one
                    streamlined creative workflow built for scalable digital
                    growth.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#portfolio"
                        className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition-all duration-300 shadow-[0_0_40px_-5px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_0px_rgba(6,182,212,0.5)] transform hover:-translate-y-0.5"
                    >
                        View Selected Projects
                        <span className="transition-transform duration-300 group-hover:translate-x-1.5 font-light">
                            →
                        </span>
                    </a>

                    <a
                        href="#calendar"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-7 py-4 text-sm font-medium text-slate-200 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                        Schedule Strategy Call
                    </a>
                </motion.div>

                {/* Floating Expertise Tags */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-20 flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto"
                >
                    {expertiseTags.map((tag) => (
                        <motion.span
                            key={tag}
                            variants={itemVariants}
                            whileHover={{
                                y: -2,
                                borderColor: "rgba(34,211,238,0.3)",
                                backgroundColor: "rgba(15,23,42,0.6)",
                            }}
                            className="rounded-full border border-slate-900 bg-slate-900/30 backdrop-blur-sm px-4 py-2.5 text-xs font-medium text-slate-300 flex items-center transition-colors duration-300 select-none cursor-default shadow-sm"
                        >
                            <span className="text-cyan-400 mr-2 font-bold">
                                ✓
                            </span>

                            {tag}
                        </motion.span>
                    ))}
                </motion.div>

                {/* Dashboard Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.4,
                        cubicBezier: [0.16, 1, 0.3, 1],
                    }}
                    className="relative mt-24 mx-auto max-w-5xl"
                >
                    {/* Glow */}
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-cyan-500/20 to-transparent opacity-50 blur-md pointer-events-none" />

                    <div className="relative border border-white/10 bg-slate-950/60 backdrop-blur-2xl rounded-2xl p-1.5 shadow-2xl shadow-black/80">
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <span className="h-2.5 w-2.5 rounded-full bg-slate-800" />
                                <span className="h-2.5 w-2.5 rounded-full bg-slate-800" />
                                <span className="h-2.5 w-2.5 rounded-full bg-cyan-500/70" />

                                <span className="ml-2 font-mono text-[11px] text-slate-400 tracking-wider">
                                    veltris-studio // operational-overview.log
                                </span>
                            </div>

                            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest hidden sm:inline">
                                Studio Pipeline: Active
                            </span>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid md:grid-cols-3 gap-px bg-slate-900/60 rounded-b-xl overflow-hidden">
                            {metrics.map((item, index) => (
                                <div
                                    key={item.title}
                                    className="bg-slate-950/90 p-6 lg:p-8 flex flex-col justify-between relative group transition-all duration-500 hover:bg-slate-900/30"
                                >
                                    {/* Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-indigo-500/0 group-hover:from-cyan-500/[0.02] group-hover:to-indigo-500/[0.02] transition-all duration-500 pointer-events-none" />

                                    <div>
                                        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                            <span>{item.title}</span>

                                            <span className="text-cyan-400 font-mono text-xs font-semibold bg-cyan-500/5 px-2 py-0.5 rounded-full border border-cyan-500/10">
                                                {item.status}
                                            </span>
                                        </div>

                                        <div className="mt-5 flex items-baseline gap-2.5">
                                            <span className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-300">
                                                {item.value}
                                            </span>

                                            <span className="text-xs text-slate-400 leading-normal font-light">
                                                {item.context}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Graph */}
                                    <div className="mt-6 h-10 relative overflow-hidden rounded-lg bg-slate-950 border border-white/5 group-hover:border-cyan-500/20 transition-colors duration-300">
                                        <svg
                                            viewBox="0 0 200 32"
                                            className="absolute inset-0 h-full w-full"
                                            preserveAspectRatio="none"
                                        >
                                            <defs>
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
                                                        stopOpacity="0.25"
                                                    />

                                                    <stop
                                                        offset="100%"
                                                        stopColor="#06B6D4"
                                                        stopOpacity="0"
                                                    />
                                                </linearGradient>
                                            </defs>

                                            <motion.path
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{
                                                    duration: 1.5,
                                                    delay: 0.6 + index * 0.1,
                                                }}
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
                                                strokeLinecap="round"
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
