import { getJobById } from '@/lib/api/jobs';
import React from 'react';
import Link from 'next/link';
import {
    Card,
    Button,
    Chip
} from '@heroui/react';
import {
    BadgeCheck,
    Share,
    Banknote,
    MapPin,
    Briefcase,
    CalendarClock,
    CheckCircle2,
    ExternalLinkIcon
} from 'lucide-react';
import Image from 'next/image';

// Helper function to format multiline text into an array for lists
const parseList = (text) => {
    if (!text) return [];
    return text.split('\n').filter((item) => item.trim() !== '');
};

const JobDetailsPage = async ({ params }) => {
    const { id } = await params;
    const job = await getJobById(id);

    if (!job) {
        return <div className="text-white text-center py-24">Job not found.</div>;
    }

    const responsibilities = parseList(job.responsibilities);
    const requirements = parseList(job.requirements);
    const benefits = parseList(job.benefits);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white py-12 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto space-y-6">

                {/* --- HEADER SECTION --- */}
                <Card className="bg-[#121212] border-none rounded-2xl w-full shadow-lg overflow-hidden">
                    <Card.Content className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                        {/* Company Logo and Title */}
                        <div className="flex items-center gap-5">
                            <div className="w-16 h-16 bg-white rounded-xl overflow-hidden flex items-center justify-center shrink-0">
                                <Image
                                    src={job.companyLogo}
                                    alt={`${job.companyName} Logo`}
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover rounded-none"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <Card.Title className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-white m-0">
                                    {job.title}
                                </Card.Title>
                                <Card.Description className="flex items-center gap-3 mt-4">
                                    <span className="text-neutral-300 text-sm font-medium">{job.companyName}</span>
                                    <span className="text-neutral-600">•</span>
                                    <Chip
                                        color="success"
                                        variant="flat"
                                        size="sm"
                                        startcontent={<BadgeCheck size={14} />}
                                        className="bg-[#4ade80]/10 text-[#4ade80] font-medium"
                                    >
                                        Verified Employer
                                    </Chip>
                                </Card.Description>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3 w-full md:w-auto">
                            <Button
                                isIconOnly
                                variant="bordered"
                                className="border-[#2e2e2e] text-neutral-300 hover:text-white rounded-xl bg-[#202020]"
                                aria-label="Share Job"
                            >
                                <Share size={18} />
                            </Button>
                            <Link href={`/jobs/${job._id}/apply`}>
                                <Button
                                    className="flex-1 md:flex-none bg-white text-black font-semibold px-8 py-3 rounded-xl hover:bg-neutral-200 transition-colors"
                                >
                                    Apply Now
                                </Button>
                            </Link>
                        </div>
                    </Card.Content>
                </Card>

                {/* --- QUICK STATS ROW --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <StatCard
                        icon={<Banknote size={20} />}
                        label="SALARY RANGE"
                        value={`${job.currency === 'USD' ? '$' : ''}${job.salaryMin} - $${job.salaryMax}`}
                    />
                    <StatCard
                        icon={<MapPin size={20} />}
                        label="LOCATION"
                        value={job.isRemote ? "Remote" : (job.location || "On-site")}
                    />
                    <StatCard
                        icon={<Briefcase size={20} />}
                        label="JOB TYPE"
                        value={job.jobType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    />
                    <StatCard
                        icon={<CalendarClock size={20} />}
                        label="DEADLINE"
                        value={new Date(job.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    />
                </div>

                {/* --- MAIN CONTENT & SIDEBAR --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Left Column (Main Details) */}
                    <Card className="lg:col-span-2 bg-[#121212] border-none rounded-2xl shadow-lg">
                        <Card.Content className="p-6 md:p-8 space-y-10">

                            <Section title="Responsibilities">
                                <ul className="space-y-4">
                                    {responsibilities.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-neutral-300 text-[15px] leading-relaxed">
                                            <CheckCircle2 size={18} className="mr-3 mt-0.5 text-neutral-500 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Section>

                            <Section title="Requirements">
                                <ul className="space-y-4">
                                    {requirements.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-neutral-300 text-[15px] leading-relaxed">
                                            <CheckCircle2 size={18} className="mr-3 mt-0.5 text-[#e5b3e5] shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Section>

                            <Section title="Benefits">
                                <ul className="space-y-4">
                                    {benefits.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-neutral-300 text-[15px] leading-relaxed">
                                            <CheckCircle2 size={18} className="mr-3 mt-0.5 text-[#4ade80] shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Section>

                        </Card.Content>
                    </Card>

                    {/* Right Column (Sidebar) */}
                    <div className="lg:col-span-1 space-y-6">
                        <Card className="bg-[#121212] border-none rounded-2xl shadow-lg">
                            <Card.Header className="px-6 pt-6 pb-2">
                                <Card.Title className="text-lg font-semibold text-white m-0">Company Overview</Card.Title>
                            </Card.Header>

                            <Card.Content className="px-6 py-2">
                                {/* Placeholder for an office image or map, matching your design */}
                                <div className="w-full h-32 bg-[#202020] rounded-xl mb-6 flex items-center justify-center border border-[#2e2e2e]">
                                    <span className="text-neutral-500 text-sm flex items-center gap-2">
                                        Office Snapshot
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-[13px]">
                                        <span className="text-neutral-500 font-medium tracking-wide">SIZE</span>
                                        <span className="text-neutral-200">10,000+ Employees</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[13px]">
                                        <span className="text-neutral-500 font-medium tracking-wide">INDUSTRY</span>
                                        <span className="text-neutral-200 capitalize">{job.category || "Technology"}</span>
                                    </div>
                                </div>
                            </Card.Content>

                            <Card.Footer className="px-6 pb-6 pt-4">
                                <Button variant="secondary" className="w-full hover:bg-[#202020] border-[#2e2e2e] text-neutral-300 rounded-lg transition-colors">
                                    <Link
                                        href="#"
                                        className='flex gap-2 items-center'
                                    >
                                        <ExternalLinkIcon size={16} />
                                        Visit Website
                                    </Link>
                                </Button>

                            </Card.Footer>
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    );
};

// Sub-component for the top statistics cards using Card anatomy
const StatCard = ({ icon, label, value }) => (
    <Card className="bg-[#121212] border-none rounded-2xl shadow-lg">
        <Card.Content className="p-5 flex flex-col gap-3">
            <div className="text-neutral-400">
                {icon}
            </div>
            <div>
                <p className="text-[11px] font-semibold tracking-wider text-neutral-500 uppercase mb-1">{label}</p>
                <p className="font-medium text-white text-sm sm:text-base">{value}</p>
            </div>
        </Card.Content>
    </Card>
);

// Sub-component for standardizing content sections
const Section = ({ title, children }) => (
    <section>
        <h2 className="text-xl font-semibold mb-4 text-white tracking-tight">{title}</h2>
        {children}
    </section>
);

export default JobDetailsPage;