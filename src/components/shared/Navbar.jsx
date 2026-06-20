"use client";

import { useState } from "react";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import { useTheme } from "next-themes";
import ThemeSwitcher, { ThemeSwitch } from "./theme-toggle";
import ThemeToggle from "./theme-toggle";
import { signOut, useSession } from "@/lib/auth-client";

export default function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const { theme, setTheme } = useTheme();
    const { data } = useSession();
    const user = data?.user;
    // console.log(user);

    const menuItems = [
        { name: "Browse Jobs", href: "/jobs" },
        { name: "Company", href: "/company" },
        { name: "Pricing", href: "/plans" },
    ];

    return (
        <div className="w-full py-4 px-4 sm:px-8 border-b border-default">

            <nav className="mx-auto flex w-full max-w-4/5 items-center justify-between ">

                {/* Left: Logo */}
                <div className="flex items-center justify-center">
                    <Link href={'/'}>
                        <Image src={Logo} alt='logo' height={50} width={150}></Image>
                    </Link>
                </div>

                {/* Center: Desktop Links*/}
                <div className="hidden sm:flex items-center justify-between gap-4 p-4 rounded-4xl bg-background/70 border border-white/5 shadow-lg">
                    <ul className="flex items-center gap-8">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className="text-sm font-medium text-foreground/80 hover:text-white transition-colors"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Subtle divider from your image */}
                    <div className="h-5 w-px bg-gray-700/80"></div>

                    {/* <ThemeToggle /> */}

                    {/* Right: Auth Buttons */}
                    <div className="flex items-center gap-4">


                        {
                            user ? <Link href="/">
                                <Button variant="ghost" onClick={() => signOut()}>
                                    Log out
                                </Button>
                            </Link> : <Link
                                href="/auth/login"
                                className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                            >
                                Log In
                            </Link>
                        }

                        {
                            user && <div>
                                <Avatar>
                                    <Avatar.Image alt={user?.name} src={user?.image} />
                                    <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
                                </Avatar>
                            </div>
                        }

                        {!user && <Button
                            className="bg-[#635BFF] text-white hover:bg-indigo-500 font-medium rounded-xl px-5 shadow-sm"
                        >
                            <Link href="/auth/signup">

                                Get Started
                            </Link>
                        </Button>}
                    </div>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="sm:hidden text-foreground/80 hover:text-white focus:outline-none p-1"
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
                                href="auth/login"
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