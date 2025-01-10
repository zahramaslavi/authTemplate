import { generalApiClient } from "./apiClient";
// import { MoodDataI } from "@/models/moodData";

export const users = async () => {
  try {
    const res = await generalApiClient("/general");
    return res.data;
  } catch (error) {
    throw error;
  }
}
