import { useClickOutsideHook } from "@/hooks/useClickOutsideHook";
import FocusTrap from "focus-trap-react";
import React, { FC } from "react";

interface ModalProps {
  closeModal: () => void;
  onKeyDown: (e: any) => void;
}

export const Modal: FC<ModalProps> = ({ closeModal, onKeyDown, children }) => {
  const userSettingNode = useClickOutsideHook(() => {
    closeModal();
  });

  return (
    <div
      className="fixed h-screen top-0 w-full flex items-center justify-center z-50 bg-graySecondary-500"
      onKeyDown={onKeyDown}
    >
      <FocusTrap>
        <div className="bg-black rounded-lg opacity-100" ref={userSettingNode}>
          {children}
        </div>
      </FocusTrap>
    </div>
  );
};
