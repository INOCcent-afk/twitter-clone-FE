import Modal from "react-modal";
import React, { useContext, useEffect } from "react";
import { StepOne } from "./StepOne";
import { FormContext, FormContextProvider } from "../formContext";
import { StepTwo } from "./StepTwo";
import { useRouter } from "next/router";

Modal.setAppElement("#__next");

export const SignUpFlow = () => {
  const router = useRouter();
  const { step } = useContext(FormContext);

  return (
    <Modal
      isOpen={!!router.query.flow}
      onRequestClose={() => {
        router.push("/");
      }}
      contentLabel="signup modal"
      className="w-full max-w-[500px] bg-black absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-white rounded-md"
    >
      <div className="">
        <form className="m-8 px-8">
          {step === 1 && <StepOne />}
          {step === 2 && <StepTwo />}
        </form>
      </div>
    </Modal>
  );
};
