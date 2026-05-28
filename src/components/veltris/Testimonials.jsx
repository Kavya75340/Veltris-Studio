import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./Section";

const items = [
    {
        quote: "The team delivered a premium website experience that improved our online positioning and helped streamline client acquisition.",
        name: "Adrian Carter",
        role: "Founder · Northbeam Studio",
    },
    {
        quote: "From strategy to execution, the process felt organized, collaborative, and focused on real business growth.",
        name: "Yuki Tanaka",
        role: "Director · Helix Digital",
    },
    {
        quote: "The combination of web development and content production helped us build a much stronger digital presence.",
        name: "Sofia Ramirez",
        role: "Marketing Lead · Maison Atelier",
    },
];

export default function Testimonials() {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden bg-[#030712]">
            {/* Ambient Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_45%,transparent_100%)] opacity-10 pointer-events-none" />

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
                <SectionHeader
                    eyebrow="CLIENT FEEDBACK"
                    title={
                        <>
                            Trusted by growing{" "}
                            <span className="accent-text">
                                modern businesses.
                            </span>
                        </>
                    }
                    subtitle="A few words from brands and founders we've collaborated with across web development, design, and content production."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-14">
                    {items.map((t, i) => (
                        <motion.figure
                            key={t.name}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 0.7,
                                delay: i * 0.08,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            whileHover={{
                                y: -4,
                            }}
                            className="relative rounded-2xl border border-slate-800/70 bg-slate-950/60 backdrop-blur-xl p-7 overflow-hidden group transition-all duration-500 hover:border-slate-700 hover:bg-slate-900/50 shadow-[0_0_40px_-12px_rgba(0,0,0,0.7)]"
                        >
                            {/* Top Accent Line */}
                            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-cyan-500/0 via-cyan-400/50 to-indigo-500/0 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Hover Glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] via-transparent to-indigo-500/[0.03]" />
                            </div>

                            {/* Quote Icon */}
                            <div className="relative z-10">
                                <div className="w-11 h-11 rounded-xl border border-slate-800 bg-slate-900/80 flex items-center justify-center group-hover:border-slate-700 transition-colors duration-300">
                                    <svg
                                        className="h-5 w-5 text-cyan-400"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M9 7H5a2 2 0 0 0-2 2v6h6V9H6c0-1.1.9-2 3-2V5c-2.2 0-4 .9-4 2zm10 0h-4a2 2 0 0 0-2 2v6h6V9h-3c0-1.1.9-2 3-2V5c-2.2 0-4 .9-4 2z" />
                                    </svg>
                                </div>

                                {/* Quote */}
                                <blockquote className="mt-6 text-[15px] leading-relaxed text-slate-300 group-hover:text-slate-200 transition-colors duration-300 min-h-[120px]">
                                    “{t.quote}”
                                </blockquote>

                                {/* Footer */}
                                <figcaption className="mt-7 pt-5 border-t border-slate-800/80">
                                    <div className="text-sm font-semibold text-white tracking-tight">
                                        {t.name}
                                    </div>

                                    <div className="text-xs text-slate-500 mt-1 tracking-wide">
                                        {t.role}
                                    </div>
                                </figcaption>
                            </div>
                        </motion.figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
