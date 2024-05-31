import { Film } from "../interfaces/Film";
import { API } from "./user";

export const getRandomFilm = (): Promise<Film> =>
  fetch(`${API}/movie/random`).then((res) => res.json());

export const getTopFilms = (): Promise<Film[]> =>
  fetch(`${API}/movie/top10`).then((res) => res.json());
