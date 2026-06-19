import JobCard from '@/components/shared/JobCard';
import JobSearchFilter from '@/components/shared/JobSearch';
import { getAllJobs } from '@/lib/api/jobs';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FiArrowLeft } from "react-icons/fi";

// Accept searchParams as a prop
const JobsPage = async ({ searchParams }) => {
    // 1. AWAIT the searchParams before using them!
    const resolvedSearchParams = await searchParams;

    // 2. Pass the resolved object to your fetcher
    const jobs = await getAllJobs(resolvedSearchParams);
    return (
        <section className="bg-[#0a0a0f] py-24 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 mb-12">
                    <Link href="/">
                        <Button variant='secondary' className="rounded-full w-14 h-14 p-0 flex items-center justify-center">
                            <FiArrowLeft size={24}/>
                        </Button>
                    </Link>
                    
                    {/* The filter component will handle updating the URL */}
                    <div className="flex-1 w-full max-w-5xl">
                        <JobSearchFilter />
                    </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white text-center leading-tight mb-12">
                    The roles you&apos;d never
                    <br />find by searching
                </h2>

                {jobs.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobs.map((job) => (
                            <JobCard key={job._id} job={job} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-neutral-400 py-12">
                        No jobs found matching your criteria.
                    </div>
                )}
            </div>
        </section>
    );
};

export default JobsPage;