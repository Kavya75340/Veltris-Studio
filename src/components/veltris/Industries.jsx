import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    ShoppingBag,
    GraduationCap,
    Home,
    Dumbbell,
    Utensils,
    Compass,
    Mic,
    Film,
    Boxes,
    UserCheck,
    Megaphone,
    Layers,
    CheckCircle2,
    Terminal,
    ArrowUpRight,
    ChevronDown,
    Zap,
    CircleDollarSign,
} from "lucide-react";
import { SectionHeader } from "./Section";

const packagesData = [
    // --- CATEGORY 1: COMMERCIAL & SCALE ---
    {
        id: "pkg-01",
        category: "Commercial & Scale",
        name: "E-Commerce Package",
        tagline: "Conversion-first digital storefronts",
        icon: ShoppingBag,
        price: "Starting from ₹60k",
        badge: "High Volume Scale",
        accent: "rgb(6, 182, 212)", // Cyan
        gradient: "from-cyan-500/10 via-transparent to-transparent",
        services: [
            "E-Commerce Website",
            "Product Page Design",
            "Product Video Editing",
            "Product Showcase Reels",
            "Brand Identity Design",
            "Banner & Offer Creatives",
            "Social Media Content",
            "Landing Pages",
            "WhatsApp Integration",
            "Website Maintenance Support",
        ],
    },
    {
        id: "pkg-02",
        category: "Commercial & Scale",
        name: "EdTech Package",
        tagline: "Digital learning experiences & pipelines",
        icon: GraduationCap,
        price: "Starting from ₹50k",
        badge: "LMS & Funnels",
        accent: "rgb(168, 85, 247)", // Purple
        gradient: "from-purple-500/10 via-transparent to-transparent",
        services: [
            "Course Website",
            "Webinar Landing Pages",
            "Lecture Video Editing",
            "Educational Reels",
            "Notes/PDF Design",
            "Student Dashboard",
            "Batch Promotion Creatives",
            "Personal Branding",
            "Lead Generation Forms",
            "Content Support",
        ],
    },
    {
        id: "pkg-03",
        category: "Commercial & Scale",
        name: "Real Estate Package",
        tagline: "Visual high-converting sales systems",
        icon: Home,
        price: "Starting from ₹50k",
        badge: "Lead Machine",
        accent: "rgb(16, 185, 129)", // Emerald
        gradient: "from-emerald-500/10 via-transparent to-transparent",
        services: [
            "Property Listing Website",
            "Landing Pages",
            "Property Showcase Videos",
            "Drone Video Editing",
            "Promotional Reels",
            "WhatsApp Integration",
            "Brochure Design",
            "Lead Generation Forms",
            "Social Media Creatives",
            "Website Support",
        ],
    },
    {
        id: "pkg-04",
        category: "Commercial & Scale",
        name: "Gym & Fitness Package",
        tagline: "Brand scaling & retention engines",
        icon: Dumbbell,
        price: "Starting from ₹35k",
        badge: "Community Engine",
        accent: "rgb(239, 68, 68)", // Red
        gradient: "from-red-500/10 via-transparent to-transparent",
        services: [
            "Transformation Reels",
            "Promotional Video Editing",
            "Membership Website",
            "Trainer Portfolio Website",
            "Fitness Branding",
            "Client Testimonial Edits",
            "Social Media Creatives",
            "Diet Plan PDF Design",
            "Lead Capture Forms",
            "Monthly Content Support",
        ],
    },
    {
        id: "pkg-05",
        category: "Commercial & Scale",
        name: "Restaurant & Hotel Package",
        tagline: "Luxury hospitality storytelling",
        icon: Utensils,
        price: "Starting from ₹40k",
        badge: "Premium Experience",
        accent: "rgb(245, 158, 11)", // Amber
        gradient: "from-amber-500/10 via-transparent to-transparent",
        services: [
            "Restaurant/Hotel Website",
            "QR Menu Design",
            "Food & Property Reels",
            "Promotional Video Editing",
            "Brand Identity Design",
            "Menu/Brochure Design",
            "Instagram Content",
            "Booking/Inquiry Forms",
            "Google Maps Setup",
            "Seasonal Promotion Creatives",
        ],
    },

    // --- CATEGORY 2: CREATORS & MEDIA ---
    {
        id: "pkg-06",
        category: "Creators & Media",
        name: "Travel Creator Package",
        tagline: "Visual cinematic storytelling setups",
        icon: Compass,
        price: "Starting from ₹30k",
        badge: "Influencer Pipeline",
        accent: "rgb(14, 165, 233)", // Sky Blue
        gradient: "from-sky-500/10 via-transparent to-transparent",
        services: [
            "Travel Video Editing",
            "Cinematic Reels",
            "Drone Footage Editing",
            "Color Grading",
            "Travel Portfolio Website",
            "Thumbnail Design",
            "Brand Identity",
            "Promotional Shorts",
            "Destination Showcase Videos",
            "Sponsorship Presentation Design",
        ],
    },
    {
        id: "pkg-07",
        category: "Creators & Media",
        name: "Podcast Package",
        tagline: "Multi-channel production & distribution",
        icon: Mic,
        price: "Starting from ₹30k",
        badge: "Authority Builder",
        accent: "rgb(219, 39, 119)", // Pink
        gradient: "from-pink-500/10 via-transparent to-transparent",
        services: [
            "Multi-Camera Podcast Editing",
            "Audio Clean-up",
            "Shorts/Clips Creation",
            "Subtitle Editing",
            "Thumbnail Design",
            "Podcast Branding",
            "Social Media Clips",
            "Spotify/YouTube Upload Support",
            "Landing Page Website",
            "Promotional Reels",
        ],
    },
    {
        id: "pkg-08",
        category: "Creators & Media",
        name: "Documentary Package",
        tagline: "Premium long-form systems",
        icon: Film,
        price: "Starting from ₹45k",
        badge: "Cinematic Grade",
        accent: "rgb(99, 102, 241)", // Indigo
        gradient: "from-indigo-500/10 via-transparent to-transparent",
        services: [
            "Cinematic Video Editing",
            "Storytelling Structure",
            "Color Grading",
            "Sound Design",
            "Subtitle Design",
            "Trailer Editing",
            "Documentary Branding",
            "Social Media Promo Clips",
            "Thumbnail Design",
            "YouTube Publishing Support",
        ],
    },
    {
        id: "pkg-10",
        category: "Creators & Media",
        name: "Talking Head Creator Package",
        tagline: "Personal authority content engines",
        icon: UserCheck,
        price: "Starting from ₹25k",
        badge: "Organic Growth",
        accent: "rgb(34, 197, 94)", // Green
        gradient: "from-green-500/10 via-transparent to-transparent",
        services: [
            "Talking Head Editing",
            "Subtitle Editing",
            "Reels/Shorts Editing",
            "Thumbnail Design",
            "Intro/Outro Editing",
            "Podcast Clips",
            "Personal Branding",
            "Viral Hook Editing",
            "Social Media Creatives",
            "Content Repurposing",
        ],
    },

    // --- CATEGORY 3: IDENTITY & LAUNCH ---
    {
        id: "pkg-09",
        category: "Identity & Launch",
        name: "Product-Based Business",
        tagline: "Digital infrastructure for modern startups",
        icon: Boxes,
        price: "Starting from ₹70k",
        badge: "Launch Ready",
        accent: "rgb(20, 184, 166)", // Teal
        gradient: "from-teal-500/10 via-transparent to-transparent",
        services: [
            "Business Website",
            "Product Landing Pages",
            "Product Showcase Videos",
            "Brand Identity Design",
            "Explainer Videos",
            "Pitch Deck Design",
            "Promotional Creatives",
            "Product Launch Content",
            "Lead Generation Setup",
            "Website Maintenance Support",
        ],
    },
    {
        id: "pkg-11",
        category: "Identity & Launch",
        name: "Promotional Content Package",
        tagline: "Visual marketing weapons for campaigns",
        icon: Megaphone,
        price: "Starting from ₹30k",
        badge: "Campaign Focus",
        accent: "rgb(249, 115, 22)", // Orange
        gradient: "from-orange-500/10 via-transparent to-transparent",
        services: [
            "Promotional Video Editing",
            "Product Showcase Videos",
            "Social Media Creatives",
            "Campaign Posters",
            "Landing Page Design",
            "Brand Visuals",
            "Brochure Design",
            "Presentation Design",
            "Launch Content",
            "Marketing Creatives",
        ],
    },
    {
        id: "pkg-12",
        category: "Identity & Launch",
        name: "Branding Package",
        tagline: "Pure professional identity systems",
        icon: Layers,
        price: "Starting from ₹15k",
        badge: "Design Core",
        accent: "rgb(139, 92, 246)", // Violet
        gradient: "from-violet-500/10 via-transparent to-transparent",
        services: [
            "Logo Design",
            "Brand Identity Design",
            "Social Media Branding",
            "Business Presentation Design",
            "Brochure Design",
            "Banner & Poster Design",
            "Thumbnail Design",
            "Marketing Visuals",
            "Brand Style System",
            "Creator Branding",
        ],
    },
];

