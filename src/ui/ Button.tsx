import { LoadingOutlined } from "@ant-design/icons";
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ReactNode,
} from "react";

const sizeClassnames = {
  big: "py-4 px-24 text-base rounded-3xl font-bold hover:bg-secondary",
  small: "px-4 py-2 text-2xl rounded-3xl hover:bg-secondary",
  tiny: "px-6 py-2 text-base rounded-3xl hover:bg-secondary",
};

const colorClassnames = {
  primary: "bg-primary text-white",
  transparent: "bg-black text-white",
};

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  size?: keyof typeof sizeClassnames;
  color?: keyof typeof colorClassnames;
  loading?: boolean;
  icon?: ReactNode;
  transition?: boolean;
};

export const Button: FC<ButtonProps> = ({
  children,
  size = "big",
  color = "primary",
  disabled,
  loading,
  icon,
  className = "",
  transition,
  ...props
}) => {
  return (
    <button
      disabled={disabled || loading}
      className={`w-fit relative ${colorClassnames[color]} ${
        sizeClassnames[size]
      } 
      rounded-3xl ${transition ? `ease-out duration-200` : ``} 
      ${disabled ? `opacity-80 pointer-events-none` : ``}`}
      {...props}
    >
      <span
        className={`flex items-center justify-center gap-5 ${
          loading ? `opacity-0` : ``
        }`}
      >
        {icon}
        <span>{children}</span>
      </span>
      {loading ? (
        <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <LoadingOutlined />
        </span>
      ) : null}
    </button>
  );
};
