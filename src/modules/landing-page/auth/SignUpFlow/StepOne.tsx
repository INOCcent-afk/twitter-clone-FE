import { Input } from "@/ui/Input";
import React, { FC, SyntheticEvent, useContext } from "react";
import { FormContext } from "../formContext";

export const StepOne: FC = () => {
  const { signUpData, setSignUpData } = useContext(FormContext);

  const handleForm = (e: SyntheticEvent<HTMLInputElement>): void => {
    console.log(e.currentTarget.name);

    setSignUpData({
      ...signUpData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <>
      <h2>Create your account</h2>
      <Input
        value={signUpData.name}
        onChange={(e) => handleForm(e)}
        maxLength={50}
        required
        placeholder="Name"
        id="name"
        name="name"
        countString
        type="text"
      />
      <Input
        value={signUpData.tel}
        onChange={(e) => handleForm(e)}
        required
        placeholder="Phone"
        id="phone"
        type="tel"
        name="tel"
      />
    </>
  );
};
