import { ISignup } from "@/models/auth/Signup";
import { useSignUpMutate } from "@/services/react-query/auth";
import { Button } from "@/ui/ Button";
import { Input } from "@/ui/Input";
import { LoadingOutlined, SwapLeftOutlined } from "@ant-design/icons";
import React, { FormEvent, SyntheticEvent, useContext } from "react";
import { Form, FormContext } from "../formContext";

export const StepThree = () => {
  const { mutate, isLoading } = useSignUpMutate();
  const { signUpData, setSignUpData, setStep } = useContext(FormContext);

  const handleForm = (
    e: SyntheticEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setSignUpData({
      ...signUpData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const signUp = (e: FormEvent, data: Form) => {
    const { username, email, password, tel, day, month, year } = data;
    e.preventDefault();

    const sanitizedDate = `${month} ${day}, ${year}`;

    const sanitizedSignupData: ISignup = {
      username,
      email,
      password,
      tel,
      birthday: sanitizedDate,
    };

    mutate(sanitizedSignupData);
  };

  return (
    <>
      <button
        onClick={() => {
          setStep(2);
        }}
        className="flex gap-2 items-center text-white cursor-pointer absolute top-3 left-3"
        type="button"
      >
        <SwapLeftOutlined className="text-3xl leading-[0px]" />
        <span className="font-bold" data-testid="step">
          Step 3 of 3
        </span>
      </button>
      <div className="mt-16">
        <h1 className="mb-8 text-2xl">Create your account</h1>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={signUpData.email}
          onChange={handleForm}
        />
        <div className="mt-5"></div>
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={signUpData.password}
          onChange={handleForm}
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
            disabled={signUpData.email && signUpData.password ? false : true}
            data-testid="submit-button"
            icon={isLoading && <LoadingOutlined />}
          >
            Sign up
          </Button>
        </div>
      </div>
    </>
  );
};
