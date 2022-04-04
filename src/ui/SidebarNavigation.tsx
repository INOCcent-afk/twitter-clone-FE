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

const mainPages = [
  { path: "/", name: "Home", icon: <HomeOutlined /> },
  { path: "/", name: "Explore", icon: <NumberOutlined /> },
  { path: "/", name: "Notifications", icon: <BellOutlined /> },
  { path: "/", name: "Messages", icon: <MailOutlined /> },
  { path: "/", name: "Bookmarks", icon: <TagOutlined /> },
  { path: "/", name: "Lists", icon: <AlignLeftOutlined /> },
  { path: "/", name: "Profile", icon: <UserOutlined /> },
];

const secondaryPages = [
  { path: "/", name: "Topics", icon: <CommentOutlined /> },
  { path: "/", name: "Moments", icon: <ThunderboltOutlined /> },
  { path: "/", name: "Newsletters", icon: <FileDoneOutlined /> },
  { path: "/", name: "Twitter for Professionals", icon: <RocketOutlined /> },
  { path: "/", name: "Twitter Ads", icon: <SwapOutlined /> },
  { path: "/", name: "Analytics", icon: <BarChartOutlined /> },
];

const displayPages = [
  { path: "/", name: "Settings and privacy", icon: <SettingOutlined /> },
  { path: "/", name: "Help Center", icon: <QuestionCircleOutlined /> },
  { path: "/", name: "Display", icon: <DingtalkOutlined /> },
  { path: "/", name: "Keyboard shorcuts", icon: <UsbOutlined /> },
];

export const SidebarNavigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <aside>
      <nav>
        <ul>
          {mainPages.map((link) => (
            <li className="text-2xl my-5" key={link.name}>
              <Link href={link.path}>
                <a className="flex items-center gap-5 hover:bg-secondary w-fit px-4 py-2 rounded-3xl ease-out duration-100">
                  {link.icon}
                  <span className="text-gray">{link.name}</span>
                </a>
              </Link>
            </li>
          ))}
          <li className="flex items-center gap-5 text-2xl relative">
            <MinusCircleOutlined />
            <button onClick={() => setIsModalOpen(true)}>More</button>
            {isModalOpen && <MoreNavModal />}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

const MoreNavModal = () => {
  return (
    <div className="absolute text-base bg-black rounded-md overflow-hidden top-0 bs">
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
  );
};
