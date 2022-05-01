import React, { ComponentPropsWithoutRef, FC } from "react";

export const Select: FC<ComponentPropsWithoutRef<"select">> = ({
  children,
  ...props
}) => {
  return (
    <select
      name="Month"
      className="
                form-select 
                appearance-none
                block
                w-full
                px-3 py-1.5
                text-base font-normal text-gray-700 text-black
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      {...props}
    >
      {children}
    </select>
  );
};
