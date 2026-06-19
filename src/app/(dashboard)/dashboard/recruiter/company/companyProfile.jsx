'use client'
import CompanyCard from '@/components/dashboard/CompanyCard';
import CompanyEmptyState from '@/components/dashboard/NoCompany';
import React from 'react';

const CompanyProfile = ({myCompany}) => {
    console.log(myCompany);

    return (
        <div>
            {
                myCompany.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    myCompany.map((company, idx) => {
                        return <CompanyCard key={idx} company={company} />
                    })
                }
            </div> : <CompanyEmptyState/>
            }
        </div>
    );
};

export default CompanyProfile;