const categories = [
    "Commercial & Scale",
    "Creators & Media",
    "Identity & Launch",
];

export function Industries() {
    const [activeId, setActiveId] = useState("pkg-01");
    const activeData =
        packagesData.find((p) => p.id === activeId) || packagesData[0];

    return (
        <section className="relative py-28  text-white overflow-hidden">
            {/* Ambient Vector Background Nodes */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
            <div className="absolute top-1/3 -right-24 w-[500px] h-[500px] bg-[var(--cyan)]/5 blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -left-24 w-[500px] h-[500px] bg-purple-500/5 blur-[160px] rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <SectionHeader
                    eyebrow="PRODUCTION MATRICES"
                    title={
                        <>
                            Built for ambitious teams across{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 font-bold">
                                every vertical.
                            </span>
                        </>
                    }
                    subtitle="Strategic development and creative assets engineered for the way modern ecosystems scale."
                />

                {/* MAIN RUNTIME SPLIT WORKSPACE */}
                <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* LEFT PANEL: SYSTEM NAVIGATION BY SECTOR */}
                    <div className="lg:col-span-5 flex flex-col gap-8 justify-start">
                        {categories.map((cat) => (
                            <div key={cat} className="flex flex-col gap-2.5">
                                {/* Vertical Category Title Tag */}
                                <div className="flex items-center gap-2 px-1 mb-1">
                                    <div className="h-1 w-1 rounded-full bg-slate-600" />
                                    <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase font-semibold">
                                        {cat}
                                    </span>
                                </div>

                                {/* Package Trigger Stack */}
                                <div className="flex flex-col gap-2">
                                    {packagesData
                                        .filter((p) => p.category === cat)
                                        .map((p, idx) => {
                                            const Icon = p.icon;
                                            const isActive = activeId === p.id;

                                            return (
                                                <div
                                                    key={p.id}
                                                    className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                                                        isActive
                                                            ? "border-slate-800 bg-slate-900/40 shadow-xl"
                                                            : "border-slate-900/60 bg-slate-950/20 hover:border-slate-800/50"
                                                    }`}
                                                >
                                                    {/* Desktop Click Target */}
                                                    <button
                                                        onClick={() =>
                                                            setActiveId(p.id)
                                                        }
                                                        className="relative text-left w-full p-4 flex items-center justify-between gap-4 z-10"
                                                    >
                                                        {isActive && (
                                                            <motion.div
                                                                layoutId="activeSystemPill"
                                                                className={`absolute inset-0 bg-gradient-to-r ${p.gradient} opacity-70 pointer-events-none`}
                                                                transition={{
                                                                    type: "spring",
                                                                    stiffness: 380,
                                                                    damping: 32,
                                                                }}
                                                            />
                                                        )}

                                                        <div className="flex items-center gap-3.5 relative z-10">
                                                            <div
                                                                className="w-9 h-9 rounded-lg flex items-center justify-center border transition-colors duration-300"
                                                                style={{
                                                                    backgroundColor:
                                                                        isActive
                                                                            ? `${p.accent}12`
                                                                            : "rgba(15, 23, 42, 0.4)",
                                                                    borderColor:
                                                                        isActive
                                                                            ? `${p.accent}25`
                                                                            : "rgb(30, 41, 59)",
                                                                }}
                                                            >
                                                                <Icon
                                                                    className="w-4 h-4"
                                                                    style={{
                                                                        color: isActive
                                                                            ? p.accent
                                                                            : "rgb(148, 163, 184)",
                                                                    }}
                                                                />
                                                            </div>

                                                            <div>
                                                                <h3 className="text-sm font-semibold text-slate-200">
                                                                    {p.name}
                                                                </h3>
                                                                <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                                                                    {p.tagline}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        {/* Context Actions */}
                                                        <div className="relative z-10 flex items-center gap-2">
                                                            <span className="hidden md:inline font-mono text-[10px] text-slate-600 bg-slate-950/40 border border-slate-900 px-2 py-0.5 rounded">
                                                                {p.price.split(
                                                                    "from "
                                                                )[1] || p.price}
                                                            </span>
                                                            <ChevronDown
                                                                className={`w-4 h-4 text-slate-500 transition-transform duration-300 lg:hidden ${
                                                                    isActive
                                                                        ? "rotate-180"
                                                                        : ""
                                                                }`}
                                                            />
                                                            <ArrowUpRight
                                                                className={`w-3.5 h-3.5 text-slate-600 transition-all duration-300 hidden lg:block ${
                                                                    isActive
                                                                        ? "opacity-100 translate-x-0"
                                                                        : "opacity-0 -translate-x-1"
                                                                }`}
                                                                style={{
                                                                    color: isActive
                                                                        ? p.accent
                                                                        : "",
                                                                }}
                                                            />
                                                        </div>
                                                    </button>

                                                    {/* MOBILE INLINE DRAWER COMPONENT */}
                                                    <div className="lg:hidden">
                                                        <AnimatePresence
                                                            initial={false}
                                                        >
                                                            {isActive && (
                                                                <motion.div
                                                                    initial={{
                                                                        height: 0,
                                                                        opacity: 0,
                                                                    }}
                                                                    animate={{
                                                                        height: "auto",
                                                                        opacity: 1,
                                                                    }}
                                                                    exit={{
                                                                        height: 0,
                                                                        opacity: 0,
                                                                    }}
                                                                    transition={{
                                                                        duration: 0.24,
                                                                        ease: "easeInOut",
                                                                    }}
                                                                >
                                                                    <div className="px-4 pb-5 pt-1 border-t border-slate-900 bg-slate-950/70 flex flex-col gap-4">
                                                                        <div className="flex items-center justify-between gap-4 wrap border-b border-slate-900/60 pb-3">
                                                                            <span
                                                                                className="inline-block text-[9px] font-mono px-2 py-0.5 rounded-full border bg-slate-900/60 tracking-wider uppercase"
                                                                                style={{
                                                                                    color: p.accent,
                                                                                    borderColor: `${p.accent}20`,
                                                                                }}
                                                                            >
                                                                                {
                                                                                    p.badge
                                                                                }
                                                                            </span>
                                                                            <div className="flex items-center gap-1.5 text-sm font-bold text-slate-200">
                                                                                <CircleDollarSign
                                                                                    className="w-4 h-4 opacity-60"
                                                                                    style={{
                                                                                        color: p.accent,
                                                                                    }}
                                                                                />
                                                                                <span>
                                                                                    {
                                                                                        p.price
                                                                                    }
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex flex-col gap-1.5">
                                                                            <span className="font-mono text-[9px] text-slate-500 tracking-wider uppercase mb-1">
                                                                                Included
                                                                                Services
                                                                                (
                                                                                {
                                                                                    p
                                                                                        .services
                                                                                        .length
                                                                                }

                                                                                )
                                                                            </span>
                                                                            {p.services.map(
                                                                                (
                                                                                    srv
                                                                                ) => (
                                                                                    <div
                                                                                        key={
                                                                                            srv
                                                                                        }
                                                                                        className="flex items-center gap-2 py-0.5 text-slate-300 text-xs"
                                                                                    >
                                                                                        <CheckCircle2
                                                                                            className="h-3.5 w-3.5 shrink-0"
                                                                                            style={{
                                                                                                color: p.accent,
                                                                                            }}
                                                                                        />
                                                                                        <span>
                                                                                            {
                                                                                                srv
                                                                                            }
                                                                                        </span>
                                                                                    </div>
                                                                                )
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT CANVAS CONTAINER (Sticky Desktop Viewport) */}
                    <div className="hidden lg:block lg:col-span-7 h-[680px] sticky top-16">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeId}
                                initial={{ opacity: 0, scale: 0.99, y: 8 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.99, y: -8 }}
                                transition={{ duration: 0.22, ease: "easeOut" }}
                                className="w-full h-full bg-[#040814]/50 border border-slate-900 rounded-2xl p-8 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-slate-950/70"
                            >
                                {/* Radial Internal Light Spill */}
                                <div
                                    className="absolute -top-24 -right-24 w-52 h-52 rounded-full blur-[100px] pointer-events-none opacity-25 transition-colors duration-500"
                                    style={{
                                        backgroundColor: activeData.accent,
                                    }}
                                />

                                <div>
                                    {/* Main Specs Metadata Row */}
                                    <div className="flex items-start justify-between gap-6 pb-6 border-b border-slate-900/80">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-mono text-[10px] tracking-wider text-slate-500 uppercase">
                                                    {activeData.category}
                                                </span>
                                                <span className="text-slate-700">
                                                    /
                                                </span>
                                                <span className="font-mono text-[10px] tracking-wider text-slate-400 font-medium uppercase">
                                                    {activeData.id}
                                                </span>
                                            </div>
                                            <h2 className="text-2xl font-bold tracking-tight text-white mt-2">
                                                {activeData.name}
                                            </h2>
                                            <span
                                                className="inline-block font-mono text-[9px] px-2.5 py-0.5 mt-3 rounded-full border bg-slate-950/60 uppercase tracking-widest font-semibold"
                                                style={{
                                                    color: activeData.accent,
                                                    borderColor: `${activeData.accent}30`,
                                                }}
                                            >
                                                {activeData.badge}
                                            </span>
                                        </div>

                                        <div className="text-right bg-slate-950/40 border border-slate-900 rounded-xl p-4 min-w-[160px]">
                                            <span className="font-mono text-[9px] tracking-widest text-slate-500 block uppercase">
                                                Package Pricing
                                            </span>
                                            <span className="text-lg font-bold tracking-tight text-slate-100 block mt-1">
                                                {activeData.price}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Manifest Header */}
                                    <div className="flex items-center gap-2 mt-8 mb-4 font-mono text-[10px] text-slate-500 tracking-wider">
                                        <Terminal
                                            className="h-3.5 w-3.5"
                                            style={{ color: activeData.accent }}
                                        />
                                        <span>
                                            INCLUDED_DELIVERABLES_MANIFEST (
                                            {activeData.services.length} TOTAL
                                            NODES)
                                        </span>
                                    </div>

                                    {/* Scrollable Deliverables Node Matrix Grid */}
                                    <div className="grid grid-cols-2 gap-2 max-h-[350px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-900 scrollbar-track-transparent">
                                        {activeData.services.map(
                                            (service, index) => (
                                                <motion.div
                                                    key={service}
                                                    initial={{
                                                        opacity: 0,
                                                        x: 4,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        x: 0,
                                                    }}
                                                    transition={{
                                                        delay: index * 0.015,
                                                        ease: "easeOut",
                                                    }}
                                                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-slate-950/30 border border-slate-900/60 hover:border-slate-800/80 hover:bg-slate-950/70 transition-all duration-200 group/item"
                                                >
                                                    <CheckCircle2
                                                        className="h-4 w-4 shrink-0 opacity-40 group-hover/item:opacity-100 transition-opacity"
                                                        style={{
                                                            color: activeData.accent,
                                                        }}
                                                    />
                                                    <span className="text-xs text-slate-400 group-hover/item:text-slate-200 transition-colors font-medium">
                                                        {service}
                                                    </span>
                                                </motion.div>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* System Health Pipeline Footer */}
                                <div className="pt-4 border-t border-slate-900/80 flex items-center justify-between text-[10px] font-mono text-slate-500 bg-transparent">
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center gap-1">
                                            Commercial Ready
                                        </span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1">
                                            Full Lifecycle Support
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1 text-slate-400 font-semibold">
                                        <Zap className="h-3 w-3 text-amber-500 animate-pulse" />{" "}
                                        Live Deployment Matrix
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
