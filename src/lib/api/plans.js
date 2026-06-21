'use server';

import { serverQuery } from "../core/server";

export const getPlanById = async (planId) => {
    return serverQuery(`/api/plans?plan_id=${planId}`);
}