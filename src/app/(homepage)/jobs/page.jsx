import JobCard from '@/components/shared/JobCard';
import { getAllJobs } from '@/lib/api/jobs';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FiArrowLeft } from "react-icons/fi";

const jobsPage = async () => {

    const jobs = await getAllJobs();
    return (
        <section className="bg-[#0a0a0f] py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Label */}
                <div className="flex items-center justify-between gap-2 mb-4">
                    <div>
                        <Link href="/">
                            <Button variant='secondary' className="rounded-3xl p-6">
                                <FiArrowLeft size={42}/>
                            </Button>
                        </Link>
                    </div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6c5ce7]" />
                        <span className="text-[10px] tracking-widest text-[#6c5ce7] uppercase font-medium">Smart Job Discovery</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6c5ce7]" />
                    </div>
                    <div>

                    </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center leading-tight mb-12">
                    The roles you&apos;d never
                    <br />find by searching
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {jobs.map((job, i) => (
                        <JobCard key={i} job={job} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default jobsPage;