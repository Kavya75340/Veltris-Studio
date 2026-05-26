// import { useState } from "react";
// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//     ShoppingBag,
//     GraduationCap,
//     Home,
//     Dumbbell,
//     Utensils,
//     BrainCircuit,
//     Sparkles,
//     TrendingUp,
//     Bot,
//     Mic,
//     Film,
//     Boxes,
//     UserCheck,
//     Megaphone,
//     Layers,
//     CheckCircle2,
//     Terminal,
//     ArrowUpRight,
//     ChevronDown,
//     Zap,
//     CircleDollarSign,
//     Cpu,
//     Globe,
// } from "lucide-react";
// import SectionHeader from "./Section";

// // const packagesData = [
// //     // --- CATEGORY 1: COMMERCIAL & SCALE ---
// //     {
// //         id: "pkg-01",
// //         category: "Commercial & Scale",
// //         name: "E-Commerce Package",
// //         tagline: "Conversion-first digital storefronts",
// //         icon: ShoppingBag,
// //         price: "Starting from ₹60k",
// //         badge: "High Volume Scale",
// //         accent: "rgb(6, 182, 212)", // Cyan
// //         gradient: "from-cyan-500/10 via-transparent to-transparent",
// //         services: [
// //             "E-Commerce Website",
// //             "Product Page Design",
// //             "Product Video Editing",
// //             "Product Showcase Reels",
// //             "Brand Identity Design",
// //             "Banner & Offer Creatives",
// //             "Social Media Content",
// //             "Landing Pages",
// //             "WhatsApp Integration",
// //             "Website Maintenance Support",
// //         ],
// //     },
// //     {
// //         id: "pkg-02",
// //         category: "Commercial & Scale",
// //         name: "EdTech Package",
// //         tagline: "Digital learning experiences & pipelines",
// //         icon: GraduationCap,
// //         price: "Starting from ₹50k",
// //         badge: "LMS & Funnels",
// //         accent: "rgb(168, 85, 247)", // Purple
// //         gradient: "from-purple-500/10 via-transparent to-transparent",
// //         services: [
// //             "Course Website",
// //             "Webinar Landing Pages",
// //             "Lecture Video Editing",
// //             "Educational Reels",
// //             "Notes/PDF Design",
// //             "Student Dashboard",
// //             "Batch Promotion Creatives",
// //             "Personal Branding",
// //             "Lead Generation Forms",
// //             "Content Support",
// //         ],
// //     },
// //     {
// //         id: "pkg-03",
// //         category: "Commercial & Scale",
// //         name: "Real Estate Package",
// //         tagline: "Visual high-converting sales systems",
// //         icon: Home,
// //         price: "Starting from ₹50k",
// //         badge: "Lead Machine",
// //         accent: "rgb(16, 185, 129)", // Emerald
// //         gradient: "from-emerald-500/10 via-transparent to-transparent",
// //         services: [
// //             "Property Listing Website",
// //             "Landing Pages",
// //             "Property Showcase Videos",
// //             "Drone Video Editing",
// //             "Promotional Reels",
// //             "WhatsApp Integration",
// //             "Brochure Design",
// //             "Lead Generation Forms",
// //             "Social Media Creatives",
// //             "Website Support",
// //         ],
// //     },
// //     // {
// //     //     id: "pkg-04",
// //     //     category: "Commercial & Scale",
// //     //     name: "Gym & Fitness Package",
// //     //     tagline: "Brand scaling & retention engines",
// //     //     icon: Dumbbell,
// //     //     price: "Starting from ₹35k",
// //     //     badge: "Community Engine",
// //     //     accent: "rgb(239, 68, 68)", // Red
// //     //     gradient: "from-red-500/10 via-transparent to-transparent",
// //     //     services: [
// //     //         "Transformation Reels",
// //     //         "Promotional Video Editing",
// //     //         "Membership Website",
// //     //         "Trainer Portfolio Website",
// //     //         "Fitness Branding",
// //     //         "Client Testimonial Edits",
// //     //         "Social Media Creatives",
// //     //         "Diet Plan PDF Design",
// //     //         "Lead Capture Forms",
// //     //         "Monthly Content Support",
// //     //     ],
// //     // },
// //     // {
// //     //     id: "pkg-05",
// //     //     category: "Commercial & Scale",
// //     //     name: "Restaurant & Hotel Package",
// //     //     tagline: "Luxury hospitality storytelling",
// //     //     icon: Utensils,
// //     //     price: "Starting from ₹40k",
// //     //     badge: "Premium Experience",
// //     //     accent: "rgb(245, 158, 11)", // Amber
// //     //     gradient: "from-amber-500/10 via-transparent to-transparent",
// //     //     services: [
// //     //         "Restaurant/Hotel Website",
// //     //         "QR Menu Design",
// //     //         "Food & Property Reels",
// //     //         "Promotional Video Editing",
// //     //         "Brand Identity Design",
// //     //         "Menu/Brochure Design",
// //     //         "Instagram Content",
// //     //         "Booking/Inquiry Forms",
// //     //         "Google Maps Setup",
// //     //         "Seasonal Promotion Creatives",
// //     //     ],
// //     // },

