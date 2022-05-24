import { IFeed } from "@/models/tweet/ITweet";
import axios from "axios";
import { apiConfig } from "../config";

export const getProfileTweetFeeds = async (
  id: number | undefined
): Promise<IFeed> => {
  try {
    const response = await axios.get(
      `${apiConfig.url.API_URL}/api/tweets?filters[user][id]=${id}&populate=*`
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const getTweetFeeds = async (ids: number[]): Promise<IFeed> => {
  try {
    const filter = "filters[user][id]=";

    const idsParam = ids
      .map((id: number) => {
        return `${filter}${id}&`;
      })
      .join("");

    const response = await axios.get(
      `${apiConfig.url.API_URL}/api/tweets?${idsParam}populate=*`
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const getTweetAuthorImage = async (id: number | undefined) => {
  try {
    const response = await axios.get(
      `${apiConfig.url.API_URL}/api/users/${id}`
    );

    return response;
  } catch (error) {
    throw error;
  }
};
