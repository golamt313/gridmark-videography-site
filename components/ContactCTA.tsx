"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export function ContactCTA() {
    return (
        <section className="w-full py-24 bg-zinc-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-zinc-950 to-zinc-950" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">
                        Ready to elevate your <span className="text-brand">brand?</span>
                    </h2>
                    <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                        Let's create video content that stops the scroll and drives real results.
                        Book a strategy call today.
                    </p>

                    <a
                        href="tel:+15555555555"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-brand text-black font-bold uppercase tracking-widest rounded-full hover:bg-brand/90 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_-5px_var(--brand)]"
                    >
                        <Phone size={20} />
                        <span>Book a Call</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
