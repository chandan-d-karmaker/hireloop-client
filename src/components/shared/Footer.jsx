import Image from "next/image";
import Link from "next/link";

import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Logo from "@/assets/images/logo.png";

export default function Footer() {
    const footerLinks = {
        product: [
            { name: "Job discovery", href: "#" },
            { name: "Worker AI", href: "#" },
            { name: "Companies", href: "#" },
            { name: "Salary data", href: "#" },
        ],
        navigations: [
            { name: "Help center", href: "#" },
            { name: "Career library", href: "#" },
            { name: "Contact", href: "#" },
        ],
        resources: [
            { name: "Brand Guideline", href: "#" },
            { name: "Newsroom", href: "#" },
        ],
    };

    return (
        <footer className="w-full bg-background pt-16 pb-8 px-5 sm:px-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                {/* Top Section: Branding & Links */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

                    {/* Left Column: Logo & Tagline */}
                    <div className="lg:col-span-2 flex flex-col gap-5">
                       <Image src={Logo} alt='logo' height={50} width={150}></Image>
                        <p className="text-[#a2a1a1] text-sm leading-relaxed max-w-xs pr-4">
                            The AI-native career platform. Built for people who take their work seriously.
                        </p>
                    </div>

                    {/* Right Columns: Links */}
                    <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {/* Product Column */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[#4F46E5] font-medium mb-2">Product</h3>
                            <ul className="flex flex-col gap-3">
                                {footerLinks.product.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-[#908f8f] hover:text-white transition-colors text-sm">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Navigations Column */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[#4F46E5] font-medium mb-2">Navigations</h3>
                            <ul className="flex flex-col gap-3">
                                {footerLinks.navigations.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-[#908f8f] hover:text-white transition-colors text-sm">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources Column */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[#4F46E5] font-medium mb-2">Resources</h3>
                            <ul className="flex flex-col gap-3">
                                {footerLinks.resources.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-[#908f8f] hover:text-white transition-colors text-sm">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Socials & Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4">

                    {/* Social Icons (Gravity UI) */}
                    <div className="flex items-center gap-3">
                        {/* Facebook */}
                        <a href="#" className="flex items-center justify-center w-9 h-9 rounded-md bg-[#111111] text-[#737373] hover:text-white hover:bg-gray-800 transition-colors" aria-label="Facebook">
                            <FaFacebook />
                        </a>

                        {/* Pinterest (Styled Purple) */}
                        <a href="#" className="flex items-center justify-center w-9 h-9 rounded-md bg-[#3730A3] text-white hover:bg-[#4338ca] transition-colors" aria-label="Pinterest">
                            <FaPinterest />
                        </a>

                        {/* LinkedIn */}
                        <a href="#" className="flex items-center justify-center w-9 h-9 rounded-md bg-[#111111] text-[#737373] hover:text-white hover:bg-gray-800 transition-colors" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                    </div>

                    {/* Copyright Text */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm text-[#525252]">
                        <p>Copyright 2026 — Hireloop</p>
                        <p className="hidden sm:block">|</p>
                        <div className="flex gap-1">
                            <Link href="#" className="hover:text-white transition-colors">Terms & Policy</Link>
                            <span>-</span>
                            <Link href="#" className="hover:text-white transition-colors">Privacy Guideline</Link>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}