import { useQuery } from "@tanstack/react-query";

const QUERY_KEY = "USER_PROFILE";
const QUERY_CONFIG = {
  refetchOnWindowFocus: false,
};

const useProfile = (getData) => {
  const { isLoading, isError, refetch } = useQuery(
    [QUERY_KEY],
    getData,
    QUERY_CONFIG
  );

  return { refetch, isLoading, isError };
};

export default useProfile;
