import { isServer } from "@/utils/isServer";
import { useQuery } from "react-query";
import { getMe } from "../resources/me";
import { IMeQuery } from "@/models/IMe";

export const useMe = () => {
  let token = isServer() && localStorage.getItem("jwt");

  const { data, isLoading, isError, isFetching } = useQuery<IMeQuery, Error>(
    "me",
    () => getMe(token ? token : "")
  );

  return { data, isFetching, isError, isLoading };
};
