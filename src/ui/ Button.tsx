import { LoadingOutlined } from "@ant-design/icons";
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
  ReactNode,
} from "react";

const sizeClassnames = {
  big: "py-4 px-24 text-base rounded-3xl font-bold",
  small: "px-8 py-2 text-sm font-bold rounded-3xl",
  tiny: "px-6 py-2 text-base rounded-3xl",
};

const colorClassnames = {
  primary: "bg-primary text-white hover:opacity-80",
  transparent: "bg-black text-white hover:bg-secondary",
  white: "bg-white text-black hover:bg-primary hover:text-white",
  blackOutline:
    "bg-black text-white border border-graySecondary hover:border-primary hover:bg-primary hover:text-white",
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
  fit?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size = "big",
      color = "primary",
      fit = false,
      disabled,
      loading,
      icon,
      transition = true,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`${fit ? "w-fit" : "w-full"} relative 
        ${colorClassnames[color]} ${sizeClassnames[size]} 
      rounded-3xl ${transition ? `ease-out duration-200` : ``} 
      ${disabled ? `opacity-80 cursor-no-drop` : ``}`}
        {...props}
        data-testid="button"
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
            <LoadingOutlined aria-hidden data-testid="loadingIcon" />
          </span>
        ) : null}
      </button>
    );
  }
);
