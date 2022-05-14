import { ISignup } from "@/models/auth/Signup";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { signIn } from "services/resources/auth";

export const useAuth = () => {
  const singInMutate = useMutation(
    async (data: ISignup) => {
      return signIn(data);
    },
    {
      onSuccess: async (data) => {
        // add more typings on react query
        toast.success(`Succesfully created as ${data.data.user.username}`, {
          icon: false,
        });
      },
      onError: async (error: any) => {
        // add more typings on react query
        toast.error(error.response.data.error.message, { icon: false });
      },
      onMutate: async () => {
        toast.warn("Creating your account!", { icon: false });
      },
    }
  );

  return {
    singInMutate: singInMutate.mutate,
  };
};
