import React from "react";
import { useState } from "react";
import { easeInOut, motion } from "framer-motion";
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
        code: "01 / WSD",
        title: "Website Development",
        tagline: "Web Systems Division",
        icon: Code2,
        desc: "Modern business websites and scalable digital systems designed for growth, credibility, and customer conversion.",
        price: "Starting from ₹20k",
        badge: "Production Ready",
        theme: {
            text: "text-cyan-400",
            border: "group-hover:border-cyan-500/30",
            glow: "bg-cyan-500/10",
            accentBg: "bg-cyan-950/30 border-cyan-500/20",
            bgGradient: "from-cyan-500/10 via-transparent to-transparent",
        },
        services: [
            "Landing Pages",
            "Business Websites",
            "Portfolio Websites",
            "E-Commerce Solutions",
            "Booking Systems",
            "Custom Web Apps",
            "Admin Dashboards",
            "Lead Generation Forms",
            "Payment Gateways",
            "Performance Optimization",
            "Hosting & Cloud Setup",
            "Responsive UI/UX",
        ],
    },
    {
        code: "02 / CPD",
        title: "Content Production",
        tagline: "Creative Production Division",
        icon: Film,
        desc: "High-quality visual content designed for maximum engagement, algorithmic reach, and premium brand positioning.",
        price: "Starting from ₹8k/mo",
        badge: "Retainer Model",
        theme: {
            text: "text-amber-400",
            border: "group-hover:border-amber-500/30",
            glow: "bg-amber-500/10",
            accentBg: "bg-amber-950/30 border-amber-500/20",
            bgGradient: "from-amber-500/10 via-transparent to-transparent",
        },
        services: [
            "Reels & Shorts",
            "Long Form Videos",
            "Podcast Production",
            "Talking Head Vids",
            "Promotional Ads",
            "Cinematic Grading",
            "Dynamic Subtitles",
            "High-CTR Thumbnails",
            "Social Media Clips",
            "Multi-Platform Format",
            "Audio Post-Prod",
            "Content Repurposing",
        ],
    },
    {
        code: "03 / GSD",
        title: "Growth Systems",
        tagline: "Growth Systems Division",
        icon: TrendingUp,
        desc: "Structured digital engines and automated funnels engineered for creators and businesses focused on velocity-scaling.",
        price: "Custom Architecture",
        badge: "Scale & Automate",
        theme: {
            text: "text-emerald-400",
            border: "group-hover:border-emerald-500/30",
            glow: "bg-emerald-500/10",
            accentBg: "bg-emerald-950/30 border-emerald-500/20",
            bgGradient: "from-emerald-500/10 via-transparent to-transparent",
        },
        services: [
            "Creator Branding",
            "SEO Optimization",
            "WhatsApp Funnels",
            "Instagram Automation",
            "Digital Footprint",
            "Lead Capture Setup",
            "Content Frameworks",
            "Workflow Automation",
            "AI Chatbot Systems",
            "CRM Integrations",
            "Analytics Dashboards",
            "Growth Strategy",
        ],
    },
    {
        code: "04 / BXD",
        title: "Brand Design",
        tagline: "Brand Experience Division",
        icon: Sparkles,
        desc: "Premium conceptual visuals, digital assets, and guidelines built to establish instant authority and clarity.",
        price: "Starting from ₹10k",
        badge: "Premium Identity",
        theme: {
            text: "text-purple-400",
            border: "group-hover:border-purple-500/30",
            glow: "bg-purple-500/10",
            accentBg: "bg-purple-950/30 border-purple-500/20",
            bgGradient: "from-purple-500/10 via-transparent to-transparent",
        },
        services: [
            "Logo Architecture",
            "Brand Style Guides",
            "Social Creatives",
            "Posters & Graphics",
            "Digital Brochures",
            "Pitch Deck Design",
            "Custom Thumbnails",
            "Marketing Visuals",
            "Keynote Presentations",
            "Vector Assets",
            "Typography Systems",
            "Iconography Packs",
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
            className="relative py-16 md:py-24 lg:py-32 text-white overflow-hidden bg-[#030712]"
        >
            {/* Grid Overlay Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_40%,transparent_100%)] opacity-15 pointer-events-none" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-gradient-to-r from-violet-500/5 to-cyan-500/5 blur-[160px] rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
                {/* Custom Styled Header Area */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-24">
                    <span className="font-mono text-xs tracking-[0.25em] text-slate-500 uppercase block mb-3">
                        Production Protocols
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4 sm:mb-6">
                        Architecting High-Performance{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-500">
                            Digital Assets.
                        </span>
                    </h2>
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed px-2">
                        Explore our specialized capability matrices engineered
                        to build trust, streamline operations, and
                        velocity-scale your brand.
                    </p>
                </div>

                {/* --- 3D FLIP BENTO GRID --- */}
                {/* Fixed perspective and dynamic responsive columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 [perspective:2000px]">
                    {divisions.map((d, index) => {
                        const Icon = d.icon;
                        const isFlipped = !!flippedCards[index];

                        return (
                            <div
                                key={d.code}
                                className="relative min-h-[580px] sm:min-h-[500px] md:min-h-[520px] lg:min-h-[490px] w-full cursor-pointer group select-none"
                                onClick={() => handleFlip(index)}
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <motion.div
                                    style={{ transformStyle: "preserve-3d" }}
                                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: easeInOut,
                                    }}
                                    className="w-full h-full relative will-change-transform"
                                >
                                    {/* --- CARD FRONT SIDE --- */}
                                    <div
                                        style={{
                                            backfaceVisibility: "hidden",
                                            WebkitBackfaceVisibility: "hidden",
                                        }}
                                        className={`absolute inset-0 w-full h-full rounded-2xl border border-slate-800/60 bg-slate-950/70 p-5 sm:p-6 lg:p-8 backdrop-blur-md flex flex-col justify-between transition-all duration-300 ${d.theme.border} hover:bg-slate-900/20 shadow-2xl`}
                                    >
                                        {/* Glow Layer */}
                                        <div
                                            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[80px] pointer-events-none rounded-2xl -z-10 ${d.theme.glow}`}
                                        />

                                        <div className="flex flex-col flex-grow">
                                            <div className="flex items-start justify-between gap-2 border-b border-slate-900 pb-4 sm:pb-5">
                                                <div className="flex items-center gap-3 sm:gap-4">
                                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-slate-900/90 border border-slate-800 group-hover:border-slate-700/80 transition-colors shrink-0">
                                                        <Icon
                                                            className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-y-0.5 ${d.theme.text}`}
                                                        />
                                                    </div>
                                                    <div>
                                                        <span className="block font-mono text-[9px] sm:text-[10px] tracking-[0.15em] text-slate-500 font-semibold uppercase">
                                                            {d.code}
                                                        </span>
                                                        <h3 className="text-lg sm:text-xl font-bold text-slate-200 tracking-tight mt-0.5 group-hover:text-white">
                                                            {d.title}
                                                        </h3>
                                                    </div>
                                                </div>
                                                <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 sm:py-1 rounded border border-slate-800/80 bg-slate-900/40 text-slate-400 tracking-wider whitespace-nowrap shrink-0">
                                                    {d.badge}
                                                </span>
                                            </div>

                                            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-4 sm:mt-6 font-normal max-w-full lg:max-w-[92%]">
                                                {d.desc}
                                            </p>

                                            {/* Action Prompt Tab */}
                                            <div
                                                className={`mt-6 sm:mt-8 px-4 py-3 rounded-xl border ${d.theme.accentBg} flex items-center justify-between transition-all duration-300 group-hover:bg-slate-900/40 mt-auto`}
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
                                                    <span className="text-[11px] sm:text-xs font-mono tracking-wide text-slate-400 group-hover:text-slate-200 transition-colors">
                                                        View Full Capabilities
                                                        Matrix
                                                    </span>
                                                </div>
                                                <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                                            </div>
                                        </div>

                                        <div className="pt-4 sm:pt-6 border-t border-slate-900/80 flex items-center justify-between gap-4 mt-5">
                                            <div>
                                                <span className="block font-mono text-[9px] tracking-widest text-slate-500 uppercase">
                                                    Investment Model
                                                </span>
                                                <span className="text-sm sm:text-base font-bold text-slate-200 mt-0.5 block tracking-tight">
                                                    {d.price}
                                                </span>
                                            </div>
                                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-slate-100 group-hover:text-slate-950 transition-all duration-300 text-slate-400 shrink-0">
                                                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* --- CARD BACK SIDE (MATRIX DETAILS) --- */}
                                    <div
                                        style={{
                                            backfaceVisibility: "hidden",
                                            WebkitBackfaceVisibility: "hidden",
                                            transform: "rotateY(180deg)",
                                        }}
                                        className="absolute inset-0 w-full h-full rounded-2xl border border-slate-800 bg-slate-950 p-5 sm:p-6 lg:p-8 flex flex-col justify-between shadow-2xl"
                                    >
                                        <div
                                            className={`absolute top-0 left-0 w-48 h-48 bg-gradient-to-br ${d.theme.bgGradient} blur-[60px] pointer-events-none opacity-30`}
                                        />

                                        <div className="h-full flex flex-col justify-between relative z-10 overflow-hidden">
                                            {/* Top Utility Header */}
                                            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-900 shrink-0">
                                                <div className="min-w-0 pr-2">
                                                    <span className="font-mono text-[8px] sm:text-[9px] tracking-widest text-slate-500 uppercase block truncate">
                                                        {d.tagline}
                                                    </span>
                                                    <h4 className="text-xs sm:text-sm font-bold text-slate-200 tracking-tight flex items-center gap-1.5 mt-0.5 truncate">
                                                        <Zap
                                                            className={`h-3 w-3 sm:h-3.5 sm:w-3.5 fill-current shrink-0 ${d.theme.text}`}
                                                        />
                                                        <span className="truncate">
                                                            {d.title}
                                                        </span>
                                                    </h4>
                                                </div>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation(); // Stops double flipping
                                                        handleFlip(index);
                                                    }}
                                                    className="text-[9px] sm:text-[10px] font-mono px-2.5 py-1 sm:py-1.5 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-400 flex items-center gap-1.5 hover:text-white transition-all active:scale-95 shrink-0"
                                                >
                                                    <RotateCcw className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                                    <span>Return</span>
                                                </button>
                                            </div>

                                            {/* High-Performance Capabilities Layout (Responsive Grid) */}
                                            <div className="flex-grow my-auto py-3 sm:py-4 grid grid-cols-2 gap-1.5 sm:gap-2.5 overflow-y-auto max-h-[380px] pr-1 scrollbar-thin">
                                                {d.services.map((srv) => (
                                                    <div
                                                        key={srv}
                                                        className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3.5 py-1.5 sm:py-2.5 rounded-xl bg-slate-900/40 border border-slate-900/60 text-[11px] sm:text-[13px] text-slate-300 hover:border-slate-800 hover:bg-slate-900/80 transition-all duration-200 group/item min-w-0"
                                                    >
                                                        <CheckCircle2
                                                            className={`h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 opacity-70 group-hover/item:opacity-100 transition-opacity ${d.theme.text}`}
                                                        />
                                                        <span className="truncate tracking-wide font-medium">
                                                            {srv}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Footer Protocol Info */}
                                            <div className="pt-3 sm:pt-4 border-t border-slate-900 flex items-center justify-between text-[8px] sm:text-[10px] font-mono text-slate-500 shrink-0">
                                                <div className="flex items-center gap-1.5 sm:gap-2">
                                                    <div className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
                                                    <span>
                                                        SYSTEM PROTOCOL ACTIVE
                                                    </span>
                                                </div>
                                                <span
                                                    className={`${d.theme.text} font-bold tracking-wider`}
                                                >
                                                    {d.code.split(" / ")[1]} //
                                                    SECURE
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
