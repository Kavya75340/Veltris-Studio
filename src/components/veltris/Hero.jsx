import { motion } from "motion/react";

const tags = [
    "Web Systems",
    "Creative Production",
    "Brand Experience",
    "Automation",
    "Motion",
    "UI/UX",
];

export default function Hero() {
    return (
        <section
            id="top"
            className="relative pt-36 pb-28 md:pt-44 md:pb-40 overflow-hidden"
        >
            {/* Background Grid Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-60 pointer-events-none" />
            <div className="absolute top-1/4 -left-12 w-[400px] h-[400px] bg-sky-500/5 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-12 w-[400px] h-[400px] bg-violet-500/5 blur-[140px] rounded-full pointer-events-none" />
            {/* ambient */}
            {/* <div
                className="absolute inset-0 -z-10"
                style={{ background: "var(--gradient-hero)" }}
            />
            <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-70" />
            <div className="absolute -z-10 top-1/4 -left-32 h-[420px] w-[420px] rounded-full bg-[var(--indigo)]/25 blur-[120px] animate-float-slow" />
            <div
                className="absolute -z-10 bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-[var(--cyan)]/20 blur-[140px] animate-float-slow"
                style={{ animationDelay: "-4s" }}
            /> */}

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                {/* status pill */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-8 flex w-fit items-center gap-3 rounded-full glass px-3 py-1.5 text-xs"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--cyan)] opacity-75 animate-pulse-ring" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--cyan)]" />
                    </span>
                    <span className="text-[var(--color-telemetry)]">
                        Studio online
                    </span>
                    <span className="text-[var(--color-comment)]">/</span>
                    <span className="text-[var(--color-directory)] font-mono">
                        v4.2 · global
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.05 }}
                    className="text-balance text-center font-semibold tracking-[-0.03em] text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.98]"
                >
                    <span className="gradient-text">Creative Systems</span>
                    <br />
                    <span className="gradient-text">Built for Modern </span>
                    <span className="accent-text">Brands.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mx-auto mt-7 max-w-2xl text-center text-[var(--color-telemetry)] text-lg leading-relaxed text-balance"
                >
                    Veltris Studio combines strategic design, scalable
                    development, and cinematic content production into one
                    collaborative execution system for modern businesses.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.32 }}
                    className="mt-10 flex flex-wrap items-center justify-center gap-3"
                >
                    <a
                        href="#work"
                        className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-[var(--background)] bg-white hover:shadow-[0_0_60px_-10px_rgba(6,182,212,0.6)] transition-shadow"
                    >
                        View Studio Work
                        <span className="transition-transform group-hover:translate-x-0.5">
                            →
                        </span>
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium glass hover:border-white/20 transition"
                    >
                        Book Discovery Call
                    </a>
                </motion.div>

                {/* floating tags */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-14 flex flex-wrap items-center justify-center gap-2"
                >
                    {tags.map((t, i) => (
                        <motion.span
                            key={t}
                            initial={{ y: 12, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                delay: 0.55 + i * 0.06,
                                duration: 0.5,
                            }}
                            className="rounded-full hairline bg-[var(--surface)]/60 px-3 py-1.5 text-xs text-[var(--color-telemetry)]"
                        >
                            <span className="text-[var(--cyan)] mr-1.5">+</span>
                            {t}
                        </motion.span>
                    ))}
                </motion.div>

                {/* terminal panel */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.55 }}
                    className="relative mt-20 mx-auto max-w-5xl"
                >
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/10 to-transparent" />
                    <div className="relative glass rounded-2xl p-2 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.6)]">
                        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                                <span className="h-2.5 w-2.5 rounded-full bg-[var(--cyan)]/70" />
                                <span className="ml-3 font-mono text-[11px] text-[var(--color-directory)]">
                                    veltris/system › production.tsx
                                </span>
                            </div>
                            <span className="font-mono text-[11px] text-[var(--color-comment)]">
                                UTC · live
                            </span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-px bg-white/5 rounded-b-xl overflow-hidden">
                            {[
                                {
                                    k: "Active Pipelines",
                                    v: "12",
                                    sub: "web · creative · brand",
                                    trend: "+3",
                                },
                                {
                                    k: "Deploy Latency",
                                    v: "82ms",
                                    sub: "edge · global",
                                    trend: "-14%",
                                },
                                {
                                    k: "Render Throughput",
                                    v: "4.6k/s",
                                    sub: "motion · video",
                                    trend: "stable",
                                },
                            ].map((m) => (
                                <div
                                    key={m.k}
                                    className="bg-[var(--surface)] p-5"
                                >
                                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-[var(--color-comment)]">
                                        <span>{m.k}</span>
                                        <span className="text-[var(--cyan)]">
                                            {m.trend}
                                        </span>
                                    </div>
                                    <div className="mt-3 flex items-baseline gap-2">
                                        <span className="text-3xl font-semibold tracking-tight">
                                            {m.v}
                                        </span>
                                        <span className="text-xs text-[var(--color-telemetry)]">
                                            {m.sub}
                                        </span>
                                    </div>
                                    <div className="mt-4 h-8 relative overflow-hidden rounded-md bg-black/30">
                                        <svg
                                            viewBox="0 0 200 32"
                                            className="absolute inset-0 h-full w-full"
                                        >
                                            <path
                                                d="M0 24 L20 18 L40 22 L60 10 L80 16 L100 6 L120 14 L140 4 L160 12 L180 8 L200 14"
                                                fill="none"
                                                stroke="url(#g)"
                                                strokeWidth="1.5"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="g"
                                                    x1="0"
                                                    x2="1"
                                                >
                                                    <stop
                                                        offset="0"
                                                        stopColor="#06B6D4"
                                                        stopOpacity="0.2"
                                                    />
                                                    <stop
                                                        offset="1"
                                                        stopColor="#06B6D4"
                                                    />
                                                </linearGradient>
                                            </defs>
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
