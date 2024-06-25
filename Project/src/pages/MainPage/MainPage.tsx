import './MainPage.css'
import { FC, useEffect, useState } from 'react';
import { Film } from '../../interfaces/Film';
import { TopListSection } from './TopListSection/TopListSection';
import { DetailFilm } from '../../Components/DetailFilm';
import { useRandomFilm } from '../../hooks/useRandomFilm';
import { User } from '../../interfaces/User';

interface TFilmProps {
  film: Film;
  topFilms: Film[];
  user: User | undefined;
  setAuthActive: any;
}

export const MainPage: FC<TFilmProps> = ({ film, topFilms, user, setAuthActive }) => {
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
      <DetailFilm film={randomFilm} aboutFilmBtn={true} resetBtn={true} handleResetRandomFilm={handleResetRandomFilm} user={user} setAuthActive={setAuthActive} />
      <TopListSection films={topFilms || []} />
      {/* {matches && (<h1>Big Screen</h1>)}
      {!matches && (<h3>Small Screen</h3>)} */}
    </>
  )
}
