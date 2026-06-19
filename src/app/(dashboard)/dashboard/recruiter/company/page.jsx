import React from 'react';
import RecruiterCompany from './companyProfile';
import { getUserSession } from '@/lib/core/session';
import { getMyCompanies } from '@/lib/api/companies';

const CompanyPage = async () => {

    const user = await getUserSession();
    console.log(user);
    const companies = await getMyCompanies(user?.id);
    console.log(companies);
    return (
        <div>
            <RecruiterCompany myCompany={companies}/>
        </div>
    );
};

export default CompanyPage;