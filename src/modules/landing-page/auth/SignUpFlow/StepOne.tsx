import { Button } from "@/ui/ Button";
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
  const { signUpData, setSignUpData, setStep } = useContext(FormContext);
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

  const formIsFilled =
    signUpData.username &&
    signUpData.tel &&
    signUpData.day &&
    signUpData.month &&
    signUpData.year;

  useEffect(() => {
    setSignUpData(signUpData);
  }, [signUpData, setSignUpData, setStep]);

  return (
    <>
      <Link href="/" passHref>
        <CloseOutlined
          role="link"
          tabIndex={0}
          className="text-base text-white absolute left-3 top-3 cursor-pointer"
        />
      </Link>
      <div className="w-full text-center">
        <TwitterOutlined className="text-base text-white" aria-hidden />
      </div>
      <h2 className="text-2xl my-4">Create your account</h2>
      <div className="flex flex-col gap-5">
        <Input
          value={signUpData.username}
          onChange={handleForm}
          maxLength={50}
          required
          placeholder="Username"
          id="username"
          name="username"
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
          <h4 className="">Date of birth</h4>
          <p className="text-xs text-graySecondary">
            This will not be shown publicly, Confirm your own age, even if this
            account is for a business. a pet. or something else.
          </p>
          <div className="flex justify-between gap-2 my-3">
            <Select
              value={signUpData.month}
              name="month"
              onChange={(e) => handleForm(e)}
              required
            >
              <option value="" hidden>
                Month
              </option>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </Select>
            <Select
              value={signUpData.day}
              name="day"
              onChange={handleForm}
              required
            >
              <option value="" hidden>
                Day
              </option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </Select>
            <Select
              value={signUpData.year}
              name="year"
              onChange={handleForm}
              required
            >
              <option value="" hidden>
                Year
              </option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </Select>
          </div>
          <div className="mt-16">
            <Button
              type="button"
              onClick={() => setStep(2)}
              disabled={!formIsFilled}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
