import { motion } from "motion/react";

export function CTA() {
    return (
        <section id="contact" className="relative py-32 overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-50" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-[var(--indigo)]/25 blur-[140px]" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[400px] w-[400px] rounded-full bg-[var(--cyan)]/20 blur-[120px]" />

            <div className="mx-auto max-w-4xl px-6 text-center">
                {/* glow ring */}
                <div className="relative mx-auto mb-10 flex h-24 w-24 items-center justify-center">
                    <span className="absolute inset-0 rounded-full border border-[var(--cyan)]/40" />
                    <span className="absolute inset-2 rounded-full border border-[var(--cyan)]/30" />
                    <span className="absolute inset-4 rounded-full border border-[var(--cyan)]/20" />
                    <span className="absolute inset-0 rounded-full bg-[var(--cyan)]/30 blur-2xl animate-pulse-ring" />
                    <span className="relative h-3 w-3 rounded-full bg-[var(--cyan)] shadow-[0_0_30px_var(--cyan)]" />
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-balance text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] gradient-text"
                >
                    Let's build something{" "}
                    <span className="accent-text">exceptional.</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="mx-auto mt-6 max-w-xl text-[var(--color-telemetry)] text-lg"
                >
                    Partner with Veltris Studio to design, build and produce the
                    next generation of your brand.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className="mt-10 flex flex-wrap items-center justify-center gap-3"
                >
                    <a
                        href="mailto:hello@veltris.studio"
                        className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-[var(--background)] bg-white shadow-[0_0_60px_-10px_rgba(6,182,212,0.5)] hover:shadow-[0_0_80px_-8px_rgba(6,182,212,0.7)] transition-shadow"
                    >
                        Start a Project
                        <span className="transition-transform group-hover:translate-x-0.5">
                            →
                        </span>
                    </a>
                    <a
                        href="#work"
                        className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium glass"
                    >
                        View Studio Work
                    </a>
                </motion.div>
                <div className="mt-8 font-mono text-[11px] text-[var(--color-comment)]">
                    ↳ hello@veltris.studio · response within 24h
                </div>
            </div>
        </section>
    );
}
