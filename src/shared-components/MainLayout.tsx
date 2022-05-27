import { CreateTweet } from "@/ui/CreateTweet";
import { TwitterHeader } from "@/ui/headers/TwitterHeader";
import { MobileNavigation } from "@/ui/MobileNavigation";
import { SidebarNavigation } from "@/ui/SidebarNavigation";
import { UserMenu } from "@/ui/UserMenu";
import React, { FC, ReactNode } from "react";

interface MainLayoutProps {
  mainPanel: ReactNode;
  rightPanelHeader: ReactNode;
  rightPanel: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({
  mainPanel,
  rightPanel,
  rightPanelHeader,
}) => {
  return (
    <div className="grid grid-cols-12 lg:px-3 sm:max-w-[700px] lg:max-w-[1280px] mx-auto lg:gap-4 min-h-screen">
      <div className="hidden sm:block sm:col-span-2 lg:col-span-3 mx-auto relative w-full max-w-[51px] lg:max-w-[235px]">
        <div className="fixed z-50 flex flex-col justify-between h-full w-full max-w-[51px] lg:max-w-[235px]">
          <div className="">
            <TwitterHeader />
            <SidebarNavigation />
          </div>
          <div className="my-5">
            <UserMenu />
          </div>
        </div>
      </div>
      <main className="col-span-12 sm:col-span-10 lg:col-span-6 border-x border-x-secondary mb-16 sm:mb-0">
        {mainPanel}
      </main>
      <div className="col-span-3 hidden lg:block">
        {rightPanelHeader}
        <div className="sticky top-20 pb-10">{rightPanel}</div>
      </div>
      <MobileNavigation />
      <div className="fixed right-5 bottom-20 z-50 lg:hidden">
        <CreateTweet />
      </div>
    </div>
  );
};
