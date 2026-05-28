import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section
            id="contact"
            className="relative py-24 md:py-32 overflow-hidden bg-[#030712] text-white"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_45%,transparent_100%)] opacity-10 pointer-events-none" />

            {/* Ambient Glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-[150px]" />

            <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10 text-center">
                {/* Premium Signal Orb */}
                <div className="relative mx-auto mb-10 flex h-24 w-24 items-center justify-center">
                    <span className="absolute inset-0 rounded-full border border-cyan-400/30" />
                    <span className="absolute inset-2 rounded-full border border-cyan-400/20" />
                    <span className="absolute inset-4 rounded-full border border-cyan-400/10" />

                    <span className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl animate-pulse" />

                    <span className="relative h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_30px_#22d3ee]" />
                </div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]"
                >
                    Build a stronger{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400">
                        digital presence.
                    </span>
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        delay: 0.15,
                    }}
                    className="mx-auto mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed"
                >
                    We help modern brands build high-performing websites,
                    scalable digital systems, and premium visual content focused
                    on long-term growth.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        delay: 0.25,
                    }}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="mailto:hello@veltris.studio"
                        className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 shadow-[0_0_50px_-10px_rgba(6,182,212,0.4)] hover:shadow-[0_0_70px_-8px_rgba(6,182,212,0.6)] hover:-translate-y-0.5 w-full sm:w-auto"
                    >
                        Start a Project
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </a>

                    <a
                        href="#work"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-7 py-4 text-sm font-medium text-slate-200 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
                    >
                        View Selected Work
                    </a>
                </motion.div>

                {/* Bottom Info */}
                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/50 px-4 py-2 text-[11px] font-mono tracking-wide text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Response time usually within 24 hours
                </div>
            </div>
        </section>
    );
}
