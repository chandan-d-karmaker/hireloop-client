'use client'
import { StatsSection } from '@/components/dashboard/Stats';
import { useSession } from '@/lib/auth-client';
import React from 'react';

const recruiterDashboardStats = [
  { iconKey: 'jobs', title: 'Total Job Posts', value: '48' },
  { iconKey: 'applicants', title: 'Total Applicants', value: '1,284' },
  { iconKey: 'active', title: 'Active Jobs', value: '18' },
  { iconKey: 'closed', title: 'Jobs Closed', value: '32' },
];

const RecruiterDashboard = () => {

    const { data, isPending } = useSession();
    const user = data?.user;
    console.log("user is the dashboard",user);

    if(isPending){
        return 
    }
    return (
        <div>
            <h2 className='text-3xl font-medium'>Welcome back, {user?.name}</h2>
            <StatsSection statsData={recruiterDashboardStats} />
        </div>
    );
};

export default RecruiterDashboard;