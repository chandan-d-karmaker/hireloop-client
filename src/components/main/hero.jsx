import { Magnifier } from '@gravity-ui/icons';
import { LocationArrow } from '@gravity-ui/icons';
import { Briefcase, ChartColumn, Star } from "@gravity-ui/icons";
import Image from 'next/image';
import globle from '@/assets/images/globe.png'
const stats = [
    {
        id: 1,
        icon: Briefcase,
        value: "50K",
        label: "Active Jobs",
    },
    {
        id: 2,
        icon: ChartColumn,
        value: "12K",
        label: "Companies",
    },
    {
        id: 3,
        icon: Magnifier,
        value: "2M",
        label: "Job Seekers",
    },
    {
        id: 4,
        icon: Star,
        value: "97%",
        label: "Satisfaction Rate",
    },
];

export default function HeroSection() {
    return (

        <section className="relative w-full flex flex-col items-center justify-center px-4 pt-20 overflow-hidden">

            <Image
                src={globle}
                alt="Background"
                loading='eager'
                quality={70}
                fill
                style={{
                    objectFit: 'cover',
                    zIndex: -1,
                    // position: 'center'
                }}
            />

            {/* Top Badge */}
            <div className="relative flex items-center justify-center mb-8 z-10">

                {/* Subtle glowing line behind the badge */}
                <div className="absolute w-62.5 sm:w-87.5 h-px bg-linear-to-r from-transparent via-gray-500/80 to-transparent"></div>

                <div className="relative flex items-center gap-2 bg-[#121212] border border-white/5 rounded-full px-4 py-1.5 text-xs sm:text-sm shadow-xl">
                    <span>💼</span>
                    <span className="text-white font-bold tracking-wide">50,000+</span>
                    <span className="text-gray-400 font-medium tracking-widest uppercase text-[10px] sm:text-xs ml-1">
                        New Jobs This Month
                    </span>
                </div>
            </div>

            {/* Headline & Subheadline */}
            <div className="text-center max-w-3xl mb-12 z-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                    Find Your Dream Job Today
                </h1>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                    HireLoop connects top talent with world-class companies. Browse thousands of
                    curated opportunities and land your next role — faster.
                </p>
            </div>

            {/* Search Bar */}
            <div className="relative z-10 w-full max-w-4xl bg-[#0F0F0F] border border-white/10 rounded-2xl p-2 flex flex-col md:flex-row items-center gap-2 shadow-2xl">

                {/* Search Input 1: Keyword */}
                <div className="flex-1 flex items-center gap-3 px-4 py-2 w-full">
                    <Magnifier className="text-gray-400" width={20} height={20} />
                    <input
                        type="text"
                        placeholder="Job title, skill or company"
                        className="w-full bg-transparent border-none text-white focus:outline-none placeholder:text-gray-500 text-sm md:text-base"
                    />
                </div>

                {/* Vertical Divider */}
                <div className="hidden md:block w-px h-6 bg-gray-700/80"></div>

                {/* Search Input 2: Location */}
                <div className="flex-1 flex items-center gap-3 px-4 py-2 w-full border-t border-white/5 md:border-none">
                    <LocationArrow className="text-gray-400" width={20} height={20} />
                    <input
                        type="text"
                        placeholder="Location or Remote"
                        className="w-full bg-transparent border-none text-white focus:outline-none placeholder:text-gray-500 text-sm md:text-base"
                    />
                </div>

                {/* Search Button */}
                <button className="w-full md:w-auto bg-[#635BFF] hover:bg-indigo-500 transition-colors h-12 md:h-10 px-6 rounded-xl flex items-center justify-center mt-2 md:mt-0 shadow-md">
                    {/* Magnifier icon shows on desktop, text shows on mobile */}
                    <Magnifier className="text-white hidden md:block" width={18} height={18} />
                    <span className="text-white md:hidden font-medium text-sm">Search Jobs</span>
                </button>
            </div>

            {/* Trending Positions */}
            <div className="relative z-10 mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-sm">
                <span className="text-gray-400 font-medium">Trending Position</span>
                <div className="flex flex-wrap items-center justify-center gap-2">
                    <button className="px-4 py-1.5 rounded-full bg-[#1A1A1A] border border-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
                        Product Designer
                    </button>
                    <button className="px-4 py-1.5 rounded-full bg-[#1A1A1A] border border-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
                        AI Engineering
                    </button>
                    <button className="px-4 py-1.5 rounded-full bg-[#1A1A1A] border border-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
                        Dev-ops Engineer
                    </button>
                </div>
            </div>

            {/* stats section */}
            <section className="relative w-11/12 mx-auto pt-24 px-4 sm:px-8 mt-72">
                <div className="flex flex-col items-center w-full">

                    {/* Heading text */}
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-[28px] text-[#A1A1AA] font-normal leading-relaxed">
                            Assisting over <span className="text-white font-medium">15,000 job seekers</span> <br className="hidden sm:block" />
                            find their dream positions.
                        </h2>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full z-10">
                        {stats.map((stat) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={stat.id}
                                    className="bg-linear-to-t from-[#313131] to-[#010102] rounded-2xl p-6 flex flex-col justify-between h-44 sm:h-48 broder border-white/10"
                                >
                                    {/* Top Left Icon */}
                                    <div className="text-gray-400">
                                        <Icon width={18} height={18} />
                                    </div>

                                    {/* Bottom Stats */}
                                    <div className="mt-auto">
                                        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-1 tracking-tight">
                                            {stat.value}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-[#A1A1AA]">
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>
        </section>
    );
}