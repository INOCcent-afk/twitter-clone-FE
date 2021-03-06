import { IMe } from "@/models/IMe";
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

export const useTweetFeeds = (
  ids: IMe[] | undefined,
  currentUserID: number | undefined,
  isIDavailable: boolean
) => {
  const { data, isLoading, isError, isFetching } = useQuery<IFeed, Error>(
    "tweetFeeds",
    () => getTweetFeeds(ids, currentUserID),
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