// //     // --- CATEGORY 2: CREATORS & MEDIA ---
// //     // {
// //     //     id: "pkg-06",
// //     //     category: "Creators & Media",
// //     //     name: "Travel Creator Package",
// //     //     tagline: "Visual cinematic storytelling setups",
// //     //     icon: Compass,
// //     //     price: "Starting from ₹30k",
// //     //     badge: "Influencer Pipeline",
// //     //     accent: "rgb(14, 165, 233)", // Sky Blue
// //     //     gradient: "from-sky-500/10 via-transparent to-transparent",
// //     //     services: [
// //     //         "Travel Video Editing",
// //     //         "Cinematic Reels",
// //     //         "Drone Footage Editing",
// //     //         "Color Grading",
// //     //         "Travel Portfolio Website",
// //     //         "Thumbnail Design",
// //     //         "Brand Identity",
// //     //         "Promotional Shorts",
// //     //         "Destination Showcase Videos",
// //     //         "Sponsorship Presentation Design",
// //     //     ],
// //     // },
// //     {
// //         id: "pkg-07",
// //         category: "Creators & Media",
// //         name: "Podcast Package",
// //         tagline: "Multi-channel production & distribution",
// //         icon: Mic,
// //         price: "Starting from ₹30k",
// //         badge: "Authority Builder",
// //         accent: "rgb(219, 39, 119)", // Pink
// //         gradient: "from-pink-500/10 via-transparent to-transparent",
// //         services: [
// //             "Multi-Camera Podcast Editing",
// //             "Audio Clean-up",
// //             "Shorts/Clips Creation",
// //             "Subtitle Editing",
// //             "Thumbnail Design",
// //             "Podcast Branding",
// //             "Social Media Clips",
// //             "Spotify/YouTube Upload Support",
// //             "Landing Page Website",
// //             "Promotional Reels",
// //         ],
// //     },
// //     // {
// //     //     id: "pkg-08",
// //     //     category: "Creators & Media",
// //     //     name: "Documentary Package",
// //     //     tagline: "Premium long-form systems",
// //     //     icon: Film,
// //     //     price: "Starting from ₹45k",
// //     //     badge: "Cinematic Grade",
// //     //     accent: "rgb(99, 102, 241)", // Indigo
// //     //     gradient: "from-indigo-500/10 via-transparent to-transparent",
// //     //     services: [
// //     //         "Cinematic Video Editing",
// //     //         "Storytelling Structure",
// //     //         "Color Grading",
// //     //         "Sound Design",
// //     //         "Subtitle Design",
// //     //         "Trailer Editing",
// //     //         "Documentary Branding",
// //     //         "Social Media Promo Clips",
// //     //         "Thumbnail Design",
// //     //         "YouTube Publishing Support",
// //     //     ],
// //     // },
// //     {
// //         id: "pkg-10",
// //         category: "Creators & Media",
// //         name: "Talking Head Creator Package",
// //         tagline: "Personal authority content engines",
// //         icon: UserCheck,
// //         price: "Starting from ₹25k",
// //         badge: "Organic Growth",
// //         accent: "rgb(34, 197, 94)", // Green
// //         gradient: "from-green-500/10 via-transparent to-transparent",
// //         services: [
// //             "Talking Head Editing",
// //             "Subtitle Editing",
// //             "Reels/Shorts Editing",
// //             "Thumbnail Design",
// //             "Intro/Outro Editing",
// //             "Podcast Clips",
// //             "Personal Branding",
// //             "Viral Hook Editing",
// //             "Social Media Creatives",
// //             "Content Repurposing",
// //         ],
// //     },

// //     // --- CATEGORY 3: IDENTITY & LAUNCH ---
// //     // {
// //     //     id: "pkg-09",
// //     //     category: "Identity & Launch",
// //     //     name: "Product-Based Business",
// //     //     tagline: "Digital infrastructure for modern startups",
// //     //     icon: Boxes,
// //     //     price: "Starting from ₹70k",
// //     //     badge: "Launch Ready",
// //     //     accent: "rgb(20, 184, 166)", // Teal
// //     //     gradient: "from-teal-500/10 via-transparent to-transparent",
// //     //     services: [
// //     //         "Business Website",
// //     //         "Product Landing Pages",
// //     //         "Product Showcase Videos",
// //     //         "Brand Identity Design",
// //     //         "Explainer Videos",
// //     //         "Pitch Deck Design",
// //     //         "Promotional Creatives",
// //     //         "Product Launch Content",
// //     //         "Lead Generation Setup",
// //     //         "Website Maintenance Support",
// //     //     ],
// //     // },
// //     {
// //         id: "pkg-11",
// //         category: "Identity & Launch",
// //         name: "Promotional Content Package",
// //         tagline: "Visual marketing weapons for campaigns",
// //         icon: Megaphone,
// //         price: "Starting from ₹30k",
// //         badge: "Campaign Focus",
// //         accent: "rgb(249, 115, 22)", // Orange
// //         gradient: "from-orange-500/10 via-transparent to-transparent",
// //         services: [
// //             "Promotional Video Editing",
// //             "Product Showcase Videos",
// //             "Social Media Creatives",
// //             "Campaign Posters",
// //             "Landing Page Design",
// //             "Brand Visuals",
// //             "Brochure Design",
// //             "Presentation Design",
// //             "Launch Content",
// //             "Marketing Creatives",
// //         ],
// //     },
// //     {
// //         id: "pkg-12",
// //         category: "Identity & Launch",
// //         name: "Branding Package",
// //         tagline: "Pure professional identity systems",
// //         icon: Layers,
// //         price: "Starting from ₹15k",
// //         badge: "Design Core",
// //         accent: "rgb(139, 92, 246)", // Violet
// //         gradient: "from-violet-500/10 via-transparent to-transparent",
// //         services: [
// //             "Logo Design",
// //             "Brand Identity Design",
// //             "Social Media Branding",
// //             "Business Presentation Design",
// //             "Brochure Design",
// //             "Banner & Poster Design",
// //             "Thumbnail Design",
// //             "Marketing Visuals",
// //             "Brand Style System",
// //             "Creator Branding",
// //         ],
// //     },
// // ];
// // --- Dynamic Data Array according to your inputs ---
// const categories = [
//     "Commercial & Scale",
//     "Creators & Media",
//     "Identity & Launch",
// ];

