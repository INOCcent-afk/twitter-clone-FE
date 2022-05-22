import {
  BellOutlined,
  HomeOutlined,
  MailOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import React from "react";

export const MobileNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-black sm:hidden z-50">
      <hr className="sm:hidden" />
      <ul className="flex items-center justify-around py-3 text-2xl">
        <li>
          <Link href="/">
            <a className="">
              <span className="flex items-center justify-center gap-5 hover:bg-secondary w-fit px-2 py-2 rounded-full ease-out duration-100">
                <span className="sr-only">Home</span>
                <HomeOutlined aria-hidden />
              </span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="">
              <span className="flex items-center justify-center gap-5 hover:bg-secondary w-fit  px-2 py-2  rounded-full ease-out duration-100">
                <span className="sr-only">Search</span>
                <SearchOutlined aria-hidden />
              </span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="">
              <span className="flex items-center justify-center gap-5 hover:bg-secondary w-fit  px-2 py-2  rounded-full ease-out duration-100">
                <span className="sr-only">Notification</span>
                <BellOutlined aria-hidden />
              </span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="">
              <span className="flex items-center justify-center gap-5 hover:bg-secondary w-fit  px-2 py-2  rounded-full ease-out duration-100">
                <span className="sr-only">Messages</span>
                <MailOutlined aria-hidden />
              </span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
