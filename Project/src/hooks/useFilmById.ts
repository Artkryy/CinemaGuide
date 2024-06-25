import { useQuery } from "@tanstack/react-query";
import { Film } from "../interfaces/Film"
import { getFilmById } from "../api/film";
import { queryClient } from "../api/queryClient";

type ResponseFilm = {
  data: Film | undefined;
  isError: boolean;
  isLoading: boolean;
}

export const useFilmById = (id: number): ResponseFilm => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['film'],
    queryFn: () => getFilmById(id)
  }, queryClient)
  return { data, isError, isLoading }
}
