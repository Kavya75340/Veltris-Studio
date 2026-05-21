import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./Section";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Helix — SaaS Analytics",
        cat: "Web Systems",
        meta: "Dashboard System",
        tag: "Concept Case Study",
        gradient: "from-[#06B6D4] via-[#3B82F6] to-[#4F46E5]",
    },
    {
        title: "Northbeam AI Console",
        cat: "Web Systems",
        meta: "AI Automation Platform",
        tag: "Studio Exploration",
        gradient: "from-[#0EA5E9] via-[#6366F1] to-[#1E1B4B]",
    },
    {
        title: "Maison Solaire",
        cat: "Web Systems",
        meta: "Luxury Hotel Site",
        tag: "Selected Project",
        gradient: "from-[#22D3EE] via-[#3B82F6] to-[#0D1321]",
    },
    {
        title: "Vault — Fintech UI",
        cat: "Web Systems",
        meta: "Fintech Interface",
        tag: "Concept Case Study",
        gradient: "from-[#3B82F6] via-[#4F46E5] to-[#0D1321]",
    },
    {
        title: "Signal Podcast Cut",
        cat: "Creative Production",
        meta: "Editing System",
        tag: "Studio Exploration",
        gradient: "from-[#06B6D4] via-[#0D1321] to-[#4F46E5]",
    },
    {
        title: "Forge Cinematic Promo",
        cat: "Creative Production",
        meta: "Fitness Brand Film",
        tag: "Selected Project",
        gradient: "from-[#F97316] via-[#3B82F6] to-[#0D1321]",
    },
    {
        title: "Lumière Luxury Ad",
        cat: "Creative Production",
        meta: "Premium Edit",
        tag: "Studio Exploration",
        gradient: "from-[#FACC15] via-[#06B6D4] to-[#1E1B4B]",
    },
    {
        title: "Field Documentary",
        cat: "Creative Production",
        meta: "YouTube Long-form",
        tag: "Selected Project",
        gradient: "from-[#10B981] via-[#0D1321] to-[#3B82F6]",
    },
    {
        title: "Atlas Design System",
        cat: "Brand Experience",
        meta: "UI System",
        tag: "Studio Exploration",
        gradient: "from-[#3B82F6] via-[#06B6D4] to-white",
    },
    {
        title: "Orbit Identity",
        cat: "Brand Experience",
        meta: "Brand Identity",
        tag: "Concept Case Study",
        gradient: "from-[#4F46E5] via-[#0D1321] to-[#06B6D4]",
    },
    {
        title: "Pulse Mobile UX",
        cat: "Brand Experience",
        meta: "App Experience",
        tag: "Selected Project",
        gradient: "from-[#22D3EE] via-[#4F46E5] to-[#0D1321]",
    },
    {
        title: "Numero Type Set",
        cat: "Brand Experience",
        meta: "Typography System",
        tag: "Studio Exploration",
        gradient: "from-white via-[#06B6D4] to-[#0D1321]",
    },
];

const categories = [
    "All Work",
    "Web Systems",
    "Creative Production",
    "Brand Experience",
];

export default function Work() {
    const [active, setActive] = useState("All Work");

    const filtered =
        active === "All Work"
            ? projects
            : projects.filter((p) => p.cat === active);

    return (
        <section id="work" className="relative py-28">
            <div className="mx-auto max-w-7xl px-6">
                <SectionHeader
                    eyebrow="SELECTED PROJECTS"
                    title={
                        <>
                            Studio explorations &{" "}
                            <span className="accent-text">
                                concept case studies.
                            </span>
                        </>
                    }
                    subtitle="A cinematic look at how the studio designs, builds and produces — across systems, screens and stories."
                />

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                    {categories.map((c) => (
                        <button
                            key={c}
                            onClick={() => setActive(c)}
                            className={`rounded-full px-4 py-2 text-sm transition-all ${
                                active === c
                                    ? "bg-white text-background"
                                    : "hairline text-telemetry hover:text-white hover:border-white/20"
                            }`}
                        >
                            {c}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((p, i) => (
                            <motion.article
                                key={p.title}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{
                                    duration: 0.45,
                                    delay: (i % 6) * 0.04,
                                }}
                                className="group relative rounded-2xl overflow-hidden hairline bg-surface"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-90 transition-transform duration-700 group-hover:scale-105`}
                                    />
                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.18),transparent_55%)]" />
                                    <div className="absolute inset-0 bg-grid opacity-20 mix-blend-overlay" />

                                    {/* Mockup Browser Window Chrome */}
                                    <div className="absolute inset-6 rounded-xl bg-surface/90 backdrop-blur-xl hairline shadow-2xl overflow-hidden">
                                        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
                                            <span className="h-2 w-2 rounded-full bg-white/15" />
                                            <span className="h-2 w-2 rounded-full bg-white/15" />
                                            <span className="h-2 w-2 rounded-full bg-cyan/60" />
                                            <span className="ml-2 font-mono text-[9px] text-comment">
                                                {p.cat
                                                    .toLowerCase()
                                                    .replace(" ", "-")}
                                            </span>
                                        </div>
                                        <div className="p-3 space-y-2">
                                            <div className="h-2 w-1/3 rounded bg-white/15" />
                                            <div className="grid grid-cols-3 gap-2">
                                                <div className="h-10 rounded bg-gradient-to-br from-cyan/40 to-transparent" />
                                                <div className="h-10 rounded bg-white/5" />
                                                <div className="h-10 rounded bg-white/5" />
                                            </div>
                                            <div className="h-1.5 w-full rounded bg-white/5" />
                                            <div className="h-1.5 w-2/3 rounded bg-white/5" />
                                        </div>
                                    </div>

                                    {/* Tag Overlay */}
                                    <div className="absolute top-4 left-4 rounded-full glass px-2.5 py-1 font-mono text-[10px] text-telemetry">
                                        {p.tag}
                                    </div>
                                </div>

                                {/* Card Footer Info */}
                                <div className="p-5 flex items-center justify-between">
                                    <div>
                                        <div className="font-medium tracking-tight">
                                            {p.title}
                                        </div>
                                        <div className="text-xs text-directory mt-1">
                                            {p.meta} · {p.cat}
                                        </div>
                                    </div>
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full hairline group-hover:bg-cyan group-hover:text-background transition">
                                        <ArrowUpRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
