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
    <div className="grid grid-cols-12 px-3 max-w-[1280px] mx-auto gap-4">
      <div className="col-span-3">
        <div className="sticky top-0">{leftPanel}</div>
      </div>
      <main className="col-span-6 border-x border-x-secondary min-h-screen">
        {mainPanel}
      </main>
      <div className="col-span-3">
        {rightPanelHeader}
        <div className="sticky top-20 pb-10">{rightPanel}</div>
      </div>
    </div>
  );
};
