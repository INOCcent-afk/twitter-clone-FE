import { EditOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";

export const CreateTweet = () => {
  return (
    <Link href="/compose/tweet">
      <a className="flex items-center justify-center w-14 h-14 bg-primary rounded-full">
        <EditOutlined />
      </a>
    </Link>
  );
};
