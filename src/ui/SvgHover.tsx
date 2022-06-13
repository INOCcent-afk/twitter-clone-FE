import React, { FC, ReactNode } from "react";
import { ToolTip } from "./ToolTip";

const colorClassNames = {
  primary: "hover:bg-primary-900",
  secondary: "hover:bg-secondary",
  black: "hover:bg-black",
  white: "hover:bg-white",
  green: "hover:bg-green-900",
  red: "hover:bg-red-900",
};

interface SvgHoverProps {
  name: string;
  children: ReactNode;
  hoverColor: keyof typeof colorClassNames;
  tooltip?: boolean;
  toolTipPosition?: number; // add conditional typings
}

export const SvgHover: FC<SvgHoverProps> = ({
  name,
  children,
  hoverColor,
  tooltip = false,
  toolTipPosition,
}) => {
  return (
    <div
      className={`${colorClassNames[hoverColor]} p-2 rounded-full flex items-center justify-center w-fit ease-in-out duration-300 relative`}
      data-testid="svg-hover"
    >
      <span className="sr-only" data-testid="svg-aria">
        {name}
      </span>
      <div className="leading-[0px] group-focus-visible:outline outline-1 outline-offset-2 outline-white">
        {children}
      </div>
      {tooltip && <ToolTip position={toolTipPosition}>{name}</ToolTip>}
    </div>
  );
};
