import React, { useState } from "react";
import type { NextPage } from "next";
import { MainLayout } from "../../shared-components/MainLayout";
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
import { useQueries } from "react-query";
import { getUser } from "@/services/resources/user";

export const HomePage: NextPage = () => {
  const [search, setSearch] = useState("");
  const [textarea, setTextArea] = useState("");
  const { data: meData } = useMe();
  const { data: feedsData, isLoading: isFeedsDataLoading } = useTweetFeeds(
    meData?.data.followings,
    meData?.data.id,
    meData?.data ? true : false
  );

  const clearSearch = () => {
    setSearch("");
  };

  const sortTweets =
    feedsData &&
    feedsData.data.data.sort((a, b) => {
      let c = new Date(a.attributes.createdAt);
      let d = new Date(b.attributes.createdAt);

      return d.getTime() - c.getTime();
    });

  const userQueries = useQueries(
    feedsData?.data.data.map((user) => {
      return {
        queryKey: ["user", user.attributes.user.data.id],
        queryFn: () => getUser(user.attributes.user.data.id),
      };
    }) ?? []
  );

  let tweetsCombinedData =
    sortTweets &&
    sortTweets.map((item, i) => Object.assign({}, item, userQueries[i]));

  return (
    <MainLayout
      mainPanel={
        <>
          <HomePageHeader />
          <div className="hidden lg:block">
            {meData ? (
              <FormFeed
                value={textarea}
                onChange={(e) => setTextArea(e.currentTarget.value)}
              />
            ) : (
              <FormFeed
                value={textarea}
                onChange={(e) => setTextArea(e.currentTarget.value)}
              />
            )}
          </div>
          <hr />
          {isFeedsDataLoading && (
            <div className="text-4xl text-center my-5 text-primary">
              <LoadingOutlined />
            </div>
          )}
          {tweetsCombinedData &&
            tweetsCombinedData.map((tweet) => {
              return (
                <Tweet
                  key={tweet.id}
                  id={tweet.id}
                  text={tweet.attributes.text}
                  createdAt={tweet.attributes.createdAt}
                  comments={tweet.attributes.comments.data.length}
                  author={tweet.attributes.user.data.attributes.username}
                  image={
                    tweet.data &&
                    tweet.data.data.image &&
                    tweet.data.data.image.url
                  }
                />
              );
            })}
          {feedsData && !isFeedsDataLoading && !feedsData.data.data.length ? (
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
