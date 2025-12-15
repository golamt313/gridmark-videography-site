"use client";

import { motion, useInView } from "framer-motion";
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
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { margin: "0px 0px -20% 0px", amount: 0.5 });

    // State to track interaction mode
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect if device supports hover (Desktop vs Mobile)
    useEffect(() => {
        const checkMobile = () => {
            const media = window.matchMedia('(hover: none)');
            setIsMobile(media.matches);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile); // Re-check on orientation change etc
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Playback Logic
    // Playback Logic
    useEffect(() => {
        if (!videoRef.current) return;

        let timeout: NodeJS.Timeout;

        // On Mobile: Play when in view
        // On Desktop: Play when hovered
        const shouldPlay = isMobile ? isInView : isHovered;

        if (shouldPlay) {
            // Debounce: Wait 500ms before playing to avoid network clogging on scroll
            timeout = setTimeout(() => {
                const playPromise = videoRef.current?.play();
                if (playPromise !== undefined) {
                    playPromise.catch(() => {
                        // Auto-play was prevented
                    });
                }
            }, 500);
        } else {
            videoRef.current.pause();
            if (!isMobile) videoRef.current.currentTime = 0; // Reset on desktop leave
        }

        return () => clearTimeout(timeout);
    }, [isMobile, isInView, isHovered]);

    return (
        <motion.div
            ref={containerRef}
            layoutId={`card-${video.id}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group cursor-pointer rounded-xl overflow-hidden aspect-[9/16] bg-zinc-900 border border-zinc-800"
            onClick={() => onClick(video)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <video
                ref={videoRef}
                src={video.url}
                poster={`/thumbnails/${video.id}.webp`}
                className="absolute inset-0 w-full h-full object-cover"
                muted
                playsInline
                loop
                preload="none"
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
