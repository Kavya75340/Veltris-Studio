import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Code2,
    Sparkles,
    TrendingUp,
    Film,
    ArrowUpRight,
    Zap,
    RotateCcw,
    CheckCircle2,
} from "lucide-react";

const divisions = [
    {
        code: "01 / WEB",
        title: "Web Development",
        tagline: "Digital Experience Division",
        icon: Code2,

        desc: "Custom websites and scalable web platforms designed for performance, user experience, and business growth.",

        price: "Starting from ₹20k",
        badge: "Custom Web Solutions",

        theme: {
            text: "text-cyan-400",
            border: "group-hover:border-cyan-500/30",
            glow: "bg-cyan-500/5",
            accentBg: "bg-cyan-950/20 border-cyan-500/10",
            bgGradient: "from-cyan-500/10 via-transparent to-transparent",
        },

        services: [
            "Landing Page Development",
            "Business Websites",
            "Portfolio Websites",
            "E-Commerce Stores",
            "Booking Systems",
            "Custom Web Applications",
            "Admin Dashboards",
            "Lead Generation Systems",
            "Payment Gateway Setup",
            "Website Optimization",
            "Cloud Deployment",
            "Responsive UI/UX Design",
        ],
    },

    {
        code: "02 / VID",
        title: "Video Editing",
        tagline: "Creative Content Division",
        icon: Film,

        desc: "Professional video editing systems built for creators, brands, marketing campaigns, and audience engagement.",

        price: "Starting from ₹8k/mo",
        badge: "Content Production",

        theme: {
            text: "text-amber-400",
            border: "group-hover:border-amber-500/30",
            glow: "bg-amber-500/5",
            accentBg: "bg-amber-950/20 border-amber-500/10",
            bgGradient: "from-amber-500/10 via-transparent to-transparent",
        },

        services: [
            "Short-Form Video Editing",
            "Long-Form Video Editing",
            "Podcast Video Editing",
            "Talking Head Editing",
            "Advertisement Creatives",
            "Cinematic Color Grading",
            "Subtitle & Captions",
            "Thumbnail Design",
            "Social Media Clips",
            "Multi-Platform Formatting",
            "Audio Enhancement",
            "Content Repurposing",
        ],
    },

    {
        code: "03 / GRT",
        title: "Growth Systems",
        tagline: "Marketing & Automation",
        icon: TrendingUp,

        desc: "Growth-focused digital systems designed to improve visibility, customer acquisition, and online scalability.",

        price: "Custom Pricing",
        badge: "Scale & Automate",

        theme: {
            text: "text-emerald-400",
            border: "group-hover:border-emerald-500/30",
            glow: "bg-emerald-500/5",
            accentBg: "bg-emerald-950/20 border-emerald-500/10",
            bgGradient: "from-emerald-500/10 via-transparent to-transparent",
        },

        services: [
            "Personal Brand Positioning",
            "SEO Optimization",
            "WhatsApp Funnels",
            "Social Media Automation",
            "Digital Presence Setup",
            "Lead Generation Systems",
            "Content Growth Strategy",
            "Workflow Automation",
            "AI Chatbot Setup",
            "CRM Integration",
            "Analytics Dashboards",
            "Marketing Strategy",
        ],
    },

    {
        code: "04 / BRD",
        title: "Brand Identity",
        tagline: "Visual Branding Division",
        icon: Sparkles,

        desc: "Modern visual branding systems crafted to create strong digital presence and consistent brand recognition.",

        price: "Starting from ₹10k",
        badge: "Brand Design Systems",

        theme: {
            text: "text-purple-400",
            border: "group-hover:border-purple-500/30",
            glow: "bg-purple-500/5",
            accentBg: "bg-purple-950/20 border-purple-500/10",
            bgGradient: "from-purple-500/10 via-transparent to-transparent",
        },

        services: [
            "Logo Design Systems",
            "Brand Guidelines",
            "Social Media Creatives",
            "Marketing Graphics",
            "Digital Brochures",
            "Pitch Deck Design",
            "Custom Thumbnails",
            "Visual Brand Assets",
            "Presentation Design",
            "Vector Illustrations",
            "Typography Systems",
            "Brand Iconography",
        ],
    },
];

