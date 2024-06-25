import { Film } from "../interfaces/Film";
import { API } from "./user";

export const getAllGenres = (): Promise<string[]> =>
  fetch(`${API}/movie/genres`).then((res) => res.json());

export const getFilmsByGenre = async (genre: string): Promise<Film[]> => {
  try {
    const response = await fetch(`${API}/movie?genre=${genre}`);
    if (!response.ok) {
      console.log('Error');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
