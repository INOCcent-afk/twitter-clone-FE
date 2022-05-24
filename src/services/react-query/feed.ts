import { IFeed } from "@/models/tweet/ITweet";
import { useQuery } from "react-query";
import {
  getTweetAuthorImage,
  getProfileTweetFeeds,
  getTweetFeeds,
} from "../resources/feed";

export const useProfileTweetFeeds = (
  id: number | undefined,
  isIDavailable: boolean
) => {
  const { data, isLoading, isError, isFetching } = useQuery<IFeed, Error>(
    "profileFeeds",
    () => getProfileTweetFeeds(id),
    {
      enabled: isIDavailable,
    }
  );

  return { data, isFetching, isError, isLoading };
};

export const useTweetFeeds = (ids: number[], isIDavailable: boolean) => {
  const { data, isLoading, isError, isFetching } = useQuery<IFeed, Error>(
    "tweetFeeds",
    () => getTweetFeeds(ids),
    {
      enabled: isIDavailable,
    }
  );

  return { data, isFetching, isError, isLoading };
};

export const useAuthorAvatar = (
  id: number | undefined,
  isIDavailable: boolean
) => {
  const { data, isLoading, isError, isFetching } = useQuery(
    "avatar",
    () => getTweetAuthorImage(id),
    {
      enabled: isIDavailable,
    }
  );

  return { data, isFetching, isError, isLoading };
};