// const packagesData = [
//     // --- CATEGORY 1: COMMERCIAL & SCALE ---
//     {
//         id: "pkg-01",
//         category: "Commercial & Scale",
//         name: "Enterprise E-Commerce Engine",
//         tagline: "Conversion-first autonomous digital storefronts.",
//         icon: ShoppingBag,
//         price: "Starting from ₹60k",
//         badge: "High-Volume Scale",
//         accent: "rgb(6, 182, 212)",
//         gradient: "from-cyan-500/10 via-transparent to-transparent",
//         services: [
//             "E-Commerce Website",
//             "Product Page Design",
//             "Product Video Editing",
//             "Product Showcase Reels",
//             "Brand Identity Design",
//             "Banner & Offer Creatives",
//             "Social Media Content",
//             "Landing Pages",
//             "WhatsApp Integration",
//             "Website Maintenance Support",
//         ],
//         smartFeatures: [
//             "AI Product Recommendations",
//             "Intent-Based Checkout",
//             "Cart Recovery Automation",
//             "Conversion Intelligence Dashboard",
//             "Smart Customer Segmentation",
//             "Behavioral Tracking System",
//         ],
//         outcomes: [
//             "Higher Average Order Value",
//             "Reduced Cart Abandonment",
//             "Maximum Visitor-to-Buyer Conversion",
//             "Complete Revenue Visibility",
//         ],
//     },
//     {
//         id: "pkg-02",
//         category: "Commercial & Scale",
//         name: "EdTech Ecosystem Package",
//         tagline:
//             "Next-gen digital learning experiences & enrollment pipelines.",
//         icon: GraduationCap,
//         price: "Starting from ₹50k",
//         badge: "LMS & Automation Funnels",
//         accent: "rgb(168, 85, 247)",
//         gradient: "from-purple-500/10 via-transparent to-transparent",
//         services: [
//             "Course Website",
//             "Webinar Landing Pages",
//             "Lecture Video Editing",
//             "Educational Reels",
//             "Notes/PDF Design",
//             "Student Dashboard",
//             "Batch Promotion Creatives",
//             "Personal Branding",
//             "Lead Generation Forms",
//             "Content Support",
//         ],
//         smartFeatures: [
//             "Personalized Learning Paths",
//             "Skill Gap Analysis",
//             "Learning Behavior Analytics",
//             "Smart Roadmap Generator",
//             "Automated Student Analytics",
//             "AI Progress Prediction",
//         ],
//         outcomes: [
//             "Increased Course Enrolments",
//             "Higher Student Retention",
//             "Automated Student Onboarding",
//             "Optimized Funnel Performance",
//         ],
//     },
//     {
//         id: "pkg-03",
//         category: "Commercial & Scale",
//         name: "Real Estate Acquisition System",
//         tagline:
//             "High-visual, conversion-optimized property sales infrastructure.",
//         icon: Home,
//         price: "Starting from ₹50k",
//         badge: "High-Intent Lead Machine",
//         accent: "rgb(16, 185, 129)",
//         gradient: "from-emerald-500/10 via-transparent to-transparent",
//         services: [
//             "Property Listing Website",
//             "Landing Pages",
//             "Property Showcase Videos",
//             "Drone Video Editing",
//             "Promotional Reels",
//             "WhatsApp Integration",
//             "Brochure Design",
//             "Lead Generation Forms",
//             "Social Media Creatives",
//             "Website Support",
//         ],
//         smartFeatures: [
//             "AI Lead Qualification",
//             "Buyer Intent Tracking",
//             "Smart Property Recommendations",
//             "AI WhatsApp Sales Assistant",
//             "Automated Follow-Ups",
//             "High-Intent Lead Detection",
//         ],
//         outcomes: [
//             "Accelerated Booking Cycle",
//             "Higher Quality Site Visits",
//             "Instant Lead Response Time",
//             "Predictable Pipeline Velocity",
//         ],
//     },

