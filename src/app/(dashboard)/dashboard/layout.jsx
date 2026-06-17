import { SideBar } from '@/components/dashboard/SideBar';
import TopNavBar from '@/components/dashboard/TopNavBar';
import React from 'react';

const DashBoardLayout = ({ children }) => {
    return (
        <div className='flex min-h-screen'>          
            <SideBar />                           
            <div className='flex-1 flex flex-col max-h-screen overflow-hidden overflow-y-auto'>
                <TopNavBar />                      
                <div className='flex-1 p-8'>        
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;