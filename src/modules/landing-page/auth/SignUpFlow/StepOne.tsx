import { Input } from "@/ui/Input";
import React, { FC, useContext } from "react";
import { FormContext } from "../formContext";

export const StepOne: FC = () => {
  const { user } = useContext(FormContext);

  console.log(user);
  return (
    <>
      <h2>Create your account</h2>

      {/* <Input
        value={e}
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
        value={formData.tel}
        onChange={(e) => handleForm(e)}
        required
        placeholder="Phone"
        id="phone"
        type="tel"
        name="tel"
      /> */}
    </>
  );
};
