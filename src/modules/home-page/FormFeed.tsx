import {
  AlignLeftOutlined,
  CalendarOutlined,
  FileImageOutlined,
  GifOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import React, { ComponentPropsWithoutRef, FC } from "react";
import { Button } from "../../ui/ Button";
import { Avatar } from "../../ui/Avatar";
import { SvgHover } from "../../ui/SvgHover";

interface FormFeedProps extends ComponentPropsWithoutRef<"textarea"> {
  userID?: number;
  username: string;
}

const Controls = [
  {
    name: "upload images",
    icon: (
      <FileImageOutlined
        className="text-primary text-lg leading-[0px]"
        aria-hidden
      />
    ),
  },
  {
    name: "Gif",
    icon: (
      <GifOutlined className="text-primary text-lg leading-[0px]" aria-hidden />
    ),
  },
  {
    name: "Poll",
    icon: (
      <AlignLeftOutlined
        className="text-primary text-lg leading-[0px]"
        aria-hidden
      />
    ),
  },
  {
    name: "Emoji",
    icon: (
      <SmileOutlined
        className="text-primary text-lg leading-[0px]"
        aria-hidden
      />
    ),
  },
  {
    name: "Schedule",
    icon: (
      <CalendarOutlined
        className="text-primary text-lg leading-[0px]"
        aria-hidden
      />
    ),
  },
];

const FormFeed: FC<FormFeedProps> = ({ userID, username, ...props }) => {
  return (
    <>
      <section className="flex px-5 gap-4 pb-2 mt-1">
        <div>
          <Avatar id={userID} username={username} isLink />
        </div>
        <form className="w-full ">
          <textarea
            className="w-full bg-black text-xl focus:border-none focus:outline-none resize-none"
            placeholder="What's happening?"
            {...props}
          ></textarea>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {Controls.map((control, index) => (
                <button
                  key={index}
                  className="group focus-visible:outline-none"
                >
                  <SvgHover
                    hoverColor="secondary"
                    name={control.name}
                    tooltip
                    toolTipPosition={-30}
                  >
                    {control.icon}
                  </SvgHover>
                </button>
              ))}
            </div>
            <div>
              <Button fit size="tiny" disabled={!props.value}>
                Tweet
              </Button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default FormFeed;
