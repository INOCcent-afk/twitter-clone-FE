import { useClickOutsideHook } from "@/hooks/useClickOutsideHook";
import { useMe } from "@/services/react-query/me";
import { Avatar } from "@/ui/Avatar";
import {
  CloseOutlined,
  ThunderboltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import FocusTrap from "focus-trap-react";
import Link from "next/link";
import React, { useState } from "react";
import { Header } from "../../ui/headers/components/Header";
import { SvgHover } from "../../ui/SvgHover";

export const HomePageHeader = () => {
  const { data: meData } = useMe();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sideBarMobileNode = useClickOutsideHook(() => {
    setIsSidebarOpen(false);
    document.body.style.overflow = "";
  });

  const onEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsSidebarOpen(false);
      document.body.style.overflow = "";
    }
  };

  return (
    <>
      <Header>
        <div className="flex items-center justify-between w-full px-4">
          <div className="flex items-center gap-4">
            <div className="sm:hidden">
              {meData ? (
                <button>
                  <Avatar
                    username={meData?.data.username}
                    size={40}
                    action={() => {
                      setIsSidebarOpen(true);
                      document.body.style.overflow = "hidden";
                    }}
                  />
                </button>
              ) : (
                <Avatar username="" size={30} />
              )}
            </div>
            <h2>Latests Tweets</h2>
          </div>
          <button className="group focus-visible:outline-none">
            <SvgHover name="Latest tweets" hoverColor="secondary" tooltip>
              <ThunderboltOutlined
                className="text-2xl leading-[0px]"
                aria-hidden
              />
            </SvgHover>
          </button>
        </div>
      </Header>

      {isSidebarOpen && (
        <FocusTrap>
          <div className="fixed h-full top-0 left-0 bg-blue-400 bg-opacity-80 w-full z-[100] sm:hidden">
            <div
              role="dialog"
              ref={sideBarMobileNode}
              className="bg-black h-full w-[300px] pt-5 pb-1 overflow-y-auto"
              onKeyDown={(e: any) => onEsc(e)}
            >
              <div className="flex justify-between items-center px-5">
                <h5>Account info</h5>
                <button
                  className="flex"
                  type="button"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <CloseOutlined />
                </button>
              </div>

              <div className="px-5">
                <div className="my-6 mb-3">
                  {meData ? (
                    <Avatar
                      username={meData?.data.username}
                      id={meData?.data.id}
                      size={40}
                      isLink
                    />
                  ) : (
                    <Avatar username="" size={40} />
                  )}
                  <div className="text-sm">
                    <h6>{meData?.data.username}</h6>
                    <span className="text-graySecondary">
                      @{meData?.data.username}
                    </span>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex items-center gap-1">
                    <h6>{meData ? meData?.data.followings.length : 0}</h6>
                    <span className="text-graySecondary">Following</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <h6>{meData ? meData?.data.followers.length : 0}</h6>
                    <span className="text-graySecondary">Followers</span>
                  </div>
                </div>
              </div>

              <ul className="my-6">
                {Array.from({ length: 6 }, (_, i) => (
                  <li key={i}>
                    <Link href="/">
                      <a className="flex items-center gap-3 py-3 px-5 hover:bg-secondary ease-out duration-200">
                        <UserOutlined />
                        <span>Profile</span>
                      </a>
                    </Link>
                  </li>
                ))}
                <hr />
                {Array.from({ length: 3 }, (_, i) => (
                  <li key={i}>
                    <Link href="/">
                      <a className="flex items-center gap-3 py-3 px-5 hover:bg-secondary ease-out duration-200">
                        <UserOutlined />
                        <span>Profile</span>
                      </a>
                    </Link>
                  </li>
                ))}
                <hr />
                {Array.from({ length: 2 }, (_, i) => (
                  <li key={i}>
                    <Link href="/">
                      <a className="flex items-center gap-3 py-3 px-5 hover:bg-secondary ease-out duration-200">
                        <UserOutlined />
                        <span>Profile</span>
                      </a>
                    </Link>
                  </li>
                ))}
                <hr />
                {Array.from({ length: 3 }, (_, i) => (
                  <li key={i}>
                    <Link href="/">
                      <a className="flex items-center gap-3 py-3 px-5 hover:bg-secondary ease-out duration-200">
                        <UserOutlined />
                        <span>Profile</span>
                      </a>
                    </Link>
                  </li>
                ))}
                <hr />
                <li className="">
                  <button className="w-full text-left py-3 px-5 hover:bg-secondary ease-out duration-200">
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </FocusTrap>
      )}
    </>
  );
};
