import { IFeed } from "@/models/tweet/ITweet";
import { useQuery } from "react-query";
import { getTweetFeeds } from "../resources/feed";

export const useTweetFeeds = (
  id: number | undefined,
  isIDavailable: boolean
) => {
  const { data, isLoading, isError, isFetching } = useQuery<IFeed, Error>(
    "feeds",
    () => getTweetFeeds(id),
    {
      enabled: isIDavailable,
    }
  );

  return { data, isFetching, isError, isLoading };
};
