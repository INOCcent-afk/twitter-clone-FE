import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface AvatarProps {
  image?: string;
  initial: string;
  size?: number;
}

export const Avatar: FC<AvatarProps> = ({ image, initial, size }) => {
  return (
    <Link href="/">
      <a>
        <div className="rounded-full w-14 h-14 relative overflow-hidden bg-primary hover:opacity-90">
          {image && (
            <Image
              className="z-20"
              src={image}
              layout="fill"
              width={56}
              height={56}
              alt="avatar"
            />
          )}
          <span className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-10 text-2xl">
            {initial}
          </span>
        </div>
      </a>
    </Link>
  );
};
