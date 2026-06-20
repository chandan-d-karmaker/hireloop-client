import { serverQuery } from "../core/server";


export const getApplicationsByApplicant = async (applicantId) => {
    return serverQuery(`/api/applications?applicantId=${applicantId}`);
}