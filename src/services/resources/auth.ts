import { ISignup } from "@/models/auth/Signup";
import axios from "axios";
import { apiConfig } from "services/config";

export const signIn = async (data: ISignup) => {
  try {
    const response = await axios.post(
      `${apiConfig.url.API_URL}/api/auth/local/register`,
      data
    );

    return response;
  } catch (error) {
    throw error;
  }
};
