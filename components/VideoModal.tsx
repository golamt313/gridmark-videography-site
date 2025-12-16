"use client";

import { motion } from "framer-motion";
import { X, Play, Pause, Volume2, VolumeX, Loader2 } from "lucide-react";
import { Video } from "@/data/videos";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

interface VideoModalProps {
    video: Video;
    onClose: () => void;
}

export function VideoModal({ video, onClose }: VideoModalProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            if (isPlaying) videoRef.current.pause();
            else videoRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsMuted(!isMuted);
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const current = videoRef.current.currentTime;
            const total = videoRef.current.duration;
            setProgress((current / total) * 100);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        if (videoRef.current) {
            const time = (value / 100) * videoRef.current.duration;
            videoRef.current.currentTime = time;
            setProgress(value);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.button
                className="absolute top-4 right-4 z-50 p-2 text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                onClick={onClose}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
            >
                <X size={24} />
            </motion.button>

            <motion.div
                layoutId={`card-${video.id}`}
                className="relative w-full max-w-[500px] aspect-[9/16] bg-black rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10"
                onClick={(e) => e.stopPropagation()}
            >
                <video
                    ref={videoRef}
                    src={video.url}
                    poster={`/thumbnails/${video.id}.webp`}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    playsInline
                    muted={isMuted}
                    preload="auto"
                    onClick={togglePlay}
                    onWaiting={() => setIsLoading(true)}
                    onPlaying={() => setIsLoading(false)}
                    onCanPlay={() => setIsLoading(false)}
                    onTimeUpdate={handleTimeUpdate}
                />

                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <Loader2 className="w-10 h-10 text-white animate-spin" />
                    </div>
                )}

                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity duration-300">

                    {/* Scrubber */}
                    <div className="w-full mb-4 flex items-center gap-2 group/scrubber">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={progress}
                            onChange={handleSeek}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full h-1 bg-white/30 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand"
                        />
                    </div>

                    <div className="flex items-end justify-between">
                        <div className="text-white">
                            <p className="text-xs text-brand font-bold tracking-widest uppercase mb-1">{video.client}</p>
                            <h2 className="text-xl font-bold tracking-tight leading-none mb-4">{video.title}</h2>

                            <a
                                href="tel:+15555555555"
                                className="inline-block px-5 py-2 bg-brand text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-brand/90 transition-colors"
                            >
                                Book This Style
                            </a>
                        </div>

                        <div className="flex gap-2">
                            <Button size="icon" variant="ghost" className="text-white hover:bg-white/10 hover:text-brand rounded-full transition-colors" onClick={toggleMute}>
                                {isMuted ? <VolumeX /> : <Volume2 />}
                            </Button>
                            <Button size="icon" variant="ghost" className="text-white hover:bg-white/10 hover:text-brand rounded-full transition-colors" onClick={togglePlay}>
                                {isPlaying ? <Pause /> : <Play />}
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
