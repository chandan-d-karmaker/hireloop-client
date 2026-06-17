const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getCompanyJobs = async (companyId, status = 'active') => {
    const response = await fetch(`${baseUrl}/api/jobs?companyId=${companyId}&status=${status}`);
    return response.json();
};