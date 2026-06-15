'use client'
import { useSession } from '@/lib/auth-client';
import React from 'react';

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
        </div>
    );
};

export default RecruiterDashboard;