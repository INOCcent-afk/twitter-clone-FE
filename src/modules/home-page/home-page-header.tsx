import { useMe } from "@/services/react-query/me";
import { Avatar } from "@/ui/Avatar";
import { ThunderboltOutlined } from "@ant-design/icons";
import React from "react";
import { Header } from "../../ui/headers/components/Header";
import { SvgHover } from "../../ui/SvgHover";

export const HomePageHeader = () => {
  const { data: meData } = useMe();

  return (
    <Header>
      <div className="flex items-center justify-between w-full px-4">
        <div className="flex items-center gap-4">
          {meData ? (
            <Avatar
              username={meData?.data.username}
              image={meData.data.image && meData?.data.image.url}
              size={40}
            />
          ) : (
            <Avatar username="" image="" size={30} />
          )}
          <h2>Latests Tweets</h2>
        </div>
        <button className="group">
          <SvgHover name="Latest tweets" hoverColor="secondary" tooltip>
            <ThunderboltOutlined
              className="text-2xl leading-[0px]"
              aria-hidden
            />
          </SvgHover>
        </button>
      </div>
    </Header>
  );
};
