import { motion } from "motion/react";

const stats = [
    { label: "Projects Delivered", value: "180+", meta: "web · video · brand" },
    { label: "Industries Served", value: "24", meta: "global verticals" },
    {
        label: "Creative Systems Built",
        value: "62",
        meta: "design · automation",
    },
    { label: "Global Collaborations", value: "31", meta: "cross-border teams" },
    { label: "Technologies Used", value: "45+", meta: "modern stack" },
    { label: "Client Satisfaction", value: "98%", meta: "renewal score" },
];

export default function Stats() {
    return (
        <section className="relative py-24 md:py-28">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 rounded-2xl overflow-hidden hairline">
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="group relative bg-[var(--surface)] p-6 lg:p-7 hover:bg-[var(--surface-elevated)] transition-colors"
                        >
                            <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--color-comment)]">
                                {String(i + 1).padStart(2, "0")} · {s.label}
                            </div>
                            <div className="mt-3 text-4xl font-semibold tracking-tight">
                                {s.value}
                            </div>
                            <div className="mt-2 text-xs text-[var(--color-directory)]">
                                {s.meta}
                            </div>
                            <div className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent group-hover:w-full transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
