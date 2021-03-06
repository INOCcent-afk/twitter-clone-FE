import React from "react";
import { FormContextProvider } from "./formContext";
import { LoginFlow } from "./LoginFlow/LoginFlow";

export const LoginPage = () => {
  return (
    <FormContextProvider>
      <div className="bg-gray w-full h-screen">
        <LoginFlow isOpen={true} />
      </div>
    </FormContextProvider>
  );
};
