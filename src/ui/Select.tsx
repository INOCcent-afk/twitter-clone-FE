import React, { ComponentPropsWithoutRef, FC } from "react";

export const Select: FC<ComponentPropsWithoutRef<"select">> = ({
  children,
  ...props
}) => {
  return (
    <select
      className="
                form-select 
                cursor-pointer
                appearance-none
                block
                w-full
                px-3 py-1.5
                text-base font-normal text-gray-700 text-black
                bg-white bg-clip-padding bg-no-repeat
                border-2 border-solid
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
      {...props}
      style={{
        backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`,
        backgroundPositionX: "100%",
        backgroundPositionY: 5,
      }}
    >
      {children}
    </select>
  );
};
