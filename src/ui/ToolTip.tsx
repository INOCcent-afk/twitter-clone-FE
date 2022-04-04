import React, { FC, ReactNode } from "react";

interface ToolTipProps {
  position?: number;
  children: ReactNode;
}

export const ToolTip: FC<ToolTipProps> = ({ position = -20, children }) => {
  return (
    <div
      className="absolute bg-primary rounded-sm text-white group-hover:opacity-100 opacity-0 text-xs p-1 ease-in-out duration-100 delay-300 whitespace-nowrap"
      style={{ bottom: position }}
    >
      {children}
    </div>
  );
};
