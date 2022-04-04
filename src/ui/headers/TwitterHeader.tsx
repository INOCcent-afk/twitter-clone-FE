import { TwitterOutlined } from "@ant-design/icons";
import Link from "next/link";
import React, { FC } from "react";
import { SvgHover } from "../SvgHover";

export const TwitterHeader: FC = () => {
  return (
    <div className="py-2">
      <Link href="/">
        <a className="inline-block ml-[-10px] group">
          <SvgHover
            name="home"
            hoverColor="secondary"
            tooltip
            toolTipPosition={-20}
          >
            <TwitterOutlined className="text-3xl text-white leading-[0px]" />
          </SvgHover>
        </a>
      </Link>
    </div>
  );
};
