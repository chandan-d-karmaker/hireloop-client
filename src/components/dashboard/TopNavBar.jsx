'use client'
import React from 'react';
import { Avatar, Label, SearchField } from "@heroui/react";
import { FaBell } from "react-icons/fa";
import { useSession } from '@/lib/auth-client';


const TopNavBar = () => {

    const { data } = useSession();
    const user = data?.user;
    // console.log(user);
    return (
        <div className='w-full border-b border-default'>

            <nav className='flex justify-between items-center p-4'>
                {/* searach field */}
                <div className='w-full'>
                    <SearchField name="search">
                        <SearchField.Group>
                            <SearchField.SearchIcon />
                            <SearchField.Input className="w-full" placeholder="Search applications, jobs or talent" />
                            <SearchField.ClearButton />
                        </SearchField.Group>
                    </SearchField>
                </div>

                <div className='px-4 relative'>
                    <div className='absolute -top-1 right-4 rounded-full bg-red-500 h-2 w-2 border border-white'>
                    </div>
                    <FaBell />
                </div>

                {/* divider */}
                <div className="h-5 w-px bg-gray-700/80"></div>

                {/* profile section */}
                <div className='flex gap-2 px-4'>
                    <div>
                        <h1>{user?.name.split(' ')[0]}</h1>
                        <p className='text-muted'>{user?.role}</p>
                    </div>
                    <div>
                        <Avatar>
                            <Avatar.Image alt={user?.name} src={user?.image} />
                            <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                        </Avatar>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default TopNavBar;