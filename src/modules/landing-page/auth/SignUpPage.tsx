import React from "react";
import { FormContextProvider } from "./formContext";
import { SignUpFlow } from "./SignUpFlow/SignUpFlow";

export const SignUpPage = () => {
  return (
    <FormContextProvider>
      <div className="bg-gray w-full h-screen">
        <SignUpFlow onRequestClose={null} isOpen={true} />
      </div>
    </FormContextProvider>
  );
};
