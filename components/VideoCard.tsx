"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Video } from "@/data/videos";
import { memo, useRef, useState } from "react";

interface VideoCardProps {
    video: Video;
    onClick: (video: Video) => void;
    index: number;
}

export const VideoCard = memo(function VideoCard({ video, onClick, index }: VideoCardProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleMouseEnter = () => {
        setIsPlaying(true);
        setTimeout(() => {
            videoRef.current?.play().catch(() => { });
        }, 50);
    };

    const handleMouseLeave = () => {
        setIsPlaying(false);
        videoRef.current?.pause();
        if (videoRef.current) videoRef.current.currentTime = 0;
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
                src={`${video.url}#t=0.1`} // Trick to force load first frame
                className="absolute inset-0 w-full h-full object-cover"
                muted
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

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-brand text-sm font-bold tracking-wide uppercase truncate border-l-2 border-brand pl-2">{video.title}</h3>
            </div>
        </motion.div>
    );
});
