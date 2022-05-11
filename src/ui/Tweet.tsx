import {
  CommentOutlined,
  HeartOutlined,
  MoreOutlined,
  RetweetOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { dummyImageURl } from "../utils/constants";
import { Avatar } from "./Avatar";
import { SvgHover } from "./SvgHover";

export const Tweet: FC = React.memo(() => {
  const router = useRouter();

  const closeClicked = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
  };
  return (
    <Link href="/">
      <div
        tabIndex={0}
        role="link"
        aria-label="tweet"
        onClick={() => router.push("/")}
      >
        <article className="flex gap-3 px-3 pt-3 pb-1 border-b border-b-secondary">
          <Avatar image={dummyImageURl} initial="D" />
          <div className="w-full">
            <div className="flex">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-1 text-graySecondary">
                  <Link href="/">
                    <a className="text-gray hover:!underline hover:underline-offset-1">
                      GoLimitless
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="hover:!underline hover:underline-offset-1">
                      @GoLimitless
                    </a>
                  </Link>
                  <span role="presentation" className="mb-1">
                    .
                  </span>
                  <Link href="/">
                    <a className="hover:!underline hover:underline-offset-1">
                      20h
                    </a>
                  </Link>
                </div>
                <button
                  onClick={closeClicked}
                  className="group relative text-graySecondary flex items-center"
                >
                  <SvgHover hoverColor="primary" name="More">
                    <MoreOutlined className="group-hover:text-primary duration-300 leading-[0px] text-lg" />
                  </SvgHover>
                </button>
              </div>
            </div>
            <div className="text-gray">
              <p>Talk less. Do more.</p>
            </div>
            <div className="flex items-center justify-between my-1 mr-20 ml-[-5px]">
              <button
                onClick={closeClicked}
                className="group relative text-graySecondary flex items-center"
              >
                <SvgHover hoverColor="primary" name="comments">
                  <CommentOutlined className="group-hover:text-primary duration-300" />
                </SvgHover>
                <span className="inline-block text-xs group-hover:text-primary duration-300 ml-2">
                  3
                </span>
              </button>
              <button
                onClick={closeClicked}
                className="group relative text-graySecondary flex items-center"
              >
                <SvgHover hoverColor="green" name="comments">
                  <RetweetOutlined className="group-hover:text-green duration-300" />
                </SvgHover>
                <span className="inline-block text-xs group-hover:text-green duration-300 ml-2">
                  3
                </span>
              </button>
              <button
                onClick={closeClicked}
                className="group relative text-graySecondary flex items-center"
              >
                <SvgHover hoverColor="red" name="comments">
                  <HeartOutlined className="group-hover:text-red duration-300" />
                </SvgHover>
                <span className="inline-block text-xs group-hover:text-red duration-300 ml-3">
                  3
                </span>
              </button>
              <button onClick={closeClicked} className="relative group">
                <SvgHover hoverColor="primary" name="comments">
                  <ShareAltOutlined className="text-graySecondary group-hover:text-primary duration-300" />
                </SvgHover>
              </button>
            </div>
          </div>
        </article>
      </div>
    </Link>
  );
});
