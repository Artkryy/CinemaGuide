import { useQuery } from "@tanstack/react-query";
import { User } from "../interfaces/User";
import { fetchUser } from "../api/user";
import { queryClient } from "../api/queryClient";

type ResponseUser = {
  data: User | undefined;
  isError: boolean;
  isLoading: boolean;
};

export const useMe = (): ResponseUser => {
  const { data, isError, isLoading } = useQuery(
    {
      queryFn: fetchUser,
      queryKey: ["me"],
      retry: false
    },
    queryClient
  );
  return { data, isError, isLoading }
};
