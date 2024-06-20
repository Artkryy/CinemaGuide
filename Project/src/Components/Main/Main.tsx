import { Route, Routes } from 'react-router-dom'
import './Main.css'
import { AccountPage, DetailGenrePage, FilmPage, GenresPage, MainPage } from '../../pages'
import { Film } from '../../interfaces/Film'
import { FC } from 'react';
import { useAllGenres } from '../../hooks/useAllGenres';
import { User } from '../../interfaces/User';

interface TMainProps {
  randomFilm: Film;
  topFilms: Film[];
  user: User | undefined;
  userLoad: boolean;
  setAuthActive: any;
}

export const Main: FC<TMainProps> = ({ randomFilm, topFilms, user, userLoad, setAuthActive }) => {

  const genres = useAllGenres();

  if (genres.data) {
    return (
      <main className='page'>
        <Routes>
          <Route
            path='/'
            element={
              <MainPage
                film={randomFilm}
                topFilms={topFilms}
                user={user}
                setAuthActive={setAuthActive}
              />} />
          <Route
            path='/genres'
            element={<GenresPage genres={genres.data} />} />
          <Route
            path='/genres/:genreName'
            element={<DetailGenrePage />} />
          <Route
            path='/randomFilm/:filmId'
            element={<FilmPage user={user} setAuthActive={setAuthActive} />} />
          <Route
            path='/topFilms/:count/:filmId'
            element={<FilmPage user={user} setAuthActive={setAuthActive} />} />
          <Route
            path='/favorites/:user/:filmId'
            element={<FilmPage user={user} setAuthActive={setAuthActive} />} />
          <Route
            path='/genreFilms/:genre/:filmId'
            element={<FilmPage user={user} setAuthActive={setAuthActive} />} />
          <Route
            path='/search/:film/:filmId'
            element={<FilmPage user={user} setAuthActive={setAuthActive} />} />
          <Route
            path='/account/:name'
            element={<AccountPage user={user} userLoad={userLoad} />} />
        </Routes>
      </main>
    )
  }
}