//     // --- CATEGORY 2: CREATORS & MEDIA ---
//     {
//         id: "pkg-04",
//         category: "Creators & Media",
//         name: "Podcast Authority Network",
//         tagline:
//             "Multi-channel production, distribution, and authority engine.",
//         icon: Mic,
//         price: "Starting from ₹30k",
//         badge: "Authority Builder",
//         accent: "rgb(219, 39, 119)",
//         gradient: "from-pink-500/10 via-transparent to-transparent",
//         services: [
//             "Multi-Camera Podcast Editing",
//             "Audio Clean-up",
//             "Shorts/Clips Creation",
//             "Subtitle Editing",
//             "Thumbnail Design",
//             "Podcast Branding",
//             "Social Media Clips",
//             "Spotify/YouTube Upload Support",
//             "Landing Page Website",
//             "Promotional Reels",
//         ],
//         smartFeatures: [
//             "Predictive Content Analytics",
//             "Behavioral Intelligence Engine",
//             "Smart Notifications",
//             "Engagement Tracking Dashboard",
//             "Automated Content Repurposing Workflow",
//         ],
//         outcomes: [
//             "Expanded Multi-Channel Reach",
//             "Surged Listener Engagement",
//             "Streamlined Content Workflows",
//             "Premium Brand Position",
//         ],
//     },
//     {
//         id: "pkg-05",
//         category: "Creators & Media",
//         name: "Personal Brand Engine",
//         tagline:
//             "High-yield talking head content engines for industry leaders.",
//         icon: UserCheck,
//         price: "Starting from ₹25k",
//         badge: "Organic Scale Engine",
//         accent: "rgb(34, 197, 94)",
//         gradient: "from-green-500/10 via-transparent to-transparent",
//         services: [
//             "Talking Head Editing",
//             "Subtitle Editing",
//             "Reels/Shorts Editing",
//             "Thumbnail Design",
//             "Intro/Outro Editing",
//             "Podcast Clips",
//             "Personal Branding",
//             "Viral Hook Editing",
//             "Social Media Creatives",
//             "Content Repurposing",
//         ],
//         smartFeatures: [
//             "Viral Hook Optimization",
//             "Audience Retention Tracking",
//             "Cross-Platform Performance Analytics",
//             "Automated Follow-Up Funnels",
//             "Intelligent Lead Capture",
//         ],
//         outcomes: [
//             "Accelerated Follower Growth",
//             "Dominant Market Authority",
//             "Inbound Inquiries Automation",
//             "Consistent Content Output",
//         ],
//     },

//     // --- CATEGORY 3: IDENTITY & LAUNCH ---
//     {
//         id: "pkg-06",
//         category: "Identity & Launch",
//         name: "Brand & Campaign Launch System",
//         tagline: "Complete elite visual identity setups and marketing weapons.",
//         icon: Layers,
//         price: "Starting from ₹45k",
//         badge: "Market Entry Core",
//         accent: "rgb(139, 92, 246)",
//         gradient: "from-violet-500/10 via-transparent to-transparent",
//         services: [
//             "Logo Design",
//             "Brand Identity Design",
//             "Social Media Branding",
//             "Business Presentation Design",
//             "Brochure Design",
//             "Banner & Poster Design",
//             "Thumbnail Design",
//             "Marketing Visuals",
//             "Brand Style System",
//             "Promotional Video Editing",
//         ],
//         smartFeatures: [
//             "Conversion Optimization Analytics",
//             "Real-Time Campaign Tracking",
//             "Advanced Analytics Dashboard",
//             "Intelligent CRM Integration",
//             "Workflow Automation Systems",
//         ],
//         outcomes: [
//             "Flawless Market Launch",
//             "Unified Omni-Channel Presence",
//             "Instant Institutional Trust",
//             "High Conversion Readiness",
//         ],
//     },
// ];
// export default function Industries() {
//     const [activeId, setActiveId] = useState("pkg-01");

//     const activeData =
//         packagesData.find((p) => p.id === activeId) || packagesData[0];

//     return (
//         <section className="relative overflow-hidden py-24 text-white bg-[#03050c]">
//             {/* Glow Backdrops */}
//             <div
//                 className="absolute inset-0 pointer-events-none opacity-40"
//                 style={{
//                     backgroundImage: `
//               radial-gradient(circle at 10% 20%, rgba(6, 182, 212, 0.05), transparent 40%),
//               radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.05), transparent 40%)
//             `,
//                 }}
//             />
//             <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

//             <div className="relative z-10 mx-auto max-w-7xl px-6">
//                 {/* Header Section */}
//                 <div className="max-w-3xl">
//                     <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-md">
//                         <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
//                         <span className="text-[10px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
//                             Growth Ecosystems
//                         </span>
//                     </div>

//                     <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
//                         Strategic Systems
//                         <span className="block bg-gradient-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-transparent">
//                             Built for Absolute Scale.
//                         </span>
//                     </h2>
//                     <p className="mt-4 text-base text-slate-400 max-w-2xl">
//                         A specialized stack of production assets, custom
//                         high-performance code, and automation pipelines designed
//                         to dominate your market category.
//                     </p>
//                 </div>

//                 {/* Dynamic Workspace Grid */}
//                 <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
//                     {/* LEFT PANEL: Package Tabs Selector */}
//                     <div className="lg:col-span-5 flex flex-col gap-6 max-h-[850px] overflow-y-auto pr-2 custom-scrollbar">
//                         {categories.map((cat) => (
//                             <div key={cat} className="space-y-3">
//                                 <div className="flex items-center gap-3">
//                                     <span className="text-[10px] tracking-[0.25em] uppercase text-slate-500 font-bold whitespace-nowrap">
//                                         {cat}
//                                     </span>
//                                     <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
//                                 </div>

//                                 <div className="space-y-2.5">
//                                     {packagesData
//                                         .filter((p) => p.category === cat)
//                                         .map((p) => {
//                                             const Icon = p.icon;
//                                             const isActive = activeId === p.id;

//                                             return (
//                                                 <button
//                                                     key={p.id}
//                                                     onClick={() =>
//                                                         setActiveId(p.id)
//                                                     }
//                                                     className={`group relative w-full overflow-hidden rounded-xl border p-4 text-left transition-all duration-300 ${
//                                                         isActive
//                                                             ? "border-white/10 bg-white/[0.04] shadow-xl shadow-black/40"
//                                                             : "border-white/[0.04] bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02]"
//                                                     }`}
//                                                 >
//                                                     {isActive && (
//                                                         <div
//                                                             className="absolute inset-0 opacity-[0.06] pointer-events-none"
//                                                             style={{
//                                                                 background: `linear-gradient(135deg, ${p.accent}, transparent 80%)`,
//                                                             }}
//                                                         />
//                                                     )}

