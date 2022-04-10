import React, { useState } from "react";
import type { NextPage } from "next";
import { MainLayout } from "../../shared-components/MainLayout";
import { SidebarNavigation } from "../../ui/SidebarNavigation";
import { TwitterHeader } from "../../ui/headers/TwitterHeader";
import { HomePageHeader } from "./home-page-header";
import { Header } from "../../ui/headers/components/Header";
import Search from "../../ui/Search";
import FormFeed from "./FormFeed";
import { Tweet } from "../../ui/Tweet";
import { Trends } from "../../ui/Trends";
import { Footer } from "../../ui/Footer";

export const HomePage: NextPage = () => {
  const [search, setSearch] = useState("");
  const [textarea, setTextArea] = useState("");

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
      mainPanel={
        <>
          <HomePageHeader />
          <FormFeed
            value={textarea}
            onChange={(e) => setTextArea(e.currentTarget.value)}
          />
          <div className="flex justify-center">
            <button className="text-primary text-center py-3 hover:bg-accentGray duration-200 ease-in-out w-full">
              Show 4 Tweets
            </button>
          </div>
          <hr />
          <Tweet />
        </>
      }
      rightPanelHeader={
        <Header>
          <Search
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
            clearAction={clearSearch}
          />
        </Header>
      }
      rightPanel={
        <>
          <Trends />
          <Footer />
        </>
      }
    />
  );
};
