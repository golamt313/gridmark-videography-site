"use client";

import { useState, useEffect } from "react";
import { Video, VIDEOS, Category } from "@/data/videos";
import { VideoCard } from "./VideoCard";
import { VideoModal } from "./VideoModal";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const CATEGORIES: (Category | 'All')[] = ['All', 'Retail', 'Restaurants', 'Events'];

export function VideoGrid() {
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
    const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

    // Pause ALL background videos when modal is open to free bandwidth
    useEffect(() => {
        if (selectedVideo) {
            // Only target videos in the grid, not the modal
            // We use a small delay to let the modal mount first
            setTimeout(() => {
                const gridVideos = document.querySelectorAll('.grid video');
                gridVideos.forEach((video) => {
                    const videoEl = video as HTMLVideoElement;
                    videoEl.pause();
                    videoEl.removeAttribute('src');
                    videoEl.load();
                });
            }, 50);
        }
    }, [selectedVideo]);

    const filteredVideos = activeCategory === 'All'
        ? VIDEOS
        : VIDEOS.filter(v => v.category === activeCategory);

    return (
        <section className="container mx-auto px-4 py-8 pb-32">
            {/* Category Filter */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={cn(
                            "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                            activeCategory === cat
                                ? "bg-brand text-brand-foreground border-brand shadow-lg shadow-brand/20"
                                : "bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-600 hover:text-zinc-300"
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {/* Pricing Card */}
                    <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="group relative aspect-[9/16] bg-zinc-900 rounded-lg overflow-hidden cursor-pointer border border-white/5 hover:border-brand/50 transition-colors"
                        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <div className="absolute inset-0 bg-cover bg-center opacity-50 transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('/pricing_card_placeholder.png')" }} />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                            <h3 className="text-2xl font-bold uppercase tracking-widest text-white group-hover:text-brand transition-colors">
                                View Packages
                            </h3>
                            <div className="mt-4 px-6 py-2 border border-white/20 rounded-full text-xs font-medium uppercase tracking-wider text-nowrap text-zinc-300 group-hover:border-brand group-hover:text-brand transition-all backdrop-blur-sm">
                                See Pricing
                            </div>
                        </div>
                    </motion.div>

                    {filteredVideos.map((video) => (
                        <VideoCard
                            key={video.id}
                            video={video}
                            index={0} // Index 0 to avoid staggering mess on reorder, or we can keep it simple
                            onClick={setSelectedVideo}
                        />
                    ))}


                </AnimatePresence>
            </motion.div>

            <AnimatePresence>
                {selectedVideo && (
                    <VideoModal
                        video={selectedVideo}
                        onClose={() => setSelectedVideo(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
