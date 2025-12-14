"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <header className="w-full py-12 px-6 flex items-center justify-center z-50">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center"
            >
                <h1 className="text-xl md:text-2xl font-bold tracking-widest uppercase text-brand">
                    Gridmark Media
                </h1>
                <p className="text-xs text-zinc-500 tracking-[0.2em] mt-1 pl-0.5">
                    CINEMATIC VIDEOGRAPHY
                </p>
            </motion.div>
        </header>
    );
}
