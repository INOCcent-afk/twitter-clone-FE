import { SwapLeftOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import { FormContext } from "../formContext";

export const StepTwo = () => {
  const { setStep } = useContext(FormContext);
  return (
    <>
      <h1
        onClick={() => {
          setStep(1);
        }}
        className="flex gap-2 items-center text-white cursor-pointer hover:text-red"
      >
        <SwapLeftOutlined className="text-3xl leading-[0px]" />
        <span>2 out of 3</span>
      </h1>
      <h1>This is Step Two</h1>
    </>
  );
};
