import { Button } from "@/ui/ Button";
import { Input } from "@/ui/Input";
import { CloseOutlined, TwitterOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { SyntheticEvent, useState } from "react";
import { FC } from "react";
import Modal from "react-modal";

Modal.setAppElement("#__next");

interface LoginFlow {
  isOpen: boolean;
  onRequestClose?: () => void;
}

export const LoginFlow: FC<LoginFlow> = ({ isOpen, onRequestClose }) => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
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

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="signup modal"
      className="w-full max-w-[500px] bg-black absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-white rounded-md"
    >
      <div className="">
        <form className="m-8 px-8">
          <Link href="/" passHref>
            <CloseOutlined
              role="link"
              tabIndex={0}
              className="text-base text-white absolute left-3 top-3 cursor-pointer"
            />
          </Link>
          <div className="w-full text-center">
            <TwitterOutlined className="text-base text-white" />
          </div>

          <div className="flex flex-col gap-5 my-4">
            <h1 className="text-3xl">Sign in to twitter</h1>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleForm}
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleForm}
              required
            />
          </div>

          <div className="flex flex-col gap-4 mt-6">
            <Button
              size="small"
              color="white"
              onClick={() => console.log(loginData)}
              type="button"
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
            >
              Forgot password?
            </Button>
          </div>

          <div className="flex gap-3 text-sm text-graySecondary my-14">
            <span>Don't have an account?</span>
            <Link href="/?flow=signup" as="/flow/signup">
              <a className="text-primary">Sign up</a>
            </Link>
          </div>
        </form>
      </div>
    </Modal>
  );
};
