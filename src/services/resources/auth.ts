import { ISignup } from "@/models/auth/Signup";
import { ISignIn } from "@/models/auth/SignIn";
import axios from "axios";
import { apiConfig } from "@/services/config";

export const signUp = async (data: ISignup) => {
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

export const signIn = async (data: ISignIn) => {
  try {
    const response = await axios.post(
      `${apiConfig.url.API_URL}/api/auth/local`,
      data
    );

    return response;
  } catch (error) {
    throw error;
  }
};
