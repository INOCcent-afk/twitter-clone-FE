import { CreateTweet } from "@/ui/CreateTweet";
import { MobileNavigation } from "@/ui/MobileNavigation";
import { UserMenu } from "@/ui/UserMenu";
import React, { FC, ReactNode } from "react";

interface MainLayoutProps {
  leftPanel: ReactNode;
  mainPanel: ReactNode;
  rightPanelHeader: ReactNode;
  rightPanel: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({
  leftPanel,
  mainPanel,
  rightPanel,
  rightPanelHeader,
}) => {
  return (
    <div className="grid grid-cols-12 lg:px-3 sm:max-w-[700px] lg:max-w-[1280px] mx-auto lg:gap-4 min-h-screen">
      <div className="hidden sm:block sm:col-span-2 lg:col-span-3 mx-auto relative">
        <div className="sticky top-0 z-50">{leftPanel}</div>
        <UserMenu />
      </div>
      <main className="col-span-12 sm:col-span-10 lg:col-span-6 border-x border-x-secondary mb-16 sm:mb-0">
        {mainPanel}
      </main>
      <div className="col-span-3 hidden lg:block">
        {rightPanelHeader}
        <div className="sticky top-20 pb-10">{rightPanel}</div>
      </div>
      <MobileNavigation />
      <div className="absolute right-5 bottom-20 z-50 lg:hidden">
        <CreateTweet />
      </div>
    </div>
  );
};
