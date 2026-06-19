'use client'
import CompanyCard from '@/components/dashboard/CompanyCard';
import CompanyEmptyState from '@/components/dashboard/NoCompany';
import React from 'react';

const CompanyProfile = ({ myCompany }) => {
    console.log(myCompany);

    return (
        <div>
            {
                myCompany._id ? <CompanyCard company={myCompany} /> : <CompanyEmptyState />
            }
        </div>
    );
};

export default CompanyProfile;