"use client";

import { motion } from "framer-motion";
import { Check, Star, TrendingUp, Video } from "lucide-react";
import { cn } from "@/lib/utils";

const includedItems = [
    {
        category: "Initial Content Strategy & Planning",
        items: [
            "Strategy session to align content with business goals",
            "Audience, platform, and messaging alignment",
            "Clear direction on how each video supports awareness or conversion",
        ],
    },
    {
        category: "Pre-Production",
        items: [
            "Custom video concepts tailored to your brand",
            "Light scripting or structured talking points",
            "Shot list and filming plan for an efficient shoot",
        ],
    },
    {
        category: "Production (Shooting Day)",
        items: [
            "On-site filming session",
            "Professional camera, audio, and lighting setup",
            "Direction and guidance on-camera to ensure confident delivery",
        ],
    },
    {
        category: "Post-Production",
        items: [
            "Professional editing optimized for social platforms",
            "Clean cuts, pacing, and cinematic polish",
            "Basic color correction and audio balancing",
            "Final delivery of ready-to-post videos",
        ],
    },
];

const packages = [
    {
        name: "Starter Package",
        price: "$1,000",
        videoCount: "4 Videos",
        icon: Video,
        description: [
            "Focused, high-impact content with minimal commitment",
            "Best for testing short-form video or launching a new offer",
            "Ideal for first-time video clients or campaign-based needs",
        ],
    },
    {
        name: "Growth Package",
        price: "$1,800",
        videoCount: "8 Videos",
        icon: TrendingUp,
        description: [
            "Designed for consistent posting across multiple weeks",
            "Stronger content cadence without doubling production effort",
            "Ideal for brands ready to build momentum and visibility",
        ],
    },
    {
        name: "Scale Package",
        price: "$2,500",
        videoCount: "12 Videos",
        icon: Star,
        isBestValue: true,
        description: [
            "Maximum output from a single shoot day",
            "Built for brands treating video as a core growth channel",
            "Allows for weekly posting across various platforms, with room for storytelling, testimonials, bts etc.",
            "Best value per video and strongest long-term content runway",
        ],
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="w-full py-24 bg-background">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
                        Video Content <span className="text-brand">Packages</span>
                    </h2>
                    <div className="w-24 h-1 bg-brand mx-auto rounded-full" />
                </motion.div>

                {/* What's Included Grid */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-widest text-zinc-400">
                            What's Included in Every Package
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {includedItems.map((section, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 backdrop-blur-sm"
                            >
                                <h4 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">
                                    {section.category}
                                </h4>
                                <ul className="space-y-3">
                                    {section.items.map((item, itemIdx) => (
                                        <li key={itemIdx} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                                            <span className="text-zinc-400 text-sm leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Packages Grid */}
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-widest text-zinc-400">
                            Package Breakdown
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {packages.map((pkg, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className={cn(
                                    "relative flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02]",
                                    pkg.isBestValue
                                        ? "bg-zinc-900/80 border-brand shadow-[0_0_30px_-5px_var(--brand)]"
                                        : "bg-zinc-950/50 border-white/10 hover:border-white/20"
                                )}
                            >
                                {pkg.isBestValue && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-black font-bold px-4 py-1 rounded-full text-xs uppercase tracking-wider shadow-lg">
                                        Best Value
                                    </div>
                                )}

                                <div className="text-center mb-6">
                                    <div className="w-12 h-12 mx-auto bg-zinc-800 rounded-full flex items-center justify-center mb-4 text-brand">
                                        <pkg.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-2">
                                        {pkg.name}
                                    </h3>
                                    <div className="text-4xl font-bold text-brand mb-1">
                                        {pkg.price}
                                    </div>
                                    <div className="text-sm text-zinc-500 font-medium uppercase tracking-widest">
                                        {pkg.videoCount}
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8 flex-1">
                                    {pkg.description.map((desc, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 shrink-0" />
                                            <span className="text-zinc-400 text-sm leading-relaxed">
                                                {desc}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="tel:+13137425658"
                                    className={cn(
                                        "block text-center w-full py-3 px-6 rounded-lg font-bold uppercase tracking-wide transition-colors",
                                        pkg.isBestValue
                                            ? "bg-brand text-black hover:bg-brand/90"
                                            : "bg-zinc-800 text-white hover:bg-zinc-700"
                                    )}>
                                    Get Started: (313) 742-5658
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
