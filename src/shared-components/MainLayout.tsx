import React, { FC, ReactNode } from "react";

interface MainLayoutProps {
  leftPanel: ReactNode;
  mainPanel: ReactNode;
  rightPanel: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({
  leftPanel,
  mainPanel,
  rightPanel,
}) => {
  return (
    <div className="grid grid-cols-12 px-2 max-w-[1200px] mx-auto ">
      <aside className="col-span-3">
        <div className="sticky top-0">{leftPanel}</div>
      </aside>
      <main className="col-span-6 border-x border-x-secondary min-h-screen">
        {mainPanel}
      </main>
      <aside className="col-span-3">
        {/* <div className="fixed overflow-y-scroll bottom-0 top-0 w-full">
          {rightPanel}
        </div> */}
        <div className="sticky bottom-10">{rightPanel}</div>
      </aside>
    </div>
  );
};
