import { Route, Routes } from 'react-router-dom'
import './Main.css'
import { AccountPage, DetailGenrePage, FilmPage, GenresPage, MainPage } from '../../pages'
import { Film } from '../../interfaces/Film'
import { FC } from 'react';
import { useAllGenres } from '../../hooks/useAllGenres';

interface TMainProps {
  randomFilm: Film;
  topFilms: Film[];
}

export const Main: FC<TMainProps> = ({ randomFilm, topFilms }) => {

  const { data } = useAllGenres();

  if (data) {
    return (
      <main className='page'>
        <Routes>
          <Route path='/' element={<MainPage film={randomFilm} topFilms={topFilms} />} />
          <Route path='/genres' element={<GenresPage genres={data} />} />
          <Route path='/genres/:genreName' element={<DetailGenrePage />} />
          <Route path='/randomFilm/:filmId' element={<FilmPage randomFilm={randomFilm} />} />
          <Route path='/topFilms/:filmId' element={<FilmPage topFilms={topFilms} />} />
          <Route path='/genreFilms/:genre/:filmId' element={<FilmPage />} />
          <Route path='/account' element={<AccountPage />} />
        </Routes>
      </main>
    )
  }
}
