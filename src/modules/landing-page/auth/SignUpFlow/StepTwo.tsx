import { Button } from "@/ui/ Button";
import { SwapLeftOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import { FormContext } from "../formContext";

export const StepTwo = () => {
  const { setStep } = useContext(FormContext);
  return (
    <>
      <div
        onClick={() => {
          setStep(1);
        }}
        className="flex gap-2 items-center text-white cursor-pointer absolute top-3 left-3"
      >
        <SwapLeftOutlined className="text-3xl leading-[0px]" />
        <span className="font-bold">Step 2 of 3</span>
      </div>
      <div className="mt-16">
        <h1 className="mb-8 text-2xl">Customize your experience</h1>
        <h4 className="mb-2">
          Track where you see Twitter content across the web
        </h4>
        <p className="text-xs">
          Twitter use this data to personalize your experience. This web
          browsing history will never be stored with your name, email, or phone
          number.
        </p>

        <p className="text-xs text-graySecondary my-5">
          By signing up, you agree to our
          <span className="text-primary"> Terms</span>,
          <span className="text-primary"> Privacy Policy</span>, and{" "}
          <span className="text-primary"> Cookie Use</span>. Twitter may use
          your contact information, including your email address and phone
          number for purposes outlined in our Privacy Policy.
          <span className="text-primary"> Learn more</span>
        </p>
      </div>
      <div className="mt-28">
        <Button onClick={() => setStep(3)} color="primary" type="submit">
          Next
        </Button>
      </div>
    </>
  );
};
