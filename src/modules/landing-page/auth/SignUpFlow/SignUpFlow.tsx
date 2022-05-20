import Modal from "react-modal";
import React, { FC, useContext } from "react";
import { StepOne } from "./StepOne";
import { FormContext } from "../formContext";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";

Modal.setAppElement("#__next");

interface ISignUpFlow {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const SignUpFlow: FC<ISignUpFlow> = ({ isOpen, onRequestClose }) => {
  const { step, signUpData, setSignUpData, setStep } = useContext(FormContext);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => {
        onRequestClose && onRequestClose();
        setSignUpData({
          ...signUpData,
          day: "",
          email: "",
          month: "",
          password: "",
          tel: "",
          username: "",
          year: "",
        });
        setStep(1);
      }}
      contentLabel="signup modal"
      className="w-full max-w-[500px] bg-black absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-white rounded-md"
    >
      <div className="">
        <form className="m-8 px-8">
          {step === 1 && <StepOne />}
          {step === 2 && <StepTwo />}
          {step === 3 && <StepThree />}
        </form>
      </div>
    </Modal>
  );
};
