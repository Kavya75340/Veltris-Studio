import { motion } from "motion/react";
import {
    Code,
    LayoutDashboard,
    Palette,
    Type,
    Video,
    Wand2,
    Camera,
    Bot,
    TrendingUp,
    Compass,
} from "lucide-react";
import { SectionHeader } from "./Section";

const services = [
    {
        icon: Code,
        name: "Web Development",
        desc: "Production-grade frontends and full-stack systems.",
    },
    {
        icon: LayoutDashboard,
        name: "SaaS Platforms",
        desc: "Multi-tenant products, dashboards and tooling.",
    },
    {
        icon: Palette,
        name: "UI/UX Design",
        desc: "Interface systems engineered for clarity and scale.",
    },
    {
        icon: Type,
        name: "Branding Systems",
        desc: "Identity, type and visual language frameworks.",
    },
    {
        icon: Video,
        name: "Video Editing",
        desc: "Cinematic editing for ads, films and reels.",
    },
    {
        icon: Wand2,
        name: "Motion Graphics",
        desc: "Kinetic typography, 2D/3D motion design.",
    },
    {
        icon: Camera,
        name: "Content Production",
        desc: "Podcast, long-form and short-form pipelines.",
    },
    {
        icon: Bot,
        name: "Automation Systems",
        desc: "Internal tools, AI workflows and integrations.",
    },
    {
        icon: TrendingUp,
        name: "Social Media Growth",
        desc: "Distribution systems for creators and brands.",
    },
    {
        icon: Compass,
        name: "Creative Strategy",
        desc: "Positioning, narrative and go-to-market.",
    },
];

export default function Services() {
    return (
        <section id="services" className="relative py-28">
            <div className="mx-auto max-w-7xl px-6">
                <SectionHeader
                    eyebrow="CAPABILITIES"
                    title={
                        <>
                            A full stack of{" "}
                            <span className="accent-text">
                                studio services.
                            </span>
                        </>
                    }
                    subtitle="From engineering to cinematic production — every capability wired into a single creative-tech execution layer."
                />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {services.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <motion.div
                                key={s.name}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{
                                    duration: 0.45,
                                    delay: (i % 5) * 0.05,
                                }}
                                className="group relative rounded-xl hairline bg-[var(--surface)]/70 p-5 overflow-hidden hover:border-[var(--cyan)]/40 transition-colors"
                            >
                                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[var(--cyan)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.03] hairline">
                                    <Icon className="h-4.5 w-4.5 text-[var(--cyan)]" />
                                </div>
                                <div className="mt-4 font-medium">{s.name}</div>
                                <div className="mt-1.5 text-xs text-[var(--color-directory)] leading-relaxed">
                                    {s.desc}
                                </div>
                                <div className="mt-5 font-mono text-[10px] text-[var(--color-comment)]">
                                    /service/{String(i + 1).padStart(2, "0")}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
