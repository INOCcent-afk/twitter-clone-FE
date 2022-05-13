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
    <div>
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
              aria-expanded={isModalOpen}
              aria-controls="moreNavModal"
            >
              <MinusCircleOutlined aria-hidden />
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
    </div>
  );
};

interface MoreNavModalProps {
  closeModal: (e: KeyboardEvent) => void;
}

const MoreNavModal = React.forwardRef<HTMLUListElement, MoreNavModalProps>(
  ({ closeModal }, ref) => {
    return (
      <FocusTrap>
        <div aria-modal={true} id="moreNavModal">
          <ul
            ref={ref}
            className="absolute text-base bg-black rounded-md overflow-hidden bottom-0 left-7 modal-boxShadow z-50"
            onKeyDown={(e: any) => closeModal(e)}
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
          </ul>
        </div>
      </FocusTrap>
    );
  }
);
