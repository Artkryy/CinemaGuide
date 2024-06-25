import { useQuery } from "@tanstack/react-query";
import { getAllGenres } from "../api/genres";
import { queryClient } from "../api/queryClient";

type ResponseGenres = {
  data: string[] | undefined;
  isError: boolean;
  isLoading: boolean;
};

export const useAllGenres = (): ResponseGenres => {
  const { data, isError, isLoading } = useQuery({
    queryFn: getAllGenres,
    queryKey: ['genres']
  }, queryClient)

  return { data, isError, isLoading }
}
