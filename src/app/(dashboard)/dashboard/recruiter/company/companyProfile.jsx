import CompanyEmptyState from '@/components/dashboard/NoCompany';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

const RecruiterCompany = async() => {

    return (
        <div>
            <CompanyEmptyState/>
        </div>
    );
};

export default RecruiterCompany;