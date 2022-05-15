import { isServer } from "@/utils/isServer";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { FC } from "react";

type withNoAuthenticationFn = (Component: NextPage) => FC;

const withNoAuth: withNoAuthenticationFn = (Component) => {
  const Authenticated: FC = (): JSX.Element | null => {
    const router = useRouter();
    let jwt;

    if (isServer()) {
      jwt = localStorage.getItem("jwt");
    }

    if (isServer() && jwt !== null) router.push("/home");

    return !jwt ? (
      <Component />
    ) : (
      <div className="bg-black h-screen w-full"></div>
    );
  };
  return Authenticated;
};

export default withNoAuth;
