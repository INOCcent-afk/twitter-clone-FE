import { Button } from "@/ui/ Button";
import { Input } from "@/ui/Input";
import { SwapLeftOutlined } from "@ant-design/icons";
import React, { FormEvent, SyntheticEvent, useContext } from "react";
import { Form, FormContext } from "../formContext";

export const StepThree = () => {
  const { signUpData, setSignUpData, setStep } = useContext(FormContext);

  const handleEmail = (
    e: SyntheticEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setSignUpData({
      ...signUpData,
      email: e.currentTarget.value,
    });
  };

  const signUp = (e: FormEvent, data: Form) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <button
        onClick={() => {
          setStep(3);
        }}
        className="flex gap-2 items-center text-white cursor-pointer absolute top-3 left-3"
        type="button"
      >
        <SwapLeftOutlined className="text-3xl leading-[0px]" />
        <span className="font-bold">Step 3 of 3</span>
      </button>
      <div className="mt-16">
        <h1 className="mb-8 text-2xl">Create your account</h1>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={signUpData.email}
          onChange={handleEmail}
        />
      </div>
      <div className="mt-28">
        <p className="text-xs text-graySecondary my-5">
          By signing up, you agree to our
          <span className="text-primary"> Terms</span>,
          <span className="text-primary"> Privacy Policy</span>, and{" "}
          <span className="text-primary"> Cookie Use</span>. Twitter may use
          your contact information, including your email address and phone
          number for purposes outlined in our Privacy Policy.
          <span className="text-primary"> Learn more</span>
        </p>
        <div className="mt-5">
          <Button
            color="primary"
            type="submit"
            onClick={(e) => signUp(e, signUpData)}
          >
            Sign up
          </Button>
        </div>
      </div>
    </>
  );
};
