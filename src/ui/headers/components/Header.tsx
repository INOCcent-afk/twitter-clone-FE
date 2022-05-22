import React, { FC } from "react";

export const Header: FC = ({ children }) => {
  return (
    <div className="sticky top-0  lg:h-20 py-2 bg-black z-50">{children}</div>
  );
};
