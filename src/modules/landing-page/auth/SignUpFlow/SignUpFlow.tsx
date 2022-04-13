import { Input } from "@/ui/Input";
import Modal from "react-modal";
import React, { SyntheticEvent, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { StepOne } from "./stepOne";
import { FormContext } from "../formContext";

Modal.setAppElement("#__next");

export const SignUpFlow = () => {
  const router = useRouter();

  const [signUpData, setSignUpData] = useState({
    name: "",
  });

  const value = useMemo(
    () => ({ signUpData, setSignUpData }),
    [signUpData, setSignUpData]
  );

  const [step, setStep] = useState(1);

  return (
    <FormContext.Provider value={value}>
      <Modal
        isOpen={!!router.query.flow}
        onRequestClose={() => router.push("/")}
        contentLabel="login modal"
        className="w-full max-w-[400px] bg-black absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-white rounded-md"
      >
        <form className="p-5">{step === 1 && <StepOne />}</form>
      </Modal>
    </FormContext.Provider>
  );
};