import {
  AlignLeftOutlined,
  BarChartOutlined,
  BellOutlined,
  CommentOutlined,
  DingtalkOutlined,
  FileDoneOutlined,
  HomeOutlined,
  MailOutlined,
  MinusCircleOutlined,
  NumberOutlined,
  QuestionCircleOutlined,
  RocketOutlined,
  SearchOutlined,
  SettingOutlined,
  SwapOutlined,
  TagOutlined,
  ThunderboltOutlined,
  UsbOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import React, { useState } from "react";
import { useClickOutsideHook } from "../hooks/useClickOutsideHook";
import { Button } from "./ Button";
import FocusTrap from "focus-trap-react";
import { CreateTweet } from "./CreateTweet";

const mainPages = [
  { path: "/", name: "Home", icon: <HomeOutlined aria-hidden /> },
  { path: "/explore", name: "Explore", icon: <NumberOutlined aria-hidden /> },
  {
    path: "/notifications",
    name: "Notifications",
    icon: <BellOutlined aria-hidden />,
  },
  { path: "/messages", name: "Messages", icon: <MailOutlined aria-hidden /> },
  { path: "/bookmarks", name: "Bookmarks", icon: <TagOutlined aria-hidden /> },
  { path: "/lists", name: "Lists", icon: <AlignLeftOutlined aria-hidden /> },
  { path: "/profile", name: "Profile", icon: <UserOutlined aria-hidden /> },
];

const secondaryPages = [
  { path: "/topics", name: "Topics", icon: <CommentOutlined aria-hidden /> },
  {
    path: "/moments",
    name: "Moments",
    icon: <ThunderboltOutlined aria-hidden />,
  },
  {
    path: "/newsletters",
    name: "Newsletters",
    icon: <FileDoneOutlined aria-hidden />,
  },
  {
    path: "/twitter-for-professionals",
    name: "Twitter for Professionals",
    icon: <RocketOutlined aria-hidden />,
  },
  {
    path: "/twitter-ads",
    name: "Twitter Ads",
    icon: <SwapOutlined aria-hidden />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <BarChartOutlined aria-hidden />,
  },
];

const displayPages = [
  {
    path: "/settings-and-privacy",
    name: "Settings and privacy",
    icon: <SettingOutlined aria-hidden />,
  },
  {
    path: "/help-center",
    name: "Help Center",
    icon: <QuestionCircleOutlined aria-hidden />,
  },
  { path: "/display", name: "Display", icon: <DingtalkOutlined aria-hidden /> },
  {
    path: "/keyboard-shortcuts",
    name: "Keyboard shorcuts",
    icon: <UsbOutlined aria-hidden />,
  },
];

export const SidebarNavigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userSettingNode = useClickOutsideHook(() => {
    setIsModalOpen(false);
  });

  const onEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <nav>
        <ul className="ml-[-5px]">
          <li className="text-2xl my-4 leading-0 lg:hidden">
            <Link href="/explore">
              <a className="">
                <span className="flex items-center justify-center gap-5 hover:bg-secondary w-fit px-4 py-2 rounded-3xl ease-out duration-100">
                  <span className="sr-only">search</span>
                  <SearchOutlined aria-hidden />
                </span>
              </a>
            </Link>
          </li>
          {mainPages.map((link) => (
            <li className="text-2xl my-4 leading-0" key={link.name}>
              <Link href={link.path}>
                <a className="">
                  <span className="flex items-center justify-center gap-5 hover:bg-secondary w-fit px-4 py-2 rounded-3xl ease-out duration-100">
                    {link.icon}
                    <span className="hidden lg:block">{link.name}</span>
                  </span>
                </a>
              </Link>
            </li>
          ))}
          <li className="flex items-center gap-5 text-2xl relative">
            <button
              className="flex items-center gap-5 hover:bg-secondary w-fit px-4 py-2 rounded-3xl ease-out duration-100"
              onClick={() => setIsModalOpen(true)}
            >
              <MinusCircleOutlined aria-hidden />
              <span className="text-gray hidden lg:block">More</span>
            </button>
            {isModalOpen && (
              <MoreNavModal closeModal={onEsc} ref={userSettingNode} />
            )}
          </li>
          <li className="mt-4 justify-center lg:hidden">
            <CreateTweet />
          </li>
        </ul>
      </nav>
      <div className="mt-8 justify-center hidden lg:flex">
        <Button>Tweet</Button>
      </div>
    </>
  );
};

interface MoreNavModalProps {
  closeModal: (e: KeyboardEvent) => void;
}

const MoreNavModal = React.forwardRef<HTMLUListElement, MoreNavModalProps>(
  ({ closeModal }, ref) => {
    return (
      <FocusTrap>
        <div
          className="absolute bottom-[-100px] z-50"
          role="dialog"
          aria-labelledby="navigation"
          id="moreNavModal"
        >
          <h1 id="navigation"></h1>
          <ul
            ref={ref}
            className="text-base bg-black rounded-md left-7 modal-boxShadow min-w-[200px]"
            onKeyDown={(e: any) => closeModal(e)}
          >
            {secondaryPages.map((link) => (
              <li
                className="focus: hover:bg-secondary ease-out duration-100"
                key={link.name}
              >
                <Link href={link.path}>
                  <a
                    className="flex items-center gap-5 w-full py-3 px-3"
                    aria-label="internal-link"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                </Link>
              </li>
            ))}
            <hr />
            {displayPages.map((link) => (
              <li
                className="flex items-center gap-5 hover:bg-secondary ease-out duration-100"
                key={link.name}
              >
                <Link href={link.path}>
                  <a className="flex items-center py-3 px-3 gap-5 w-full">
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </FocusTrap>
    );
  }
);
