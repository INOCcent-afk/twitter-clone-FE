import { useMounted } from "@/hooks/useMounted";
import { isServer } from "@/utils/isServer";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { FC } from "react";

type withAuthenticationFn = (Component: NextPage) => FC;

const withAuth: withAuthenticationFn = (Component) => {
  const Authenticated: FC = (): JSX.Element | null => {
    const mounted = useMounted();

    const router = useRouter();
    let jwt;

    if (isServer()) {
      jwt = localStorage.getItem("jwt");
    }

    if (isServer() && jwt === null) router.push("/");

    return mounted && jwt ? (
      <Component />
    ) : (
      <div className="bg-black h-screen w-full"></div>
    );
  };
  return Authenticated;
};

export default withAuth;
