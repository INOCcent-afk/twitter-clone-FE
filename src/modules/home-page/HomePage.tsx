import React from "react";
import type { NextPage } from "next";
import { MainLayout } from "../../shared-components/MainLayout";
import { SidebarNavigation } from "../../ui/SidebarNavigation";

export const HomePage: NextPage = () => {
  return (
    <MainLayout
      leftPanel={
        <>
          <SidebarNavigation />
        </>
      }
      mainPanel={
        <>
          <div className="py-[200px]">
            <h1>Helo</h1>
          </div>
          <div className="py-[200px]">
            <h1>Helo</h1>
          </div>
          <div className="py-[200px]">
            <h1>Helo</h1>
          </div>
          <div className="py-[200px]">
            <h1>Helo</h1>
          </div>
          <div className="py-[200px]">
            <h1>Helo</h1>
          </div>
          <div className="py-[200px]">
            <h1>Helo</h1>
          </div>
          <div className="py-[200px]">
            <h1>Helo</h1>
          </div>
          <div className="py-[200px]">
            <h1>Helo</h1>
          </div>
          <div className="py-[200px]">
            <h1>Helo</h1>
          </div>
          <div className="py-[200px]">
            <h1>Helo</h1>
          </div>
        </>
      }
      rightPanel={
        <>
          <SidebarNavigation />
          <SidebarNavigation />
          <SidebarNavigation />
          <SidebarNavigation />
        </>
      }
    />
  );
};
