"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";

export default function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { name: "Browse Jobs", href: "/jobs" },
        { name: "Company", href: "/company" },
        { name: "Pricing", href: "/pricing" },
    ];

    return (
        <div className="w-full bg-[#111111] py-4 px-4 sm:px-8">

            <nav className="mx-auto flex w-full max-w-7xl items-center justify-between  ">

                {/* Left: Logo */}
                <div className="flex items-center justify-center">
                    <Image src={Logo} alt='logo' height={50} width={150}></Image>
                </div>

                {/* Center: Desktop Links*/}
                <div className="hidden sm:flex items-center justify-between gap-4 p-4 rounded-2xl bg-[#1c1919] border border-white/5 shadow-lg">
                    <ul className="flex items-center gap-8">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Subtle divider from your image */}
                    <div className="h-5 w-px bg-gray-700/80"></div>

                    {/* Right: Auth Buttons */}
                    <div className="flex items-center gap-4">
                        <Button variant="ghost">
                            <Link
                                href="/login"
                                className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                            >
                                Sign In
                            </Link>
                        </Button>

                        <Button
                            as={Link}
                            href="/register"
                            className="bg-[#635BFF] text-white hover:bg-indigo-500 font-medium rounded-xl px-5 shadow-sm"
                        >
                            Get Started
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="sm:hidden text-gray-300 hover:text-white focus:outline-none p-1"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </nav>

            {/* 
        Mobile Menu Overlay
      */}
            {isMenuOpen && (
                <div className="sm:hidden mt-3 mx-auto w-full max-w-6xl rounded-2xl bg-[#1a1a1a] p-5 border border-white/5 shadow-lg">
                    <ul className="flex flex-col gap-5">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className="block text-base font-medium text-gray-300 hover:text-white"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        <li><hr className="border-gray-700/50" /></li>
                        <li>
                            <Link
                                href="/login"
                                className="block text-base font-medium text-indigo-400"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Sign In
                            </Link>
                        </li>
                        <li>
                            <Button
                                as={Link}
                                href="/register"
                                className="w-full bg-[#635BFF] text-white font-medium rounded-xl py-6 mt-1"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Get Started
                            </Button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}