"use client";

import { Button } from "@heroui/react";
import React, { useState } from "react";
import AddCompany from "./AddCompany";
import { useSession } from "@/lib/auth-client";


export default function CompanyEmptyState() {

    const [isLoading, setIsLoading] = useState(false);
   


    // Shared generic input styles for primitive Input/TextArea to match your "Post a Job" design
    const baseInputClass = "bg-[#222222] border-none hover:bg-[#2A2A2A] focus-visible:bg-[#2A2A2A] rounded-xl px-4 py-2 text-white shadow-none focus-visible:ring-0 placeholder:text-neutral-500 w-full";
    const labelClass = "text-neutral-300 font-medium pb-1.5 text-sm";
    return (
        <div
            className="flex items-center justify-center bg-[#111111]"
        >
            <div className="flex flex-col items-center text-center gap-6 max-w-sm px-6 py-10">

                {/* ── Illustration ── */}
                <div className="relative flex items-center justify-center w-44 h-44 bg-transparent shadow-2xl backdrop-blur-3xl">

                    {/* background blur container
                <div className="absolute top-6 w-76 h-26 rounded-full p-5 bg-white/10">
                </div> */}

                    {/* Document card */}
                    <div
                        className="relative w-36 h-40 rounded-2xl flex flex-col gap-2.5 p-5 shadow-2xl"
                        style={{
                            background: "linear-gradient(160deg, #2a2a2a 0%, #1e1e1e 100%)",
                            border: "1px solid rgba(255,255,255,0.07)",
                        }}
                    >

                        {/* Avatar placeholder */}
                        <div className="w-7 h-7 rounded-md bg-neutral-600 opacity-70" />

                        {/* Skeleton text lines */}
                        <div className="space-y-2 mt-1">
                            <div className="h-2 w-24 rounded-full bg-neutral-600 opacity-60" />
                            <div className="h-2 w-20 rounded-full bg-neutral-600 opacity-45" />
                            <div className="h-2 w-16 rounded-full bg-neutral-600 opacity-30" />
                        </div>

                        {/* Bottom-right ghost icon */}
                        <div className="absolute bottom-4 right-4 opacity-20 ">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.4">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                        </div>
                    </div>

                    {/* White badge — store icon */}
                    <div
                        className="absolute top-1 right-3 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                        style={{ background: "#ffffff" }}
                    >
                        {/* Gravity-style store / shop icon */}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                    </div>
                </div>

                {/* ── Heading + body ── */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-white text-xl font-semibold tracking-tight">
                        Company not registered yet
                    </h2>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                        Set up your business profile to start posting high-performance job
                        listings and manage your talent loop.
                    </p>
                </div>

                {/* ── Actions ── */}
                <div className="flex items-center gap-3 mt-1 w-full">
                    <AddCompany />

                    <Button
                        variant="tertiary"
                        radius="md"
                        className="flex-1 text-white font-medium text-sm"
                    >
                        View FAQ
                    </Button>
                </div>

                {/* ── Footer hint ── */}
                <p className="text-neutral-600 text-xs mt-2">
                    Need specialized assistance?{" "}
                    <button className="text-neutral-500 hover:text-neutral-300 underline underline-offset-2 transition-colors cursor-pointer bg-transparent border-none p-0">
                        Contact our enterprise support team.
                    </button>
                </p>

            </div>
        </div>
    );
}