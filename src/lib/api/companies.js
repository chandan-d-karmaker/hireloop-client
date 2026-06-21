import { protectedFetch, serverQuery } from "../core/server";
import { getUserSession } from "../core/session";

export const getCompanies = async () => {
    return protectedFetch(`/api/companies`);
}

export const getMyCompanies = async (addedBy) => {
    return serverQuery(`/api/my/companies?addedBy=${addedBy}`);
}

export const getRecruiterCompany = async()=>{
    const user = await getUserSession();
    return getMyCompanies(user?.id);
}