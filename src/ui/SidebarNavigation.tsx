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

const mainPages = [
  { path: "/", name: "Home", icon: <HomeOutlined /> },
  { path: "/explore", name: "Explore", icon: <NumberOutlined /> },
  { path: "/notifications", name: "Notifications", icon: <BellOutlined /> },
  { path: "/messages", name: "Messages", icon: <MailOutlined /> },
  { path: "/bookmarks", name: "Bookmarks", icon: <TagOutlined /> },
  { path: "/lists", name: "Lists", icon: <AlignLeftOutlined /> },
  { path: "/profile", name: "Profile", icon: <UserOutlined /> },
];

const secondaryPages = [
  { path: "/topics", name: "Topics", icon: <CommentOutlined /> },
  { path: "/moments", name: "Moments", icon: <ThunderboltOutlined /> },
  { path: "/newsletters", name: "Newsletters", icon: <FileDoneOutlined /> },
  {
    path: "/twitter-for-professionals",
    name: "Twitter for Professionals",
    icon: <RocketOutlined />,
  },
  { path: "/twitter-ads", name: "Twitter Ads", icon: <SwapOutlined /> },
  { path: "/analytics", name: "Analytics", icon: <BarChartOutlined /> },
];

const displayPages = [
  {
    path: "/settings-and-privacy",
    name: "Settings and privacy",
    icon: <SettingOutlined />,
  },
  {
    path: "/help-center",
    name: "Help Center",
    icon: <QuestionCircleOutlined />,
  },
  { path: "/display", name: "Display", icon: <DingtalkOutlined /> },
  {
    path: "/keyboard-shortcuts",
    name: "Keyboard shorcuts",
    icon: <UsbOutlined />,
  },
];

export const SidebarNavigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userSettingNode = useClickOutsideHook(() => {
    setIsModalOpen(false);
  });

  const onEsc = (e: any) => {
    if (e.key === "Escape") {
      setIsModalOpen(false);
    }
  };

  return (
    <aside>
      <nav>
        <ul className="ml-[-5px]">
          {mainPages.map((link) => (
            <li className="text-2xl my-2 leading-0" key={link.name}>
              <Link href={link.path}>
                <a className="">
                  <span className="flex items-center justify-center gap-5 hover:bg-secondary w-fit px-4 py-2 rounded-3xl ease-out duration-100">
                    {link.icon}
                    <span>{link.name}</span>
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
              <MinusCircleOutlined />
              <span className="text-gray">More</span>
            </button>
            {isModalOpen && (
              <MoreNavModal closeModal={onEsc} ref={userSettingNode} />
            )}
          </li>
        </ul>
      </nav>
      <div className="mt-8 flex justify-center">
        <Button>Tweet</Button>
      </div>
    </aside>
  );
};

interface MoreNavModalProps {
  closeModal: (e: any) => void;
}

const MoreNavModal = React.forwardRef<HTMLDivElement, MoreNavModalProps>(
  ({ closeModal }, ref) => {
    return (
      <FocusTrap>
        <div
          aria-modal={true}
          ref={ref}
          className="absolute text-base bg-black rounded-md overflow-hidden bottom-0 left-7 modal-boxShadow z-50"
          onKeyDown={closeModal}
        >
          {secondaryPages.map((link) => (
            <li
              className="py-3 px-3 hover:bg-secondary ease-out duration-100"
              key={link.name}
            >
              <Link href={link.path}>
                <a className="flex items-center gap-5">
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              </Link>
            </li>
          ))}
          <hr />
          {displayPages.map((link) => (
            <li
              className="flex items-center gap-5 py-3 px-3 hover:bg-secondary ease-out duration-100"
              key={link.name}
            >
              <Link href={link.path}>
                <a className="flex items-center gap-5">
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              </Link>
            </li>
          ))}
        </div>
      </FocusTrap>
    );
  }
);
