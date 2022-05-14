import { ISignup } from "@/models/auth/Signup";
import axios from "axios";
import { apiConfig } from "services/config";

export const signIn = async (data: ISignup) => {
  try {
    const response = await axios.post(`${apiConfig}/api/auth/local/register`, {
      data,
    });

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
