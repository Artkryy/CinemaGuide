import { FC, useEffect, useState } from "react";
import { User } from "../../interfaces/User";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Link } from "react-router-dom";
import { firstCharToUpperCase, returnFirstCharToUpperCase } from "../../utils/utils";
import { logout } from "../../api/user";
import { Film } from "../../interfaces/Film";
import { queryClient } from "../../api/queryClient";
import { removeFilmFromFavorites } from "../../api/film";

interface TAccountTabsProps {
  user: User;
  favorites: Film[];
}

export const AccountTabs: FC<TAccountTabsProps> = ({ user, favorites }) => {
  const [hoveredFilmIndex, setHoveredFilmIndex] = useState(-1)

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 768px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(max-width: 768px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  const handleMouseEnter = (index: number) => {
    setHoveredFilmIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredFilmIndex(-1)
  }

  const handleBtnRemove = (id: string) => {
    removeFilmFromFavorites(id)
    queryClient.setQueryData(['favorites', 'film'], (oldData: Film[] | undefined) =>
      oldData?.filter((film) => film.id !== Number(id))
    );
  }

  return (
    <Tabs defaultIndex={0} className={'account-page__tabs-wrapper'} >
      <TabList className={'account-page__tabs tabs list-reset'}>
        <Tab className={'tabs__tab'}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z" fill="white" />
          </svg>
          {matches ?
            'Избранное'
            :
            'Избранные фильмы'
          }
        </Tab>
        <Tab className={'tabs__tab'}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="white" />
          </svg>
          {matches ?
            'Настройки'
            :
            'Настройки аккаунта'
          }</Tab>
      </TabList>
      <TabPanel>
        <ul className="account-page__film-list film-list list-reset">
          {favorites.map((film: Film, index) => (
            <li
              className="film-list__item film-list__item--mobile"
              key={film.id}
              style={{
                backgroundImage: `url(${film.posterUrl})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
              <Link className='film-list__link-to' to={`/favorites/${user.name}/${film.id}`} />
              {hoveredFilmIndex === index && (
                <button className="film-list__close btn-reset" onClick={() => handleBtnRemove(String(film.id))}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" fill="black" />
                  </svg>
                </button>
              )}
            </li>
          ))}
        </ul>
      </TabPanel>
      <TabPanel>
        <div className="account-page__info">
          <div className="account-page__info-name">
            <div className="account-page__icon">{returnFirstCharToUpperCase(user.name, user.surname)}</div>
            <div className="account-page__user-info">
              <span className="account-page__label">Имя Фамилия</span>
              <span className="account-page__user">{firstCharToUpperCase(user.name)} {firstCharToUpperCase(user.surname)}</span>
            </div>
          </div>
          <div className="account-page__info-email">
            <div className="account-page__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z" fill="white" />
              </svg>
            </div>
            <div className="account-page__user-info">
              <span className="account-page__label">Электронная почта</span>
              <span className="account-page__user">{user.email}</span>
            </div>
          </div>
          <Link to={'/'} className="account-page__link btn" onClick={() => logout()}>Выйти из аккаунта</Link>
        </div>
      </TabPanel>
    </Tabs>
  )
}
