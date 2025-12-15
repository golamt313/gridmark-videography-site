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
            const allVideos = document.querySelectorAll('video');
            allVideos.forEach((video) => {
                video.pause();
                video.removeAttribute('src'); // Stop buffering entirely
                video.load(); // Reset the video element
            });
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
