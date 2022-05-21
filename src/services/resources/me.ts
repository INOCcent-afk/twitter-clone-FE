import axios from "axios";
import { apiConfig } from "../config";

export const getMe = async (token: string) => {
  try {
    const response = await axios.get(`${apiConfig.url.API_URL}/api/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};
