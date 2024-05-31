import './MainPage.css'
import { FC, useEffect, useState } from 'react';
import { Film } from '../../interfaces/Film';
import { TopListSection } from './TopListSection/TopListSection';
import { DetailFilm } from '../../Components/DetailFilm';
import { useRandomFilm } from '../../hooks/useRandomFilm';

interface TFilmProps {
  film: Film;
  topFilms: Film[];
}

export const MainPage: FC<TFilmProps> = ({ film, topFilms }) => {

  const [randomFilm, setRandomFilm] = useState(film);
  const { data, refetch } = useRandomFilm();

  useEffect(() => {
    if (data) {
      setRandomFilm(data)
    }
  }, [data]);

  const handleResetRandomFilm = () => {
    refetch()
  }

  return (
    <>
      <DetailFilm film={randomFilm} aboutFilmBtn={true} resetBtn={true} handleResetRandomFilm={handleResetRandomFilm} />
      <TopListSection films={topFilms || []} />
    </>
  )
}
