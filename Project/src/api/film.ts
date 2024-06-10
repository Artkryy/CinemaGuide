import { Film } from "../interfaces/Film";
import { API } from "./user";
import { validResponse } from "./validResponse";

export const getRandomFilm = (): Promise<Film> =>
  fetch(`${API}/movie/random`).then((res) => res.json());

export const getTopFilms = (): Promise<Film[]> =>
  fetch(`${API}/movie/top10`).then((res) => res.json());

export const getFavoritesFilms = (): Promise<Film[] | []> =>
  fetch(`${API}/favorites`, {
    method: "GET",
    credentials: "include",
  }).then((res) => res.json());

export const getFilmById = (id: number): Promise<Film> =>
  fetch(`${API}/movie/${id}`).then((res) => res.json());

export const addFilmToFavorites = (id: string) => {
  return fetch(`${API}/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    body: new URLSearchParams({
      id: id,
    }).toString(),
  })
    .then(validResponse)
    .then(() => undefined);
};

export const removeFilmFromFavorites = (id: string) => {
  return fetch(`${API}/favorites/${id}`, {
    method: "DELETE",
    credentials: "include",
  })
    .then(validResponse)
    .then(() => undefined);
};
