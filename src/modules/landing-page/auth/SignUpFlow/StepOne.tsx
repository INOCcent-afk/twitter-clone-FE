import { Input } from "@/ui/Input";
import { Select } from "@/ui/Select";
import { getDays, getYears, months } from "@/utils/datePicker";
import { CloseOutlined, TwitterOutlined } from "@ant-design/icons";
import Link from "next/link";
import React, {
  FC,
  SyntheticEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { FormContext } from "../formContext";

export const StepOne: FC = () => {
  const { signUpData, setSignUpData } = useContext(FormContext);
  const [days, setDays] = useState(getDays(signUpData.month));

  const handleForm = (
    e: SyntheticEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setSignUpData({
      ...signUpData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const years = getYears();

  useEffect(() => {
    setDays(getDays(signUpData.month));
  }, [signUpData.month]);

  return (
    <>
      <Link href="/">
        <a>
          <CloseOutlined className="text-base text-white absolute left-3 top-3 cursor-pointer" />
        </a>
      </Link>
      <div className="w-full text-center">
        <TwitterOutlined className="text-base text-white" />
      </div>
      <h2 className="text-2xl my-4">Create your account</h2>
      <div className="flex flex-col gap-5">
        <Input
          value={signUpData.name}
          onChange={handleForm}
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
          onChange={handleForm}
          required
          placeholder="Phone"
          id="phone"
          type="tel"
          name="tel"
        />
        <div className="">
          <h4 className="font-bold">Date of birth</h4>
          <p className="text-xs text-graySecondary">
            This will not be shown publicly, Confirm your own age, even if this
            account is for a business. a pet. or something else.
          </p>
          <div className="flex justify-between gap-2 my-3">
            <Select name="month" onChange={(e) => handleForm(e)}>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </Select>
            <Select name="day" onChange={handleForm}>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </Select>
            <Select name="year" onChange={handleForm}>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </Select>
          </div>
        </div>
      </div>
    </>
  );
};
