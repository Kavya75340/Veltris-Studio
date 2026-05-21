import React from "react";

export function Footer() {
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
                    {/* Brand Meta Block */}
                    <div className="lg:col-span-2 flex flex-col justify-between items-start space-y-6">
                        <div>
                            <div className="flex items-center gap-3 group cursor-pointer">
                                <span className="relative flex h-8 w-8 items-center justify-center">
                                    <span className="absolute inset-0 rounded-lg bg-[var(--cyan)]/20 blur-md transition-all duration-300 group-hover:bg-[var(--cyan)]/40 group-hover:scale-110" />
                                    <span className="relative h-4 w-4 rounded-md bg-gradient-to-br from-[var(--cyan)] to-[var(--indigo)] transform rotation-45 transition-transform duration-500 group-hover:rotate-180" />
                                </span>
                                <span className="font-sans font-bold tracking-tight text-xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
                                    Veltris
                                    <span className="text-[var(--cyan)]">
                                        .
                                    </span>
                                    Studio
                                </span>
                            </div>
                            <p className="mt-5 max-w-sm text-sm text-[var(--color-telemetry,rgba(255,255,255,0.6))] leading-relaxed font-sans">
                                A collaborative creative-tech studio building
                                high-performance, scalable digital architectures
                                for modern global brands.
                            </p>
                        </div>

                        {/* Status Chip */}
                        <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md px-3.5 py-2 text-[11px] font-mono tracking-wide text-white/70 shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--cyan)] opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--cyan)] shadow-[0_0_8px_var(--cyan)]" />
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
                                <span className="text-[var(--cyan)]">//</span>{" "}
                                {c.title}
                            </div>
                            <ul className="space-y-3 text-sm font-sans">
                                {c.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="group relative inline-flex items-center text-[var(--color-telemetry,rgba(255,255,255,0.55))] hover:text-white transition-colors duration-200 py-0.5"
                                        >
                                            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                                                {link}
                                            </span>
                                            {c.title === "Connect" && (
                                                <span className="text-white/0 text-[10px] ml-1 transform translate-y-px transition-all duration-200 group-hover:text-[var(--cyan)] group-hover:translate-x-0.5">
                                                    ↗
                                                </span>
                                            )}
                                            {/* Micro-Underline Interaction */}
                                            <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[var(--cyan)] to-[var(--indigo)] transition-all duration-300 group-hover:w-full" />
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
                            className="hover:text-[var(--cyan)] transition-colors duration-200 relative group"
                        >
                            /privacy
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--cyan)] transition-all duration-200 group-hover:w-full" />
                        </a>
                        <a
                            href="#"
                            className="hover:text-[var(--cyan)] transition-colors duration-200 relative group"
                        >
                            /terms
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--cyan)] transition-all duration-200 group-hover:w-full" />
                        </a>
                        <span className="flex items-center gap-1 text-white/30 border-l border-white/10 pl-6 cursor-default select-none">
                            <span className="text-[var(--indigo)]">↳</span>{" "}
                            crafted with precision
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
