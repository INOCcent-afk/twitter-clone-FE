import { ISignIn } from "@/models/auth/SignIn";
import { ISignup } from "@/models/auth/Signup";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { signIn, signUp } from "services/resources/auth";

export const useAuth = () => {
  const router = useRouter();

  const singUpMutate = useMutation(
    async (data: ISignup) => {
      return signUp(data);
    },
    {
      onSuccess: async (data) => {
        // add more typings on react query
        router.push("/home");
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

  const singInMutate = useMutation(
    async (data: ISignIn) => {
      return signIn(data);
    },
    {
      onSuccess: async (data) => {
        // add more typings on react query
        router.push("/home");
        toast.success(`Welcome back ${data.data.user.username}`, {
          icon: false,
        });
      },
      onError: async (error: any) => {
        // add more typings on react query
        toast.error(error.response.data.error.message, { icon: false });
      },
      onMutate: async () => {
        toast.warn("signing in", { icon: false });
      },
    }
  );

  return {
    singUpMutate: singUpMutate,
    singInMutate: singInMutate,
  };
};
