import { Link } from 'react-router-dom';
import './GenresPage.css'
import { FC } from 'react';
import { useFilmByGenre } from '../../hooks/useFilmByGenre';
import { GenresCard } from '../../interfaces/GenresCard';
import { firstCharToUpperCase } from '../../utils/utils';

interface TGenresPageProps {
  genres: string[];
}

export const GenresPage: FC<TGenresPageProps> = ({ genres }) => {

  let genresCard: GenresCard[] = [];

  genres.forEach(genre => {
    const { data } = useFilmByGenre(genre)
    genresCard.push({ genres: genre, posterUrl: data[5]?.posterUrl })
  })

  return (
    <section className='genres-page'>
      <h1 className="genres-page__title">Жанры фильмов</h1>
      <ul className="genres-page__genres-list genres-list list-reset">
        {genresCard?.map((card, index) => (
          <li className="genres-list__item" key={index} style={{ backgroundImage: `url(${card.posterUrl})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
            <Link to={`/genres/${card.genres}`} className='genres-list__link' />
            <span className='genres-list__title'>{firstCharToUpperCase(card.genres)}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
