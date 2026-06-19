import React from 'react';
import { getUserSession } from '@/lib/core/session';
import { getMyCompanies, getRecruiterCompany } from '@/lib/api/companies';
import CompanyProfile from './companyProfile';

const CompanyPage = async () => {

    const company = await getRecruiterCompany();
    // console.log(companies);
    return (
        <div>
            <CompanyProfile myCompany={company}/>
        </div>
    );
};

export default CompanyPage;