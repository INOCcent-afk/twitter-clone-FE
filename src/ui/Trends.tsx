import { MoreOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const Trends = () => {
  const router = useRouter();
  return (
    <aside className="bg-secondary rounded-lg  py-3 ">
      <header className="px-3 pb-2">
        <h2>Trends for you</h2>
      </header>
      <div className="flex flex-col">
        <Link href="/">
          <a>
            <div className="flex justify-between px-3 py-2 hover:bg-accentGray">
              <div className="flex flex-col text-sm">
                <span className="flex text-graySecondary">
                  <Link href="/" passHref>
                    <button
                      onClick={() => router.push("/")}
                      className="hover:text-primary"
                      role="link"
                    >
                      Politics
                    </button>
                  </Link>
                  <span aria-label="presentation">.</span>
                  <Link href="/" passHref>
                    <button
                      onClick={() => router.push("/")}
                      className="hover:text-primary"
                      role="link"
                    >
                      Trending
                    </button>
                  </Link>
                </span>
                <span className="text-gray">Pacquiao</span>
                <span className="text-graySecondary">2,577 Tweets</span>
              </div>
              <div className="">
                <button>
                  <span className="sr-only">Show more</span>
                  <MoreOutlined />
                </button>
              </div>
            </div>
          </a>
        </Link>
      </div>
      <div className="py-2 px-3">
        <Link href="/">
          <a className="text-primary text-base">Show more</a>
        </Link>
      </div>
    </aside>
  );
};