export default function StudioStructure() {
    const [flippedCards, setFlippedCards] = useState({});

    const handleFlip = (index) => {
        setFlippedCards((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <section
            id="structure"
            className="relative py-20 md:py-28 text-white overflow-hidden bg-[#030712]"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_40%,transparent_100%)] opacity-10 pointer-events-none" />

            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-gradient-to-r from-violet-500/5 to-cyan-500/5 blur-[160px] rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <span className="font-mono text-xs tracking-[0.3em] text-slate-500 uppercase block mb-3">
                        Our Services
                    </span>

                    <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
                        Premium Digital Solutions{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-300 to-slate-500">
                            Built For Growth.
                        </span>
                    </h2>

                    <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        We combine modern web development, cinematic video
                        editing, branding, and growth systems into one
                        streamlined digital experience.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 [perspective:2500px]">
                    {divisions.map((d, index) => {
                        const Icon = d.icon;
                        const isFlipped = !!flippedCards[index];

                        return (
                            <div
                                key={d.code}
                                className="relative h-[500px] sm:h-[470px] w-full cursor-pointer group select-none"
                                onClick={() => handleFlip(index)}
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <motion.div
                                    style={{ transformStyle: "preserve-3d" }}
                                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                                    whileHover={{
                                        scale: isFlipped ? 1 : 1.015,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        ease: [0.23, 1, 0.32, 1],
                                    }}
                                    className="w-full h-full relative will-change-transform"
                                >
                                    {/* FRONT */}
                                    <div
                                        style={{
                                            backfaceVisibility: "hidden",
                                            WebkitBackfaceVisibility: "hidden",
                                        }}
                                        className={`absolute inset-0 w-full h-full rounded-2xl border border-slate-800/80 bg-slate-950/80 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between transition-all duration-300 ${d.theme.border} hover:bg-slate-900/30 shadow-[0_0_50px_-12px_rgba(0,0,0,0.7)]`}
                                    >
                                        {/* Glow */}
                                        <div
                                            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[60px] pointer-events-none rounded-2xl -z-10 ${d.theme.glow}`}
                                        />

                                        <div>
                                            {/* Top */}
                                            <div className="flex items-center justify-between gap-4 border-b border-slate-900/60 pb-5">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-slate-900 border border-slate-800">
                                                        <Icon
                                                            className={`w-5 h-5 ${d.theme.text}`}
                                                        />
                                                    </div>

                                                    <div>
                                                        <span className="block font-mono text-[10px] tracking-[0.2em] text-slate-500 font-semibold uppercase">
                                                            {d.code}
                                                        </span>

                                                        <h3 className="text-xl font-bold text-slate-100 tracking-tight mt-0.5">
                                                            {d.title}
                                                        </h3>
                                                    </div>
                                                </div>

                                                <span className="text-[10px] font-mono px-2.5 py-1 rounded-md border border-slate-800 bg-slate-900/60 text-slate-400 tracking-wider whitespace-nowrap">
                                                    {d.badge}
                                                </span>
                                            </div>

                                            {/* Description */}
                                            <p className="text-sm text-slate-400 leading-relaxed mt-6 max-w-[95%]">
                                                {d.desc}
                                            </p>
                                        </div>

                                        {/* Bottom */}
                                        <div className="space-y-5">
                                            <div
                                                className={`px-4 py-3 rounded-xl border ${d.theme.accentBg} flex items-center justify-between`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="relative flex h-2 w-2">
                                                        <span
                                                            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current ${d.theme.text}`}
                                                        />

                                                        <span
                                                            className={`relative inline-flex rounded-full h-2 w-2 bg-current ${d.theme.text}`}
                                                        />
                                                    </span>

                                                    <span className="text-xs font-mono tracking-wide text-slate-400">
                                                        View Service Details
                                                    </span>
                                                </div>

                                                <ArrowUpRight className="h-4 w-4 text-slate-500" />
                                            </div>

                                            <div className="pt-4 border-t border-slate-900/80 flex items-center justify-between gap-4">
                                                <div>
                                                    <span className="block font-mono text-[9px] tracking-widest text-slate-500 uppercase">
                                                        Pricing
                                                    </span>

                                                    <span className="text-base font-bold text-slate-200 mt-0.5 block tracking-tight">
                                                        {d.price}
                                                    </span>
                                                </div>

                                                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400">
                                                    <Zap className="w-4 h-4 fill-current" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* BACK */}
                                    <div
                                        style={{
                                            backfaceVisibility: "hidden",
                                            WebkitBackfaceVisibility: "hidden",
                                            transform: "rotateY(180deg)",
                                        }}
                                        className="absolute inset-0 w-full h-full rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8 flex flex-col justify-between shadow-2xl"
                                    >
                                        <div
                                            className={`absolute top-0 left-0 w-48 h-48 bg-gradient-to-br ${d.theme.bgGradient} blur-[60px] pointer-events-none opacity-20`}
                                        />

                                        <div className="h-full flex flex-col justify-between relative z-10 overflow-hidden">
                                            {/* Back Header */}
                                            <div className="flex items-center justify-between pb-4 border-b border-slate-900/60 shrink-0">
                                                <div className="min-w-0 pr-2">
                                                    <span className="font-mono text-[9px] tracking-widest text-slate-500 uppercase block truncate">
                                                        {d.tagline}
                                                    </span>

                                                    <h4 className="text-sm font-bold text-slate-200 tracking-tight flex items-center gap-1.5 mt-0.5 truncate">
                                                        <Zap
                                                            className={`h-3.5 w-3.5 fill-current shrink-0 ${d.theme.text}`}
                                                        />

                                                        <span className="truncate">
                                                            {d.title}
                                                        </span>
                                                    </h4>
                                                </div>

                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleFlip(index);
                                                    }}
                                                    className="text-[10px] font-mono px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-400 flex items-center gap-1.5 transition-all"
                                                >
                                                    <RotateCcw className="h-3 w-3" />
                                                    <span>Return</span>
                                                </button>
                                            </div>

                                            {/* Services */}
                                            <div className="flex-grow py-4 grid grid-cols-2 gap-2 overflow-y-auto pr-1 max-h-[320px]">
                                                {d.services.map((srv) => (
                                                    <div
                                                        key={srv}
                                                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-900/30 border border-slate-900/80 text-xs text-slate-300 hover:border-slate-800 hover:bg-slate-900/60 transition-all duration-200 min-w-0"
                                                    >
                                                        <CheckCircle2
                                                            className={`h-3.5 w-3.5 shrink-0 opacity-80 ${d.theme.text}`}
                                                        />

                                                        <span className="truncate tracking-wide font-medium">
                                                            {srv}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Footer */}
                                            <div className="pt-4 border-t border-slate-900 flex items-center justify-between text-[9px] font-mono text-slate-500 shrink-0">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />

                                                    <span>
                                                        SERVICE SYSTEM ACTIVE
                                                    </span>
                                                </div>

                                                <span
                                                    className={`${d.theme.text} font-bold tracking-wider`}
                                                >
                                                    {d.code.split(" / ")[1]} //
                                                    READY
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
