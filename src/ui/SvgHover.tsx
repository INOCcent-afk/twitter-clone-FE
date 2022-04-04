import React, { FC, ReactNode } from "react";
import { ToolTip } from "./ToolTip";

interface SvgHoverProps {
  name: string;
  children: ReactNode;
  hoverColor: "primary" | "secondary" | "black" | "white";
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
  const hc = `hover:bg-${hoverColor}`;

  return (
    <div
      className={`${hc} p-2 rounded-full flex items-center justify-center w-fit ease-in-out duration-300 relative`}
    >
      <span className="sr-only">{name}</span>
      {children}
      {tooltip && <ToolTip position={toolTipPosition}>{name}</ToolTip>}
    </div>
  );
};
