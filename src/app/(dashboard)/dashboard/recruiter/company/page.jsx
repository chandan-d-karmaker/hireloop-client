import React from 'react';
import { getUserSession } from '@/lib/core/session';
import { getMyCompanies } from '@/lib/api/companies';
import CompanyProfile from './companyProfile';

const CompanyPage = async () => {

    const user = await getUserSession();
    const companies = await getMyCompanies(user?.id);
    // console.log(companies);
    return (
        <div>
            <CompanyProfile myCompany={companies}/>
        </div>
    );
};

export default CompanyPage;