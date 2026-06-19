import { serverQuery } from "../core/server";

export const getMyCompanies = async (addedBy) => {
    return serverQuery(`/api/my/companies?addedBy=${addedBy}`);
}