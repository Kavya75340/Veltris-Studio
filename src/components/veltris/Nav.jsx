import { motion } from "motion/react";

export function Nav() {
    const items = [
        "Studio",
        "Divisions",
        "Services",
        "Work",
        "Process",
        "Contact",
    ];

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-3 left-0 right-0 z-50 w-full px-20"
        >
            <div className="glass rounded-full px-5 py-4 flex items-center justify-between">
                <motion.a
                    href="#"
                    className="flex items-center gap-4 group relative"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                    {/* Dynamic Interactive Icon Engine */}
                    <div className="relative w-11 h-11 flex items-center justify-center flex-shrink-0">
                        {/* Layer 1: Hyper-Glow Aurora Aura (Expands & Brightens on Hover) */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#4F46E5] via-[#3B82F6] to-[#06B6D4] rounded-2xl opacity-25 blur-md group-hover:opacity-60 group-hover:scale-125 transition-all duration-500 ease-out" />

                        {/* Layer 2: Cyber-Grid Border Ring (Rotates slowly on hover) */}
                        <div className="absolute inset-0 rounded-2xl border border-white/[0.05] group-hover:border-[#06B6D4]/40 group-hover:rotate-45 transition-all duration-500 ease-out" />

                        {/* Layer 3: Solid Translucent Slate Reactor Core */}
                        <div className="relative w-9.5 h-9.5 rounded-[14px] bg-[#0D1321] border border-white/[0.08] group-hover:border-white/[0.15] flex items-center justify-center shadow-2xl transition-all duration-300 shadow-black/80">
                            {/* Custom Abstract 'V' Kinetic Geometry (Pure CSS, No Heavy SVG) */}
                            <div className="relative w-4 h-4 flex items-center justify-center">
                                {/* Left wing of V */}
                                <span className="absolute left-0 top-0 w-1.5 h-3.5 bg-gradient-to-b from-[#4F46E5] to-[#3B82F6] rounded-full transform -rotate-[28deg] origin-bottom-left transition-transform duration-300 group-hover:scale-y-110" />
                                {/* Right wing of V (The sharp high-tech accent) */}
                                <span className="absolute right-0 top-0 w-1.5 h-3.5 bg-gradient-to-b from-[#06B6D4] to-[#3B82F6] rounded-full transform rotate-[28deg] origin-bottom-right transition-transform duration-300 group-hover:scale-y-110" />
                                {/* Center Core Energy Dot */}
                                <span className="absolute bottom-[1px] w-1 h-1 bg-white rounded-full animate-pulse opacity-80" />
                            </div>
                        </div>
                    </div>

                    {/* Luxury Brand Typography Block */}
                    <div className="flex flex-col justify-center">
                        {/* Main Brand Title */}
                        <div className="text-2xl font-black tracking-tight text-white flex items-center leading-none">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#E2E8F0] group-hover:to-[#06B6D4] transition-all duration-500">
                                Veltris
                            </span>
                            {/* Active Pixel Indicator */}
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: "easeInOut",
                                }}
                                className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] ml-1 shadow-[0_0_10px_#06B6D4]"
                            />
                        </div>

                        {/* Sub-Brand Corporate Identifier */}
                        <span className="text-[9.5px] font-extrabold tracking-[0.32em] text-[#475569] uppercase mt-1.5 transition-all duration-300 group-hover:text-[#94A3B8] group-hover:tracking-[0.36em]">
                            Studio
                        </span>
                    </div>
                </motion.a>

                <nav className="hidden md:flex items-center gap-1 text-sm">
                    {items.map((i) => (
                        <a
                            key={i}
                            href={`#${i.toLowerCase()}`}
                            className="px-3 py-1.5 rounded-full text-telemetry hover:text-white hover:bg-white/5 transition-colors"
                        >
                            {i}
                        </a>
                    ))}
                </nav>

                <a
                    href="#contact"
                    className="group relative inline-flex items-center gap-2 rounded-full bg-white text-background text-sm font-medium pl-4 pr-1.5 py-1.5 hover:bg-white/90 transition"
                >
                    Book a call
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background text-white">
                        →
                    </span>
                </a>
            </div>
        </motion.header>
    );
}
