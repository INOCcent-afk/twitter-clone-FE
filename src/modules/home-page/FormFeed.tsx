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
import { dummyImageURl } from "../../utils/constants";

interface FormFeedProps extends ComponentPropsWithoutRef<"textarea"> {}

const Controls = [
  {
    name: "upload images",
    icon: <FileImageOutlined className="text-primary text-lg leading-[0px]" />,
  },
  {
    name: "Gif",
    icon: <GifOutlined className="text-primary text-lg leading-[0px]" />,
  },
  {
    name: "Poll",
    icon: <AlignLeftOutlined className="text-primary text-lg leading-[0px]" />,
  },
  {
    name: "Emoji",
    icon: <SmileOutlined className="text-primary text-lg leading-[0px]" />,
  },
  {
    name: "Schedule",
    icon: <CalendarOutlined className="text-primary text-lg leading-[0px]" />,
  },
];

const FormFeed: FC<FormFeedProps> = ({ ...props }) => {
  return (
    <>
      <section className="flex px-5 gap-4 pb-2 mt-1">
        <div className="">
          <Avatar image={dummyImageURl} initial="D" />
        </div>
        <form className="w-full ">
          <textarea
            className="w-full bg-black text-xl resize-none focus:outline-dashed outline-primary outline-2"
            placeholder="What's happening?"
            {...props}
          ></textarea>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {Controls.map((control, index) => (
                <button key={index} className="group">
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
            <div className="">
              <Button size="tiny" disabled={!props.value}>
                Tweet
              </Button>
            </div>
          </div>
        </form>
      </section>
      <hr />
    </>
  );
};

export default FormFeed;
