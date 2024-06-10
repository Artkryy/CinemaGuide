import { Link, useParams } from 'react-router-dom'
import './DetailGenrePage.css'
import { firstCharToUpperCase } from '../../utils/utils';
import { Button } from '../../ui/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../../api/user';
import { Film } from '../../interfaces/Film';

export const DetailGenrePage = () => {
  const params = useParams();
  const genreName = params.genreName
  const [films, setFilms] = useState<Film[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (fetching) {
      axios.get(`${API}/movie?genre=${genreName}&count=15&page=${currentPage}`)
        .then(response => {
          setFilms([...films, ...response.data])
          setCurrentPage(prevState => prevState + 1)
        })
        .finally(() => {
          setFetching(false)
        })
    }
  }, [fetching])


  const handleMoreBtn = () => {
    setFetching(true)
  }

  return (
    <section className='detail-genres-page'>
      <h1 className="detail-genres-page__title">
        <Link to={'/genres'} className='detail-genres-page__link'>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.047 20.0012L26.2967 28.2507L23.9397 30.6077L13.333 20.0012L23.9397 9.39453L26.2967 11.7515L18.047 20.0012Z" fill="white" />
          </svg>
        </Link>
        {firstCharToUpperCase(genreName)}</h1>
      <ul className="detail-genres-page__film-list film-list list-reset">
        {films.map(film => (
            <li className="film-list__item" key={film.id} style={{ backgroundImage: `url(${film.posterUrl})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
              <Link className='film-list__link-to' to={`/genreFilms/${genreName}/${film.id}`} />
            </li>
          ))}
        <Button className='detail-genres-page__btn btn btn-reset' type='button' onClick={handleMoreBtn}>Показать ещё</Button>
      </ul>
    </section>
  )

}
