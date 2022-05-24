import React, { useState } from "react";
import type { NextPage } from "next";
import { MainLayout } from "../../shared-components/MainLayout";
import { SidebarNavigation } from "../../ui/SidebarNavigation";
import { TwitterHeader } from "../../ui/headers/TwitterHeader";
import { HomePageHeader } from "./home-page-header";
import { Header } from "../../ui/headers/components/Header";
import { Search } from "../../ui/Search";
import FormFeed from "./FormFeed";
import { Trends } from "../../ui/Trends";
import { Footer } from "../../ui/Footer";
import { useMe } from "@/services/react-query/me";
import { useTweetFeeds } from "@/services/react-query/feed";
import { LoadingOutlined } from "@ant-design/icons";
import { Tweet } from "@/ui/Tweet";
import { NoDataMessage } from "@/ui/NoDataMessage";

export const HomePage: NextPage = () => {
  const [search, setSearch] = useState("");
  const [textarea, setTextArea] = useState("");
  const { data: meData } = useMe();
  const { data: feedsData, isLoading: isFeedsDataLoading } = useTweetFeeds(
    meData?.data.id,
    meData?.data.id ? true : false
  );

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
          <div className="hidden lg:block">
            {meData ? (
              <FormFeed
                value={textarea}
                onChange={(e) => setTextArea(e.currentTarget.value)}
                userID={meData.data.id}
                username={meData?.data.username}
              />
            ) : (
              <FormFeed
                value={textarea}
                onChange={(e) => setTextArea(e.currentTarget.value)}
                username=""
              />
            )}
          </div>
          <hr />
          {isFeedsDataLoading && (
            <div className="text-4xl text-center my-5 text-primary">
              <LoadingOutlined />
            </div>
          )}
          {feedsData?.data.data &&
            feedsData.data.data.map((tweet) => (
              <Tweet
                key={tweet.id}
                text={tweet.attributes.text}
                id={tweet.attributes.user.data.id}
              />
            ))}
          {isFeedsDataLoading && feedsData && feedsData.data.data.length ? (
            <div className="my-5">
              <NoDataMessage heading={`"No Tweets yet!"`}>
                Go follow other users to get latests tweets.
              </NoDataMessage>
            </div>
          ) : null}
        </>
      }
      rightPanelHeader={
        <>
          <Header>
            <Search
              value={search}
              onChange={(e) => setSearch(e.currentTarget.value)}
              clearAction={clearSearch}
            />
          </Header>
        </>
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
