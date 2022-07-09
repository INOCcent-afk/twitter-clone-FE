import {
  CommentOutlined,
  HeartFilled,
  HeartOutlined,
  MoreOutlined,
  RetweetOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import React, { FC, SyntheticEvent } from "react";
import { Avatar } from "./Avatar";
import { SvgHover } from "./SvgHover";
import Moment from "react-moment";

interface TweetProps {
  id: string;
  text: string;
  createdAt: string;
  comments: number;
  author: string;
  image?: string;
}

export const Tweet: FC<TweetProps> = React.memo(
  ({ text, image, createdAt, comments, author, id }) => {
    const closeClicked = (e: SyntheticEvent) => {
      e.stopPropagation();
      e.preventDefault();
    };

    return (
      <Link href="/" passHref>
        <a>
          <article className="flex gap-3 px-3 pt-3 bg-black pb-1 border-b border-b-secondary">
            <Avatar image={image} username={author} isLink />
            <div className="w-full">
              <div className="flex">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-1 text-graySecondary">
                    <Link href="/" passHref>
                      <button
                        role="link"
                        className="text-gray hover:!underline hover:underline-offset-1"
                      >
                        {author}
                      </button>
                    </Link>
                    <span role="presentation" className="mb-1">
                      .
                    </span>
                    <span className="text-sm leading-[0px]">
                      <Moment fromNow date={createdAt} />
                    </span>
                  </div>
                  <button
                    onClick={closeClicked}
                    className="group relative text-graySecondary flex items-center focus-visible:outline-none"
                  >
                    <SvgHover hoverColor="primary" name="More">
                      <MoreOutlined
                        className="group-hover:text-primary duration-300 leading-[0px] text-lg"
                        aria-hidden
                      />
                    </SvgHover>
                  </button>
                </div>
              </div>
              <div className="text-gray">
                <p>{text}</p>
              </div>
              <div className="flex items-center justify-between my-1 mr-20 ml-[-5px]">
                <button
                  onClick={closeClicked}
                  role="link"
                  className="group relative text-graySecondary flex items-center focus-visible:outline-none"
                >
                  <SvgHover hoverColor="primary" name="comments">
                    <CommentOutlined
                      className="group-hover:text-primary duration-300"
                      aria-hidden
                    />
                  </SvgHover>
                  <span className="inline-block text-xs group-hover:text-primary duration-300 ml-2">
                    {comments}
                  </span>
                </button>
                <button
                  onClick={closeClicked}
                  role="link"
                  className="group relative text-graySecondary flex items-center focus-visible:outline-none"
                >
                  <SvgHover hoverColor="green" name="comments">
                    <RetweetOutlined
                      className="group-hover:text-green duration-300"
                      aria-hidden
                    />
                  </SvgHover>
                  <span className="inline-block text-xs group-hover:text-green duration-300 ml-2">
                    0
                  </span>
                </button>
                <button
                  onClick={closeClicked}
                  role="link"
                  className="group relative text-graySecondary flex items-center focus-visible:outline-none"
                >
                  <SvgHover hoverColor="red" name="comments">
                    {true ? (
                      <HeartFilled className="text-red" aria-hidden />
                    ) : (
                      <HeartOutlined
                        className="group-hover:text-red duration-300"
                        aria-hidden
                      />
                    )}
                  </SvgHover>
                  <span
                    className={`inline-block text-xs group-hover:text-red duration-300 ml-3 ${
                      true ? "text-red" : ""
                    }`}
                  >
                    0
                  </span>
                </button>
                <button
                  role="link"
                  onClick={closeClicked}
                  className="relative group focus-visible:outline-none"
                >
                  <SvgHover hoverColor="primary" name="comments">
                    <ShareAltOutlined
                      className="text-graySecondary group-hover:text-primary duration-300"
                      aria-hidden
                    />
                  </SvgHover>
                </button>
              </div>
            </div>
          </article>
        </a>
      </Link>
    );
  }
);
