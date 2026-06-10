"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

const CALENDLY_URL = "https://calendly.com/gridmarkmedia-info/discovery";

export function CalendlyEmbed() {
    const containerRef = useRef<HTMLDivElement>(null);
    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) return;

        const initWidget = () => {
            if (typeof window !== "undefined" && (window as any).Calendly) {
                (window as any).Calendly.initInlineWidget({
                    url: CALENDLY_URL,
                    parentElement: containerRef.current,
                    prefill: {},
                });
                initialized.current = true;
            }
        };

        if ((window as any).Calendly) {
            initWidget();
        } else {
            const checkInterval = setInterval(() => {
                if ((window as any).Calendly) {
                    clearInterval(checkInterval);
                    initWidget();
                }
            }, 100);
            return () => clearInterval(checkInterval);
        }
    }, []);

    return (
        <>
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="afterInteractive"
            />
            <div
                ref={containerRef}
                className="calendly-inline-widget"
                data-url={CALENDLY_URL}
                style={{ minWidth: "320px", height: "700px" }}
            />
        </>
    );
}
