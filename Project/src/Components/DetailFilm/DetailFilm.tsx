import { FC, useState } from 'react';
import { Film } from '../../interfaces/Film';
import './DetailFilm.css';
import { formatTime } from '../../utils/utils';
import { Link } from 'react-router-dom';
import { ModalTrailer } from '../ModalTrailer';
import { useMutation } from '@tanstack/react-query';
import { addFilmToFavorites, removeFilmFromFavorites } from '../../api/film';
import { queryClient } from '../../api/queryClient';
import { User } from '../../interfaces/User';
import { LikeBtn } from '../LikeBtn';

interface TDetailFilmProps {
  film: Film;
  aboutFilmBtn: boolean;
  resetBtn: boolean;
  handleResetRandomFilm?: () => void;
  user: User | undefined;
  setAuthActive: any;
}

export const DetailFilm: FC<TDetailFilmProps> = ({
  film,
  aboutFilmBtn,
  resetBtn,
  handleResetRandomFilm,
  user,
  setAuthActive }) => {

  const userFav: string[] | undefined = user?.favorites
  const isFav = userFav?.includes(String(film.id))

  const [modalActive, setModalActive] = useState(false)
  const [isFavorite, setFavorite] = useState(isFav)


  const handleFilmToFavorites = () => {
    if (user) {
      if (isFavorite) {
        setFavorite(false)
        removeFromFavoritesMutation.mutate()
      } else {
        setFavorite(true)
        addToFavoritesMutation.mutate()
      }
    } else {
      setAuthActive(true)
    }
  }


  const addToFavoritesMutation = useMutation(
    {
      mutationFn: () => addFilmToFavorites(String(film.id)),
    },
    queryClient)

  const removeFromFavoritesMutation = useMutation(
    {
      mutationFn: () => removeFilmFromFavorites(String(film.id))
    },
    queryClient
  )

  return (
    <>
      <section className='film'>
        <div className="film__content">
          <ul className="film__info-list info-list list-reset">
            <li className="info-list__item">
              <span className='info-list__info-item info-list__info-item--rating'>
                <svg className='info-list__rating-svg' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.00105 12.1733L3.29875 14.8054L4.34897 9.51991L0.392578 5.86118L5.74394 5.22669L8.00105 0.333313L10.2581 5.22669L15.6095 5.86118L11.6531 9.51991L12.7033 14.8054L8.00105 12.1733Z" fill="white" />
                </svg>
                {film.tmdbRating.toFixed(1)}
              </span>
            </li>
            <li className="info-list__item">
              <span className='info-list__info-item info-list__info-item--year'>{film.releaseYear}</span>
            </li>
            <li className="info-list__item">
              {film.genres.map((genre, index) => (
                <span className='info-list__info-item info-list__info-item--genre' key={index}>{genre}</span>
              ))}
            </li>
            <li className="info-list__item">
              <span className='info-list__info-item info-list__info-item--duration'>{formatTime(film.runtime)}</span>
            </li>
          </ul>
          <h1 className="film__title">{film.title}</h1>
          <h2 className="film__plot">{film.plot}</h2>
          <ul className="film__action-list action-list list-reset">
            <li className="action-list__item">
              <a href='#' className="action-list__link btn action-list__link--trailer" onClick={() => setModalActive(true)}>Трейлер</a>
            </li>
            {aboutFilmBtn && (
              <li className="action-list__item">
                <Link to={`/randomFilm/${film.id}`} className="action-list__link btn action-list__link--about-film">О фильме</Link>
              </li>
            )}
            <li className="action-list__item">
              <LikeBtn favoriteActive={isFavorite} handleFilmToFavorites={handleFilmToFavorites} />
            </li>
            {resetBtn && (
              <li className="action-list__item">
                <button className="action-list__link action-list__link--reset" onClick={handleResetRandomFilm}>
                  <svg className='action-list__reset-svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4C14.7486 4 17.1749 5.38626 18.6156 7.5H16V9.5H22V3.5H20V5.99936C18.1762 3.57166 15.2724 2 12 2C6.47715 2 2 6.47715 2 12H4C4 7.58172 7.58172 4 12 4ZM20 12C20 16.4183 16.4183 20 12 20C9.25144 20 6.82508 18.6137 5.38443 16.5H8V14.5H2V20.5H4V18.0006C5.82381 20.4283 8.72764 22 12 22C17.5228 22 22 17.5228 22 12H20Z" fill="white" />
                  </svg>
                </button>
              </li>)}
          </ul>
        </div>
        <div className="film__film-img">
          <div className='film__bg-img' style={{ backgroundImage: `url(${film.posterUrl})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain' }} ></div>
        </div>
      </section>
      <ModalTrailer active={modalActive} setActive={setModalActive} trailerUrl={film.trailerUrl} />
    </>
  )
}
