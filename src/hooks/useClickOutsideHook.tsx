import React from "react";

export const useClickOutsideHook = (handler: () => void) => {
  let domNode = React.useRef<any>();

  React.useEffect(() => {
    let maybeHandler = (event: MouseEvent) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};
