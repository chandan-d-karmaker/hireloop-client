import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Hireloop",
    description: "AI powered recruitment platform to streamline your hiring process and find the best talent effortlessly.",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en" data-theme="dark" suppressHydrationWarning
            className={`${geistSans.variable} ${geistMono.variable} h-full dark antialiased`}
        >
            <body className="min-h-full flex flex-col ">
                {/* bg-background text-foreground */}

                {children}

                <Toaster />
            </body>
        </html>
    );
}
