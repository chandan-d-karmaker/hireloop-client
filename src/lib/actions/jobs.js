'use server';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export const createJob = async (NewJobData) => {
    const response = await fetch(`${baseUrl}/api/jobs`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(NewJobData)
    });
    
    return response.json();
};