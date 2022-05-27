import { useClickOutsideHook } from "@/hooks/useClickOutsideHook";
import { useMe } from "@/services/react-query/me";
import { logout } from "@/services/resources/auth";
import {
  CaretDownOutlined,
  CheckOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import FocusTrap from "focus-trap-react";
import React, { FC, useState } from "react";
import { Avatar } from "./Avatar";

export const UserMenu: FC = () => {
  const [modal, setModal] = useState(false);
  const { data, isLoading } = useMe();

  const userSettingNode = useClickOutsideHook(() => {
    setModal(false);
  });

  const onEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setModal(false);
    }
  };

  if (isLoading) {
    return (
      <div className="w-[50px] h-[50px] rounded-full bg-secondary lg:px-2 lg:py-7 lg:w-full"></div>
    );
  }

  return (
    <>
      {data && (
        <div className="w-full">
          <div className="relative">
            <button
              type="button"
              className="flex justify-between w-full
                    bg-black hover:bg-secondary lg:px-3 lg:py-2 rounded-3xl 
                    cursor-pointer ease-out duration-200"
              onClick={() => setModal(true)}
            >
              <div className="flex gap-3">
                <Avatar
                  username={data?.data.username}
                  id={data?.data.id}
                  size={50}
                />
                <div className="hidden lg:flex flex-col">
                  <span className="font-bold">{data?.data.username}</span>
                  <span className="text-graySecondary">
                    @{data?.data.username}
                  </span>
                </div>
              </div>
              <div className="hidden lg:block">
                <MoreOutlined aria-hidden />
              </div>
            </button>
            {modal && (
              <FocusTrap className={`${modal ? "hidden" : ""}`}>
                <div className="absolute top-[-160px] modal-boxShadow z-50 bg-black rounded-2xl min-w-[300px]">
                  <ul
                    ref={userSettingNode}
                    onKeyDown={(e: any) => onEsc(e)}
                    className="relative py-2"
                  >
                    <div className="flex justify-between w-full p-4 rounded-3xl gap-10">
                      <div className="flex gap-3">
                        <Avatar
                          username={data?.data.username as string}
                          id={data?.data.id}
                          size={50}
                        />
                        <div className="flex flex-col">
                          <span className="font-bold">
                            {data?.data.username}
                          </span>
                          <span className="text-graySecondary">
                            @{data?.data.username}
                          </span>
                        </div>
                      </div>
                      <div className="text-primary">
                        <CheckOutlined aria-hidden />
                      </div>
                    </div>
                    <hr />
                    <li>
                      <button
                        className="text-left p-4 hover:bg-secondary w-full"
                        onClick={logout}
                      >
                        Log out @{data?.data.username}
                      </button>
                    </li>
                    <div className="absolute carret-shadow text-black z-50 bottom-[-16px] left-8 left-1/2 text-2xl leading-[0px] translate-x-[-50%]">
                      <CaretDownOutlined aria-hidden />
                    </div>
                  </ul>
                </div>
              </FocusTrap>
            )}
          </div>
        </div>
      )}
    </>
  );
};
