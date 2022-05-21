import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface AvatarProps {
  image?: string;
  username: string;
  size?: number;
}

export const Avatar: FC<AvatarProps> = ({ image, username }) => {
  return (
    <Link href="/" passHref>
      <button role="link">
        <div className="rounded-full w-14 h-14 relative overflow-hidden bg-primary hover:opacity-90">
          {image && (
            <Image className="z-20" src={image} layout="fill" alt="avatar" />
          )}
          <span
            className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-10 text-2xl"
            aria-hidden={image ? true : false}
          >
            {username.charAt(0).toLocaleUpperCase()}
          </span>
        </div>
      </button>
    </Link>
  );
};
