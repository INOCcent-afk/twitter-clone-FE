import React, { FC } from "react";

export const Header: FC = ({ children }) => {
  return <div className="sticky top-0 h-20 py-2">{children}</div>;
};
