import { useQuery } from "@tanstack/react-query";
import { getFavoritesFilms } from "../api/film";
import { queryClient } from "../api/queryClient";
import { Film } from "../interfaces/Film";


export type ResponseFavorites = {
  data: Film[] | undefined;
  isError: boolean;
  isLoading: boolean;
};

export const useFavorites = (): ResponseFavorites => {
  const { data, isError, isLoading } = useQuery(
    {
      queryKey: ["favorites", "film"],
      queryFn: getFavoritesFilms,
    },
    queryClient
  );

  return { data, isError, isLoading };
};
