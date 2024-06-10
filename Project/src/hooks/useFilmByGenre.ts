import { useQuery } from "@tanstack/react-query";
import { Film } from "../interfaces/Film";
import { getFilmsByGenre } from "../api/genres";

type ResponseFilmByGenre = {
  data: Film[] | [];
  isError: boolean;
  isLoading: boolean;
  refetch: () => void;
}

export const useFilmByGenre = (genre: string = ''): ResponseFilmByGenre => {
  const { data = [], isError, isLoading, refetch } = useQuery({
    queryKey: ['film', genre],
    queryFn: () => getFilmsByGenre(genre)
  });
  return { data, isError, isLoading, refetch }
}