//                                                     <div className="relative z-10 flex items-start gap-4">
//                                                         {/* Dynamic Icon */}
//                                                         <div
//                                                             className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300"
//                                                             style={{
//                                                                 backgroundColor:
//                                                                     isActive
//                                                                         ? `${p.accent}15`
//                                                                         : "rgba(255,255,255,0.02)",
//                                                                 borderColor:
//                                                                     isActive
//                                                                         ? `${p.accent}30`
//                                                                         : "rgba(255,255,255,0.05)",
//                                                             }}
//                                                         >
//                                                             <Icon
//                                                                 className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
//                                                                 style={{
//                                                                     color: isActive
//                                                                         ? p.accent
//                                                                         : "#94a3b8",
//                                                                 }}
//                                                             />
//                                                         </div>

//                                                         {/* Brief Data */}
//                                                         <div className="flex-1 min-w-0">
//                                                             <div className="flex items-center justify-between gap-2">
//                                                                 <h3 className="text-sm font-semibold text-slate-200 truncate group-hover:text-white transition-colors">
//                                                                     {p.name}
//                                                                 </h3>
//                                                                 <ArrowUpRight
//                                                                     className={`h-3.5 w-3.5 shrink-0 transition-all duration-300 ${
//                                                                         isActive
//                                                                             ? "opacity-100 translate-x-0"
//                                                                             : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
//                                                                     }`}
//                                                                     style={{
//                                                                         color: p.accent,
//                                                                     }}
//                                                                 />
//                                                             </div>
//                                                             <p className="mt-1 text-xs text-slate-400 line-clamp-1">
//                                                                 {p.tagline}
//                                                             </p>

//                                                             <div className="mt-3 flex items-center justify-between gap-2">
//                                                                 <span className="text-[10px] font-medium px-2 py-0.5 rounded-md border border-white/5 bg-white/[0.02] text-slate-400">
//                                                                     {p.badge}
//                                                                 </span>
//                                                                 <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
//                                                                     {p.price}
//                                                                 </span>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </button>
//                                             );
//                                         })}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* RIGHT PANEL: Immersive Active Package Details View */}
//                     <div className="lg:col-span-7">
//                         <AnimatePresence mode="wait">
//                             <motion.div
//                                 key={activeId}
//                                 initial={{ opacity: 0, x: 10 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 exit={{ opacity: 0, x: -10 }}
//                                 transition={{ duration: 0.2, ease: "easeOut" }}
//                                 className="relative h-full rounded-2xl border border-white/10 bg-[#060814]/90 backdrop-blur-xl p-6 md:p-8 flex flex-col justify-between overflow-hidden group/panel"
//                             >
//                                 {/* Dynamic Radial Ambient Light Leak */}
//                                 <div
//                                     className="absolute -right-16 -top-16 h-64 w-64 rounded-full blur-[100px] opacity-20 pointer-events-none transition-all duration-500"
//                                     style={{
//                                         backgroundColor: activeData.accent,
//                                     }}
//                                 />

//                                 <div>
//                                     {/* Top Block Details */}
//                                     <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between border-b border-white/5 pb-6">
//                                         <div>
//                                             <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
//                                                 {activeData.category} //{" "}
//                                                 {activeData.id}
//                                             </span>
//                                             <h3 className="mt-2 text-2xl md:text-3xl font-bold text-white tracking-tight">
//                                                 {activeData.name}
//                                             </h3>
//                                             <p className="mt-2 text-sm text-slate-400 max-w-md">
//                                                 {activeData.tagline}
//                                             </p>
//                                         </div>

//                                         {/* Price Tag */}
//                                         <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 min-w-[180px] self-start backdrop-blur-sm">
//                                             <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500 block">
//                                                 Investment Value
//                                             </span>
//                                             <span className="mt-1 block text-xl font-bold text-white">
//                                                 {activeData.price}
//                                             </span>
//                                             <div className="mt-2 flex items-center gap-1.5 text-[11px] text-emerald-400">
//                                                 <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
//                                                 Next Slot Open
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Body Content 1: Services Scope Grid */}
//                                     <div className="mt-6">
//                                         <div className="mb-3.5 flex items-center gap-2">
//                                             <Terminal
//                                                 className="h-3.5 w-3.5"
//                                                 style={{
//                                                     color: activeData.accent,
//                                                 }}
//                                             />
//                                             <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
//                                                 Deliverable Deliverables & Scope
//                                                 ({activeData.services.length})
//                                             </span>
//                                         </div>

//                                         <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 max-h-[220px] overflow-y-auto pr-1 custom-scrollbar">
//                                             {activeData.services.map(
//                                                 (service, idx) => (
//                                                     <div
//                                                         key={service}
//                                                         className="flex items-center gap-2.5 rounded-lg border border-white/[0.03] bg-white/[0.01] px-3 py-2"
//                                                     >
//                                                         <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-slate-500" />
//                                                         <span className="text-xs text-slate-300 truncate font-medium">
//                                                             {service}
//                                                         </span>
//                                                     </div>
//                                                 )
//                                             )}
//                                         </div>
//                                     </div>

