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
      <aside className="col-span-3">
        <div className="sticky top-0">{leftPanel}</div>
      </aside>
      <main className="col-span-5 border-x border-x-secondary min-h-screen">
        {mainPanel}
      </main>
      <aside className="col-span-4">
        <div className="px-4">{rightPanelHeader}</div>
        <div className="sticky top-20 px-4">{rightPanel}</div>
      </aside>
    </div>
  );
};
