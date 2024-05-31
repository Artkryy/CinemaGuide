import { useQuery } from "@tanstack/react-query";
import { Film } from "../interfaces/Film";
import { getRandomFilm } from "../api/film";
import { queryClient } from "../api/queryClient";

type Response = {
  data: Film | undefined;
  isError: boolean;
  isLoading: boolean;
  refetch: () => void;
};

export const useRandomFilm = (): Response => {
  const { data, isError, isLoading, refetch } = useQuery<Film>(
    {
      queryFn: getRandomFilm,
      queryKey: ["film"],
    },
    queryClient
  );

  return { data, isError, isLoading, refetch };
};
