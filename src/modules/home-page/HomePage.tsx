import React, { useState } from "react";
import type { NextPage } from "next";
import { MainLayout } from "../../shared-components/MainLayout";
import { SidebarNavigation } from "../../ui/SidebarNavigation";
import { TwitterHeader } from "../../ui/headers/TwitterHeader";
import { HomePageHeader } from "./home-page-header";
import { Header } from "../../ui/headers/components/Header";
import Search from "../../ui/Search";

export const HomePage: NextPage = () => {
  const [search, setSearch] = useState("");

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <MainLayout
      leftPanel={
        <>
          <TwitterHeader />
          <SidebarNavigation />
        </>
      }
      mainPanel={<HomePageHeader />}
      rightPanelHeader={
        <Header>
          <Search
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
            clearAction={clearSearch}
          />
        </Header>
      }
      rightPanel={<SidebarNavigation />}
    />
  );
};
