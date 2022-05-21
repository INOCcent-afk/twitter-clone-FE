import { ISignIn } from "@/models/auth/SignIn";
import { ISignup } from "@/models/auth/Signup";
import { IRQOnError } from "@/models/react-query/IError";
import { isServer } from "@/utils/isServer";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { signIn, signUp } from "services/resources/auth";

export const useSignUpMutate = () => {
  const router = useRouter();

  const { mutate, data, isSuccess, isError, isLoading } = useMutation(
    async (data: ISignup) => {
      return signUp(data);
    },
    {
      onSuccess: async (data) => {
        // add more typings on react query
        if (isServer()) {
          localStorage.setItem("jwt", data.data.jwt);
        }
        router.push("/home");
        toast.success(`Succesfully created as ${data.data.user.username}`, {
          icon: false,
        });
      },
      onError: async (error: IRQOnError) => {
        toast.error(error.response.data.error.message, { icon: false });
      },
    }
  );

  return { mutate, data, isSuccess, isError, isLoading };
};

export const useSignInMutate = () => {
  const router = useRouter();

  const { mutate, data, isSuccess, isError, isLoading } = useMutation(
    async (data: ISignIn) => {
      return signIn(data);
    },
    {
      onSuccess: async (data) => {
        if (isServer()) {
          localStorage.setItem("jwt", data.data.jwt);
        }
        router.push("/home");
        toast.success(`Welcome back ${data.data.user.username}`, {
          icon: false,
        });
      },
      onError: async (error: IRQOnError) => {
        toast.error(error.response.data.error.message, { icon: false });
      },
    }
  );

  return { mutate, data, isSuccess, isError, isLoading };
};
