import { serverQuery } from "../core/server";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getCompanyJobs = async (companyId, status = 'active') => {
    const response = await fetch(`${baseUrl}/api/jobs?companyId=${companyId}&status=${status}`);
    return response.json();
};

export const getAllJobs = async (searchParams = {}) => {
    try {
        // Convert the searchParams object into a valid query string (e.g., "?category=webdev&jobType=full-time")
        const queryString = new URLSearchParams(searchParams).toString();

        const res = await fetch(`${baseUrl}/api/jobs?${queryString}`, {
            cache: 'no-store', // Ensures fresh data when filters change
        });

        if (!res.ok) throw new Error("Failed to fetch jobs");

        return await res.json();
    } catch (error) {
        console.error("Error fetching jobs:", error);
        return [];
    }
};
export const getFeaturedJobs = async () => {
    return serverQuery('/api/feat-jobs');
};