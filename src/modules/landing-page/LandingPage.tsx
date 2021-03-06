import { PageMeta } from "@/shared-components/PageMeta";
import { Button } from "@/ui/ Button";
import { TwitterOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FormContextProvider } from "./auth/formContext";
import { LoginFlow } from "./auth/LoginFlow/LoginFlow";
import { SignUpFlow } from "./auth/SignUpFlow/SignUpFlow";

export const LandingPage = () => {
  const router = useRouter();

  return (
    <FormContextProvider>
      <PageMeta />
      <div className="grid grid-cols-12 h-screen w-full">
        <div
          className="relative bg-cover bg-center bg-no-repeat col-span-7 w-full"
          style={{ backgroundImage: "url('/images/login-bg.png')" }}
        >
          <TwitterOutlined className="relative left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-[400px]" />
        </div>
        <aside className="col-span-5 pl-5 flex flex-col justify-center items-start">
          <div className="mb-10">
            <TwitterOutlined className="text-5xl mb-10" />
            <h1 className="text-5xl mb-10" data-testid="landing-title">
              Happening now
            </h1>
            <h2 className="text-2xl">Join Twitter today.</h2>
            <div className="flex flex-col max-w-[300px] my-5 gap-3">
              <Link href="/?flow=signup" as="/flow/signup" passHref>
                <Button
                  fit
                  size="small"
                  role="link"
                  data-testid="signup-button"
                >
                  Sign up with phone or email
                </Button>
              </Link>

              <span className="text-graySecondary text-xs">
                By signing up, you agree to the
                <span className="text-primary"> Terms of Service</span> and
                <span className="text-primary"> Privacy</span>. including
                <span className="text-primary"> Coockie use.</span>
              </span>
            </div>
          </div>
          <div>
            <h4 className="mb-3">Already have an account?</h4>
            <Link href="/?flow=login" as="/flow/login" passHref>
              <Button fit size="small" role="link" data-testid="signin-button">
                Sign in
              </Button>
            </Link>
          </div>
        </aside>
      </div>
      <SignUpFlow
        onRequestClose={() => router.push("/")}
        isOpen={router.query.flow === "signup" ? true : false}
      />
      <LoginFlow
        onRequestClose={() => {
          router.push("/");
        }}
        isOpen={router.query.flow === "login" ? true : false}
      />
    </FormContextProvider>
  );
};
