import { IMeQuery } from "@/models/IMe";
import axios from "axios";
import { apiConfig } from "../config";

export const getUser = async (id: number) => {
  try {
    const response: IMeQuery = await axios.get(
      `${apiConfig.url.API_URL}/api/users/${id}`
    );

    return response;
  } catch (error) {
    throw error;
  }
};
