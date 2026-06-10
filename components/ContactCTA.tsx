"use client";

import { motion } from "framer-motion";
import { CalendlyEmbed } from "./CalendlyEmbed";

export function ContactCTA() {
    return (
        <section id="booking" className="w-full py-24 bg-zinc-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-zinc-950 to-zinc-950" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">
                        Book a <span className="text-brand">Discovery Call</span>
                    </h2>
                    <p className="text-zinc-400 text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
                        Let's talk about your brand's video content strategy.
                        Pick a time that works for you.
                    </p>
                </motion.div>

                <div className="rounded-xl overflow-hidden bg-zinc-900/30 border border-white/5">
                    <CalendlyEmbed />
                </div>
            </div>
        </section>
    );
}
