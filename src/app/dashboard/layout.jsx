import { SideBar } from '@/components/dashboard/SideBar';
import React from 'react';

const DashBoardLayout = ({ children }) => {
    return (
        <div className='flex min-h-screen'>
            <SideBar/>
            <div className='flex-1'>
                {children}
            </div>
        </div>
    );
};

export default DashBoardLayout;