import { CloseCircleFilled, SearchOutlined } from "@ant-design/icons";
import React, { ComponentPropsWithoutRef, FC } from "react";

interface SearchProps extends ComponentPropsWithoutRef<"input"> {
  clearAction: () => void;
}

export const Search: FC<SearchProps> = ({ clearAction, ...props }) => {
  return (
    <div className="flex items-center justify-between gap-2 bg-secondary pointer-events-none focus-within:outline-1 focus-within:outline focus-within:text-primary outline-primary rounded-2xl py-3 px-5">
      <SearchOutlined className="text-xl leading-[0px] pointer-events-auto" />
      <div className="w-full">
        <input
          data-testid="test-search-input"
          className="bg-secondary pointer-events-auto focus:outline-none w-full text-white"
          type="text"
          {...props}
        />
      </div>
      {props.value && (
        <button
          className="leading-[0px] pointer-events-auto"
          onClick={clearAction}
          data-testid="test-clear-btn"
        >
          <span className="sr-only">clear</span>
          <CloseCircleFilled className="text-xl leading-[0px]" />
        </button>
      )}
    </div>
  );
};
