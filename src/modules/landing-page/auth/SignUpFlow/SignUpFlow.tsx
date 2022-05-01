import Modal from "react-modal";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { StepOne } from "./StepOne";
import { FormContext, FormContextProvider } from "../formContext";

Modal.setAppElement("#__next");

export const SignUpFlow = () => {
  const router = useRouter();
  const formContext = useContext(FormContext);

  return (
    <FormContextProvider>
      <Modal
        isOpen={!!router.query.flow}
        onRequestClose={() => router.push("/")}
        contentLabel="login modal"
        className="w-full max-w-[500px] bg-black absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-white rounded-md"
      >
        <div className="">
          <form className="m-8 px-8">
            {formContext.step === 1 && <StepOne />}
          </form>
        </div>
      </Modal>
    </FormContextProvider>
  );
};
