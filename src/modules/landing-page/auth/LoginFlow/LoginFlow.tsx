import { ISignIn } from "@/models/auth/SignIn";
import { useSignInMutate } from "@/services/react-query/auth";
import { Button } from "@/ui/ Button";
import { Input } from "@/ui/Input";
import { CloseOutlined, TwitterOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, SyntheticEvent, useState } from "react";
import { FC } from "react";
import Modal from "react-modal";

if (process.env.NODE_ENV !== "test") Modal.setAppElement("#__next");

interface LoginFlow {
  isOpen: boolean;
  onRequestClose?: () => void;
}

export const LoginFlow: FC<LoginFlow> = ({ isOpen, onRequestClose }) => {
  const router = useRouter();
  const { mutate } = useSignInMutate();
  const [loginData, setLoginData] = useState({
    identifier: "",
    password: "",
  });

  const handleForm = (
    e: SyntheticEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setLoginData({
      ...loginData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e: FormEvent, data: ISignIn) => {
    e.preventDefault();

    mutate(data);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="signup modal"
      className="w-full max-w-[500px] bg-black absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-white rounded-md"
    >
      <div className="" data-testid="modal">
        <form className="m-8 px-8">
          <Link href="/" passHref>
            <CloseOutlined
              role="link"
              tabIndex={0}
              className="text-base text-white absolute left-3 top-3 cursor-pointer"
              data-testid="close-modal"
            />
          </Link>
          <div className="w-full text-center">
            <TwitterOutlined className="text-base text-white" />
          </div>

          <div className="flex flex-col gap-5 my-4">
            <h1 className="text-3xl">Sign in to twitter</h1>
            <Input
              type="email"
              name="identifier"
              placeholder="Email"
              value={loginData.identifier}
              onChange={handleForm}
              required
              data-testid="input-email"
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleForm}
              required
              data-testid="input-password"
            />
          </div>

          <div className="flex flex-col gap-4 mt-6">
            <Button
              size="small"
              color="white"
              onClick={(e) => handleSubmit(e, loginData)}
              type="submit"
              data-testid="submit-button"
            >
              Login
            </Button>

            <Button
              onClick={() => router.push("/")}
              role="link"
              aria-label="forgot password"
              size="small"
              color="blackOutline"
              type="button"
              data-testid="forgot-password"
            >
              Forgot password?
            </Button>
          </div>

          <div className="flex gap-3 text-sm text-graySecondary my-14">
            <span>Don't have an account?</span>
            <Link href="/?flow=signup" as="/flow/signup">
              <a className="text-primary" data-testid="signup">
                Sign up
              </a>
            </Link>
          </div>
        </form>
      </div>
    </Modal>
  );
};
