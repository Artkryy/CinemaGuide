import { useQuery } from "@tanstack/react-query";
import { getTopFilms } from "../api/film";
import { Film } from "../interfaces/Film";

type ResponseDataTopFilms = {
  data: Film[] | undefined;
  isError: boolean;
  isLoading: boolean
}

export const useTopFilms = (): ResponseDataTopFilms  => {
  const { data, isError, isLoading } = useQuery({
    queryFn: getTopFilms,
    queryKey: ["random-films"],
  });

  return { data, isError, isLoading };
}
