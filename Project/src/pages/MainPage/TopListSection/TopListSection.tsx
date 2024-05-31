import { FC } from 'react'
import { Film } from '../../../interfaces/Film'
import './TopListSection.css'
import { Link } from 'react-router-dom'

interface TTopListSectionProps {
  films: Film[]
}

export const TopListSection: FC<TTopListSectionProps> = ({ films }) => {
  let count = 1;
  return (
    <section className='main-page-top'>
      <h2 className="main-page-top__title">Топ 10 фильмов</h2>
      <ul className="main-page-top__film-list film-list list-reset">
        {films.map(film => (
          <li className="film-list__item" key={film.id} style={{ backgroundImage: `url(${film.posterUrl})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
            <Link className='film-list__link-to' to={`/topFilms/${film.id}`}>
              <span className='film-list__position'>{count++}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
