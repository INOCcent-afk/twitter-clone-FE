import React, { ComponentPropsWithoutRef, FC } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  countString?: boolean;
  error?: boolean;
  errorMessage?: string;
}

export const Input: FC<InputProps> = ({
  error = false,
  countString = false,
  errorMessage,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);

  return (
    <>
      <div
        className={`relative px-3 pt-8 pb-2 rounded-md border 
        ${
          error
            ? "border-red-100 focus-within:border-red-100"
            : "border-graySecondary focus-within:outline focus-within:outline-primary focus-within:outline-1 focus-within:border-primary"
        }
    `}
        data-testid="input-container"
      >
        <input
          className="peer w-full bg-black text-gray placeholder:opacity-0 focus:outline-0"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
        <label
          className={`absolute text-graySecondary top-4 left-3 text-xl
        transition-all duration-150 ease-in-out pointer-events-none 
        ${focused || props.value ? "top-1 text-sm" : ""}
        ${
          error ? "peer-focus:text-red-100 text-sm" : "peer-focus:text-primary"
        }`}
          htmlFor={props.id}
          data-testid="input-label"
        >
          {props.placeholder}
        </label>
        {countString && props.value && (
          <span
            className="text-graySecondary absolute top-1 right-4 text-sm"
            data-testid="input-length-indicator"
          >
            {typeof props.value === "string" && props.value?.length}/
            {props.maxLength}
          </span>
        )}
      </div>
      {error && (
        <span
          className="text-sm text-red-100"
          data-testid="input-error-message"
        >
          {errorMessage}
        </span>
      )}
    </>
  );
};
