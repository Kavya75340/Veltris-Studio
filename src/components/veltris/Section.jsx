import { motion } from "motion/react";

export default function SectionHeader({ eyebrow, title, subtitle, id }) {
    return (
        <div id={id} className="mx-auto max-w-3xl text-center mb-16">
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full hairline px-3 py-1 text-[11px] font-mono text-[var(--color-telemetry)]"
            >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan)]" />
                {eyebrow}
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mt-5 text-balance text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.025em] gradient-text"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mt-5 text-[var(--color-telemetry)] text-lg leading-relaxed text-balance"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}
