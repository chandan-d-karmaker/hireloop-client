const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getCompanyJobs = async (companyId, status = 'active') => {
    const response = await fetch(`${baseUrl}/api/jobs?companyId=${companyId}&status=${status}`);
    return response.json();
};

export const getAllJobs = async (status = 'active') => {
    const response = await fetch(`${baseUrl}/api/all-jobs?status=${status}`);
    return response.json();
};
export const getFeaturedJobs = async (status = 'active') => {
    const response = await fetch(`${baseUrl}/api/feat-jobs?status=${status}`);
    return response.json();
};