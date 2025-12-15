"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Video } from "@/data/videos";
import { memo, useRef, useState, useEffect } from "react";

interface VideoCardProps {
    video: Video;
    onClick: (video: Video) => void;
    index: number;
}

export const VideoCard = memo(function VideoCard({ video, onClick, index }: VideoCardProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    // Effect to ensure video plays on mount
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => { });
        }
    }, []);

    const handleMouseEnter = () => {
        // Already playing
    };

    const handleMouseLeave = () => {
        // Do nothing - keep playing
    };

    return (
        <motion.div
            layoutId={`card-${video.id}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group cursor-pointer rounded-xl overflow-hidden aspect-[9/16] bg-zinc-900 border border-zinc-800"
            onClick={() => onClick(video)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Since we don't have separate thumbnails in R2 yet, we use the video itself.
          R2 is fast enough that the first frame loads instantly. 
          For optimization, we set preload="metadata". */}

            <video
                ref={videoRef}
                src={video.url}
                className="absolute inset-0 w-full h-full object-cover"
                muted
                autoPlay
                playsInline
                loop
                preload="metadata"
            />

            {/* Overlay darkening */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300 pointer-events-none" />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-brand/90 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100 shadow-lg shadow-brand/20">
                    <Play fill="currentColor" className="text-brand-foreground w-5 h-5 ml-1" />
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 pt-12 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="border-l-2 border-brand pl-3">
                    <p className="text-brand text-xs font-bold tracking-widest uppercase mb-1">{video.client}</p>
                    <h3 className="text-white text-sm font-medium leading-tight">{video.title}</h3>
                </div>
            </div>
        </motion.div>
    );
});