//                                     {/* Body Content 2: Smart Features & Outcomes split panels */}
//                                     <div className="mt-6 grid gap-4 sm:grid-cols-2">
//                                         {/* Smart Automation Layer */}
//                                         <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-4">
//                                             <div className="mb-3 flex items-center gap-2">
//                                                 <Cpu
//                                                     className="h-3.5 w-3.5"
//                                                     style={{
//                                                         color: activeData.accent,
//                                                     }}
//                                                 />
//                                                 <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
//                                                     Smart Features
//                                                 </span>
//                                             </div>
//                                             <div className="space-y-2">
//                                                 {activeData.smartFeatures.map(
//                                                     (f) => (
//                                                         <div
//                                                             key={f}
//                                                             className="flex items-start gap-2 text-[11px] leading-relaxed text-slate-400"
//                                                         >
//                                                             <span
//                                                                 className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
//                                                                 style={{
//                                                                     backgroundColor:
//                                                                         activeData.accent,
//                                                                 }}
//                                                             />
//                                                             <span>{f}</span>
//                                                         </div>
//                                                     )
//                                                 )}
//                                             </div>
//                                         </div>

//                                         {/* Performance Outcomes */}
//                                         <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-4">
//                                             <div className="mb-3 flex items-center gap-2">
//                                                 <TrendingUp
//                                                     className="h-3.5 w-3.5"
//                                                     style={{
//                                                         color: activeData.accent,
//                                                     }}
//                                                 />
//                                                 <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
//                                                     Strategic Outcomes
//                                                 </span>
//                                             </div>
//                                             <div className="space-y-2">
//                                                 {activeData.outcomes.map(
//                                                     (o) => (
//                                                         <div
//                                                             key={o}
//                                                             className="flex items-start gap-2 text-[11px] leading-relaxed text-slate-400"
//                                                         >
//                                                             <span
//                                                                 className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
//                                                                 style={{
//                                                                     backgroundColor:
//                                                                         activeData.accent,
//                                                                 }}
//                                                             />
//                                                             <span className="text-slate-300 font-medium">
//                                                                 {o}
//                                                             </span>
//                                                         </div>
//                                                     )
//                                                 )}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Panel Call to action footer */}
//                                 <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
//                                     <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
//                                         <Sparkles
//                                             className="h-3 w-3"
//                                             style={{ color: activeData.accent }}
//                                         />
//                                         <span>
//                                             Deployment Timeline: 14-21 Days
//                                         </span>
//                                     </div>
//                                     <button
//                                         className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-xs font-semibold text-white transition-all duration-300 active:scale-[0.98]"
//                                         style={{
//                                             backgroundColor: activeData.accent,
//                                         }}
//                                     >
//                                         Lock this Engine
//                                         <ArrowUpRight className="h-3.5 w-3.5" />
//                                     </button>
//                                 </div>
//                             </motion.div>
//                         </AnimatePresence>
//                     </div>
//                 </div>
//             </div>

//             {/* Basic Utility Scrollbar Overrides */}
//             <style>{`
//           .custom-scrollbar::-webkit-scrollbar { width: 4px; }
//           .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.01); }
//           .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 99px; }
//           .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.15); }
//         `}</style>
//         </section>
//     );
// }
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ShoppingBag,
    GraduationCap,
    Home,
    Mic,
    UserCheck,
    Layers,
    Sparkles,
    CheckCircle2,
    ChevronDown,
    ChevronUp,
    Boxes,
    Zap,
} from "lucide-react";

const iconMap = { ShoppingBag, GraduationCap, Home, Mic, UserCheck, Layers };
const categories = [
    "All Systems",
    "Commercial & Scale",
    "Creators & Media",
    "Identity & Launch",
];

