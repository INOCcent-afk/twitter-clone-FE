import { apiConfig } from "@/services/config";
import { useAuthorAvatar } from "@/services/react-query/feed";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface AvatarProps {
  username: string;
  size?: number;
  id?: number;
}

export const Avatar: FC<AvatarProps> = ({ id, username, size = "56" }) => {
  const { data } = useAuthorAvatar(id, id ? true : false);

  return (
    <Link href="/" passHref>
      <button role="link">
        <div
          className="rounded-full relative overflow-hidden bg-primary hover:opacity-90"
          style={{ width: `${size}px`, height: `${size}px` }}
        >
          {data?.data.image && (
            <Image
              className="z-20"
              src={apiConfig.url.API_URL + data?.data.image.url}
              layout="fill"
              alt="avatar"
            />
          )}
          <span
            className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-10 text-2xl"
            aria-hidden={data?.data.image ? true : false}
          >
            {username.charAt(0).toLocaleUpperCase()}
          </span>
        </div>
      </button>
    </Link>
  );
};
