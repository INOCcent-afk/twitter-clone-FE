import { createContext } from "react";

export const FormContext = createContext({
  step: 1,
  signUpData: {
    name: "",
    tel: "",
  },
});