const packagesData = [
    {
        id: "pkg-01",
        category: "Commercial & Scale",
        name: "Enterprise E-Commerce Engine",
        tagline: "Conversion-first autonomous digital storefronts.",
        icon: "ShoppingBag",
        price: "Starting from ₹60k",
        badge: "High-Volume Scale",
        accent: "rgb(6, 182, 212)",
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
        smartFeatures: [
            "AI Product Recommendations",
            "Intent-Based Checkout",
            "Cart Recovery Automation",
            "Conversion Intelligence Dashboard",
            "Smart Customer Segmentation",
            "Behavioral Tracking System",
        ],
        outcomes: [
            "Higher Average Order Value",
            "Reduced Cart Abandonment",
            "Maximum Visitor-to-Buyer Conversion",
            "Complete Revenue Visibility",
        ],
    },
    {
        id: "pkg-02",
        category: "Commercial & Scale",
        name: "EdTech Ecosystem Package",
        tagline:
            "Next-gen digital learning experiences & enrollment pipelines.",
        icon: "GraduationCap",
        price: "Starting from ₹50k",
        badge: "LMS & Automation Funnels",
        accent: "rgb(168, 85, 247)",
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
        smartFeatures: [
            "Personalized Learning Paths",
            "Skill Gap Analysis",
            "Learning Behavior Analytics",
            "Smart Roadmap Generator",
            "Automated Student Analytics",
            "AI Progress Prediction",
        ],
        outcomes: [
            "Increased Course Enrolments",
            "Higher Student Retention",
            "Automated Student Onboarding",
            "Optimized Funnel Performance",
        ],
    },
    {
        id: "pkg-03",
        category: "Commercial & Scale",
        name: "Real Estate Acquisition System",
        tagline:
            "High-visual, conversion-optimized property sales infrastructure.",
        icon: "Home",
        price: "Starting from ₹50k",
        badge: "High-Intent Lead Machine",
        accent: "rgb(16, 185, 129)",
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
        smartFeatures: [
            "AI Lead Qualification",
            "Buyer Intent Tracking",
            "Smart Property Recommendations",
            "AI WhatsApp Sales Assistant",
            "Automated Follow-Ups",
            "High-Intent Lead Detection",
        ],
        outcomes: [
            "Accelerated Booking Cycle",
            "Higher Quality Site Visits",
            "Instant Lead Response Time",
            "Predictable Pipeline Velocity",
        ],
    },
    {
        id: "pkg-04",
        category: "Creators & Media",
        name: "Podcast Authority Network",
        tagline:
            "Multi-channel production, distribution, and authority engine.",
        icon: "Mic",
        price: "Starting from ₹30k",
        badge: "Authority Builder",
        accent: "rgb(219, 39, 119)",
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
        smartFeatures: [
            "Predictive Content Analytics",
            "Behavioral Intelligence Engine",
            "Smart Notifications",
            "Engagement Tracking Dashboard",
            "Automated Content Repurposing Workflow",
        ],
        outcomes: [
            "Expanded Multi-Channel Reach",
            "Surged Listener Engagement",
            "Streamlined Content Workflows",
            "Premium Brand Position",
        ],
    },
    {
        id: "pkg-05",
        category: "Creators & Media",
        name: "Personal Brand Engine",
        tagline:
            "High-yield talking head content engines for industry leaders.",
        icon: "UserCheck",
        price: "Starting from ₹25k",
        badge: "Organic Scale Engine",
        accent: "rgb(34, 197, 94)",
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
        smartFeatures: [
            "Viral Hook Optimization",
            "Audience Retention Tracking",
            "Cross-Platform Performance Analytics",
            "Automated Follow-Up Funnels",
            "Intelligent Lead Capture",
        ],
        outcomes: [
            "Accelerated Follower Growth",
            "Dominant Market Authority",
            "Inbound Inquiries Automation",
            "Consistent Content Output",
        ],
    },
    {
        id: "pkg-06",
        category: "Identity & Launch",
        name: "Brand & Campaign Launch System",
        tagline: "Complete elite visual identity setups and marketing weapons.",
        icon: "Layers",
        price: "Starting from ₹45k",
        badge: "Market Entry Core",
        accent: "rgb(139, 92, 246)",
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
            "Promotional Video Editing",
        ],
        smartFeatures: [
            "Conversion Optimization Analytics",
            "Real-Time Campaign Tracking",
            "Advanced Analytics Dashboard",
            "Intelligent CRM Integration",
            "Workflow Automation Systems",
        ],
        outcomes: [
            "Flawless Market Launch",
            "Unified Omni-Channel Presence",
            "Instant Institutional Trust",
            "High Conversion Readiness",
        ],
    },
];
export default function IndependentMasonryGrid() {
    const [activeTab, setActiveTab] = useState("All Systems");
    const [expandedCards, setExpandedCards] = useState({});

    const toggleExpand = (id) => {
        setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const filteredPackages =
        activeTab === "All Systems"
            ? packagesData
            : packagesData.filter((pkg) => pkg.category === activeTab);

    return (
        <div className="min-h-screen bg-[#030712] text-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased relative overflow-x-hidden">
            {/* Background Spotlights */}
            <div className="absolute top-0 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-1/3 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-medium text-slate-400 tracking-wider uppercase mb-4">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />{" "}
                        Premium Production Kits
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white px-2">
                        Our Architectural Frameworks
                    </h1>
                    <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-400 max-w-2xl mx-auto font-light px-4">
                        Click on any tier package to inspect structural core
                        blueprints, workflows, and production scopes.
                    </p>
                </div>

                {/* Category Switcher */}
                <div className="flex justify-center mb-10 sm:mb-14 px-2">
                    <div className="inline-flex flex-wrap justify-center p-1.5 bg-slate-950 rounded-2xl border border-slate-800/60 backdrop-blur-md gap-1 max-w-full">
                        {categories.map((cat, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(cat)}
                                className={`px-4 sm:px-5 py-2 rounded-xl text-[11px] sm:text-xs font-semibold tracking-wide transition-all duration-300 ${
                                    activeTab === cat
                                        ? "text-white bg-slate-900 border border-slate-800/80 shadow-lg shadow-black/40"
                                        : "text-slate-400 hover:text-slate-200"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid Wrapper: Fully responsive grid handles dynamic height flawlessly without layout jumping */}
                <motion.div
                    layout="position"
                    className="columns-1 md:columns-2 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredPackages.map((pkg) => {
                            const IconComponent = iconMap[pkg.icon] || Layers;
                            const isExpanded = !!expandedCards[pkg.id];

                            const visibleServices = isExpanded
                                ? pkg.services
                                : pkg.services.slice(0, 4);
                            const visibleSmartFeatures = isExpanded
                                ? pkg.smartFeatures
                                : pkg.smartFeatures.slice(0, 3);

                            return (
                                <motion.div
                                    layout="position"
                                    transition={{
                                        type: "spring",
                                        stiffness: 250,
                                        damping: 32,
                                    }}
                                    key={pkg.id}
                                    onClick={() => toggleExpand(pkg.id)} // FIX: Poore card ko clickable bana diya
                                    // className="cursor-pointer group relative rounded-3xl border border-slate-900 bg-gradient-to-b from-slate-900/40 via-slate-950/60 to-slate-950/90 p-5 sm:p-6 md:p-8 hover:border-slate-800/80 transition-colors duration-300 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] overflow-hidden w-full select-none"

                                    className="break-inside-avoid mb-8 version-card group relative rounded-3xl border border-slate-900 bg-gradient-to-b from-slate-900/40 via-slate-950/60 to-slate-950/90 p-6 md:p-8 hover:border-slate-800 transition-colors duration-300 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] overflow-hidden w-full inline-block mt-0"
                                >
                                    {/* Neon Top Accent Line */}
                                    <div
                                        className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r ${pkg.gradient}`}
                                    />

                                    {/* Header Layer */}
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                                        {/* Left Side */}
                                        <div className="flex items-start gap-3 min-w-0 flex-1">
                                            <div
                                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center border shrink-0 shadow-inner"
                                                style={{
                                                    backgroundColor: `${pkg.accent}08`,
                                                    borderColor: `${pkg.accent}20`,
                                                    color: pkg.accent,
                                                }}
                                            >
                                                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </div>

                                            <div className="min-w-0">
                                                <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase opacity-40 block">
                                                    {pkg.category}
                                                </span>

                                                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white tracking-tight mt-0.5 break-words leading-snug">
                                                    {pkg.name}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Right Side */}
                                        <div className="flex sm:block items-center justify-between sm:justify-start gap-3 sm:text-right shrink-0 w-full sm:w-auto">
                                            <div className="text-sm sm:text-base md:text-lg font-black text-white tracking-tight whitespace-nowrap">
                                                {pkg.price}
                                            </div>

                                            <span className="inline-flex items-center justify-center px-2 py-1 rounded-full text-[9px] sm:text-[10px] font-medium bg-slate-900 border border-slate-800 text-slate-400 whitespace-nowrap">
                                                {pkg.badge}
                                            </span>
                                        </div>
                                    </div>
                                    {/* Tagline Statement */}
                                    <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed mb-6 pb-6 border-b border-slate-900">
                                        {pkg.tagline}
                                    </p>

                                    {/* Dynamic Columns Content */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                                        {/* Deliverables */}
                                        <div>
                                            <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3.5 flex items-center gap-2">
                                                <Boxes className="w-3.5 h-3.5 text-slate-600" />{" "}
                                                Core Scope Deliverables
                                            </h4>
                                            <ul className="space-y-2.5">
                                                {visibleServices.map(
                                                    (srv, i) => (
                                                        <motion.li
                                                            layout="position"
                                                            key={i}
                                                            className="text-xs text-slate-400 flex items-start gap-2 leading-snug"
                                                        >
                                                            <span className="text-slate-700 mt-0.5">
                                                                •
                                                            </span>
                                                            <span>{srv}</span>
                                                        </motion.li>
                                                    )
                                                )}
                                            </ul>
                                        </div>

                                        {/* Smart Logic */}
                                        <div>
                                            <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3.5 flex items-center gap-2">
                                                <Zap className="w-3.5 h-3.5 text-amber-500/60" />{" "}
                                                Smart System Logic
                                            </h4>
                                            <ul className="space-y-2">
                                                {visibleSmartFeatures.map(
                                                    (feat, i) => (
                                                        <motion.li
                                                            layout="position"
                                                            key={i}
                                                            className="text-xs text-slate-300 font-medium flex items-start gap-2 bg-slate-900/30 p-2 rounded-xl border border-slate-900/60"
                                                        >
                                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/90 shrink-0 mt-0.5" />
                                                            <span>{feat}</span>
                                                        </motion.li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Smooth Faded Overlay Mask */}
                                    {!isExpanded && (
                                        <div className="absolute bottom-[68px] left-0 right-0 h-20 bg-gradient-to-t from-[#040814] via-[#040814]/80 to-transparent pointer-events-none z-10" />
                                    )}

                                    {/* Strategic Outcomes Block */}
                                    <div className="relative overflow-hidden">
                                        <AnimatePresence initial={false}>
                                            {isExpanded && (
                                                <motion.div
                                                    initial={{
                                                        height: 0,
                                                        opacity: 0,
                                                        marginTop: 0,
                                                    }}
                                                    animate={{
                                                        height: "auto",
                                                        opacity: 1,
                                                        marginTop: 28,
                                                    }}
                                                    exit={{
                                                        height: 0,
                                                        opacity: 0,
                                                        marginTop: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.25,
                                                        ease: [0.4, 0, 0.2, 1],
                                                    }}
                                                    className="pt-6 border-t border-slate-900"
                                                >
                                                    <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3">
                                                        Targeted Performance
                                                        Metrics
                                                    </h4>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {pkg.outcomes.map(
                                                            (outcome, i) => (
                                                                <span
                                                                    key={i}
                                                                    className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-slate-950 text-slate-400 border border-slate-900"
                                                                >
                                                                    {outcome}
                                                                </span>
                                                            )
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Action Layout Expander Switcher */}
                                    <div className="mt-8 pt-2 flex justify-center relative z-20">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation(); // FIX: Button click par event bubbling roki taaki double toggle na ho
                                                toggleExpand(pkg.id);
                                            }}
                                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-xs font-bold text-slate-300 hover:text-white border border-slate-800 transition-all duration-200 shadow-md backdrop-blur-sm"
                                        >
                                            {isExpanded ? (
                                                <>
                                                    Collapse Specification{" "}
                                                    <ChevronUp className="w-4 h-4 text-slate-500" />
                                                </>
                                            ) : (
                                                <>
                                                    View Full Blueprint (
                                                    {pkg.services.length +
                                                        pkg.smartFeatures
                                                            .length}{" "}
                                                    Items){" "}
                                                    <ChevronDown className="w-4 h-4 text-slate-400 group-hover:translate-y-0.5 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
