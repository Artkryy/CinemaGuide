// import { FC } from 'react'
import { useEffect, useState } from 'react'
import './Search.css'
import { Film } from '../../interfaces/Film'
import axios from 'axios'
import { API } from '../../api/user'
import { formatTime } from '../../utils/utils'
import { Link } from 'react-router-dom'

export const Search = () => {
  const [query, setQuery] = useState<string>('')
  const [films, setFilms] = useState<Film[]>([])
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false)

  useEffect(() => {
    const fetchFilms = async () => {
      if (query.length > 2) {
        const response = await axios.get(`${API}/movie`, {
          params: {
            title: query
          },
          withCredentials: true
        });
        setFilms(response.data);
        setDropdownVisible(true)
      } else {
        setDropdownVisible(false)
      }
    };

    const timeoutId = setTimeout(() => {
      fetchFilms();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query])

  return (
    <label className='header__label-search'>
      <input
        className='header__search'
        type='text'
        name='search'
        value={query}
        placeholder='Поиск'
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => query.length > 2 && setDropdownVisible(true)}
        onBlur={() => setTimeout(() => setDropdownVisible(false), 300)}
      />
      <svg className='header__search-svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" />
      </svg>
      {dropdownVisible && (
        <ul className="header__dropdown dropdown list-reset">
          {films.map(film => (
            <li className="dropdown__item" key={film.id} onClick={() => setQuery('')}>
              <img src={film.posterUrl} alt={film.title} className="dropdown__img" />
              <div className="dropdown__info">
                <ul className="dropdown__info-list info-list list-reset">
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
                <h3 className="dropdown__title">
                  {film.title}
                </h3>
              </div>
              <Link className='dropdown__link-to' to={`/search/film/${film.id}`}></Link>
            </li>
          ))}
        </ul>
      )}
    </label>
  )
}
