import { Months } from "@/models/IDatePicker";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export interface Form {
  username: string;
  email: string;
  tel: string;
  password: string;
  month: Months | "";
  day: string;
  year: string;
}

interface FormContextProps {
  children: ReactNode;
}

interface IFormContext {
  step: number;
  signUpData: Form;
  setSignUpData: Dispatch<SetStateAction<Form>>;
  setStep: Dispatch<SetStateAction<number>>;
}

const defaultValue = {
  step: 1,
  signUpData: {
    username: "",
    email: "",
    password: "",
    tel: "",
    month: "",
    day: "",
    year: "",
  },
};

export const FormContext = createContext<IFormContext>(
  defaultValue as IFormContext
);

export const FormContextProvider = ({ children }: FormContextProps) => {
  const [signUpData, setSignUpData] = useState<Form>({
    username: "",
    email: "",
    password: "",
    tel: "",
    month: "",
    day: "",
    year: "",
  });

  const [step, setStep] = useState<number>(1);

  return (
    <FormContext.Provider value={{ step, signUpData, setSignUpData, setStep }}>
      {children}
    </FormContext.Provider>
  );
};
