import { generalApiClient } from "./apiClient";

export const fetchUsers = async () => {
  try {
    const res = await generalApiClient("/general");
    return res.data;
  } catch (error) {
    throw error;
  }
}
