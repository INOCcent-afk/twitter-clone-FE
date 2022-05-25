import Image from "next/image";
import React, { FC, ReactNode } from "react";

interface NoDataMessageProps {
  heading: string;
  children: ReactNode;
}

export const NoDataMessage: FC<NoDataMessageProps> = ({
  heading,
  children,
}) => {
  return (
    <div className="flex mx-auto flex-col items-center max-w-[350px] gap-4">
      <Image
        src="/images/rubber-chicken.png"
        alt="no data"
        layout="fixed"
        height={200}
        width={400}
        priority
      />
      <h4 className="text-white text-3xl break-all">{heading}</h4>
      <p className="text-graySecondary text-sm">{children}</p>
    </div>
  );
};
