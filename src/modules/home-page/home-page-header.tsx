import { ThunderboltOutlined } from "@ant-design/icons";
import React from "react";
import { Header } from "../../ui/headers/components/Header";
import { SvgHover } from "../../ui/SvgHover";

export const HomePageHeader = () => {
  return (
    <Header>
      <div className="flex items-center justify-between w-full px-4">
        <h2>Latests Tweets</h2>
        <button className="group">
          <SvgHover name="Latest tweets" hoverColor="secondary" tooltip>
            <ThunderboltOutlined className="text-2xl leading-[0px]" />
          </SvgHover>
        </button>
      </div>
    </Header>
  );
};
