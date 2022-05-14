import { ISignup } from "@/models/auth/Signup";
import { useMutation } from "react-query";
import { signIn } from "services/resources/auth";

export const useAuth = () => {
  const singInMutate = useMutation(
    async (data: ISignup) => {
      return signIn(data);
    },
    {
      onSuccess: async () => {
        console.log("Goodjob Dave!");
      },
    }
  );

  return {
    signIn: singInMutate.mutate,
  };
};
