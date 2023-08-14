import { useMemo } from "react";
import { useSelector } from "react-redux";
import useSWR from "swr";
import instance from "../../service/axios";

const fetcher = (url) => instance.get(url).then((res) => res.data.json());

export const useDatafetcher = (URL, fetch) => {
  const token = useSelector((state) => state?.auth?.tokens)?.token;
  const config = useMemo(
    () => ({
      headers: token && {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }),
    [token]
  );

  const { data, error } = useSWR([fetch ? URL : null, config], {
    revalidateOnFocus: false,
    // revalidateIfStale: false,
    // revalidateOnReconnect: false,
  });

  return {
    data: data?.result,
    error,
    loading: !data && !error,
  };
};

export const usePrefetch = (URL, ...args) => {
  const data = useSWR(URL, fetcher(URL), args);
  return {
    data: data?.result,
    // error,
    // loading: !data && !error,
  };
};
