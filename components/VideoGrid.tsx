"use client";

import { useState } from "react";
import { Video, VIDEOS } from "@/data/videos";
import { VideoCard } from "./VideoCard";
import { VideoModal } from "./VideoModal"; // We will create this next
import { AnimatePresence } from "framer-motion";

export function VideoGrid() {
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

    return (
        <section className="container mx-auto px-4 py-12 pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {VIDEOS.map((video, index) => (
                    <VideoCard
                        key={video.id}
                        video={video}
                        index={index}
                        onClick={setSelectedVideo}
                    />
                ))}
            </div>

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
