import { motion } from "framer-motion";
import SectionHeader from "./Section";

const items = [
    {
        quote: "Veltris delivered a launch system that felt like an in-house product team. The execution standard is rare — strategic, fast, cinematic.",
        name: "Adrian Maeve",
        role: "Head of Brand · Northbeam",
    },
    {
        quote: "Their creative and engineering pipelines actually feel like one team. We shipped a category-defining platform in a quarter.",
        name: "Yuki Tanaka",
        role: "Founder · Helix Analytics",
    },
    {
        quote: "Every deliverable — from the SaaS dashboard to the cinematic campaign — felt designed by people who care about the craft.",
        name: "Sofia Renteria",
        role: "CMO · Maison Solaire",
    },
];

export default function Testimonials() {
    return (
        <section className="relative py-28">
            <div className="mx-auto max-w-7xl px-6">
                <SectionHeader
                    eyebrow="CLIENT SIGNAL"
                    title={
                        <>
                            Trusted by teams shipping{" "}
                            <span className="accent-text">to the world.</span>
                        </>
                    }
                />
                <div className="grid lg:grid-cols-3 gap-5">
                    {items.map((t, i) => (
                        <motion.figure
                            key={t.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6, delay: i * 0.08 }}
                            className="relative rounded-2xl glass p-7"
                        >
                            <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-[var(--cyan)]/40 to-transparent" />
                            <svg
                                className="h-6 w-6 text-[var(--cyan)]"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M9 7H5a2 2 0 0 0-2 2v6h6V9H6c0-1.1.9-2 3-2V5c-2.2 0-4 .9-4 2zm10 0h-4a2 2 0 0 0-2 2v6h6V9h-3c0-1.1.9-2 3-2V5c-2.2 0-4 .9-4 2z" />
                            </svg>
                            <blockquote className="mt-4 text-[15px] leading-relaxed text-white/90">
                                "{t.quote}"
                            </blockquote>
                            <figcaption className="mt-6 pt-5 border-t border-white/5">
                                <div className="font-medium">{t.name}</div>
                                <div className="text-xs text-[var(--color-directory)] mt-0.5">
                                    {t.role}
                                </div>
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
