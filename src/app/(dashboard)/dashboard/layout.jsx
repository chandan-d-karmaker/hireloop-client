import { SideBar } from '@/components/dashboard/SideBar';
import TopNavBar from '@/components/dashboard/TopNavBar';
import React from 'react';

const DashBoardLayout = ({ children }) => {
    return (
        <div className='flex min-h-screen'>          
            <SideBar />                           
            <div className='flex-1 flex flex-col'>
                <TopNavBar />                      
                <div className='flex-1 p-10'>        
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;