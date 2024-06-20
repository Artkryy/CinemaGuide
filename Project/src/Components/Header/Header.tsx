import { Link } from 'react-router-dom'
import { Logo } from '../../ui/Logo'
import './Header.css'
import { Search } from '../Search'
import { Button } from '../../ui/Button'
import { FC, useEffect, useState } from 'react'
import { AuthForm } from '../Auth/AuthForm'
import { User } from '../../interfaces/User'
import { firstCharToUpperCase } from '../../utils/utils'

interface THeaderProps {
  user: User | undefined;
  isModalActive: boolean;
  setModalActive: any
}

export const Header: FC<THeaderProps> = ({ user, isModalActive, setModalActive }) => {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  const handleAuth = () => {
    if (!user) {
      setModalActive(true)
    }
  }

  return (
    <>
      <header className='header'>
        <div className="header__logo">
          <Logo className='header__logo-img' />
        </div>
        <nav className='header__nav nav'>
          <ul className='nav__list list-reset'>
            <li className='nav__item'>
              {matches && (
                <Link to={'/'} className='nav__link'>Главная</Link>
              )}
            </li>
            <li className='nav__item'>
              <Link to={'/genres'} className='nav__link'>
                {matches && (
                  `Жанры`
                )}
                {!matches && (
                  <svg className='nav__genre' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 11.5C4.51472 11.5 2.5 9.48528 2.5 7C2.5 4.51472 4.51472 2.5 7 2.5C9.48528 2.5 11.5 4.51472 11.5 7C11.5 9.48528 9.48528 11.5 7 11.5ZM7 21.5C4.51472 21.5 2.5 19.4853 2.5 17C2.5 14.5147 4.51472 12.5 7 12.5C9.48528 12.5 11.5 14.5147 11.5 17C11.5 19.4853 9.48528 21.5 7 21.5ZM17 11.5C14.5147 11.5 12.5 9.48528 12.5 7C12.5 4.51472 14.5147 2.5 17 2.5C19.4853 2.5 21.5 4.51472 21.5 7C21.5 9.48528 19.4853 11.5 17 11.5ZM17 21.5C14.5147 21.5 12.5 19.4853 12.5 17C12.5 14.5147 14.5147 12.5 17 12.5C19.4853 12.5 21.5 14.5147 21.5 17C21.5 19.4853 19.4853 21.5 17 21.5ZM7 9.5C8.38071 9.5 9.5 8.38071 9.5 7C9.5 5.61929 8.38071 4.5 7 4.5C5.61929 4.5 4.5 5.61929 4.5 7C4.5 8.38071 5.61929 9.5 7 9.5ZM7 19.5C8.38071 19.5 9.5 18.3807 9.5 17C9.5 15.6193 8.38071 14.5 7 14.5C5.61929 14.5 4.5 15.6193 4.5 17C4.5 18.3807 5.61929 19.5 7 19.5ZM17 9.5C18.3807 9.5 19.5 8.38071 19.5 7C19.5 5.61929 18.3807 4.5 17 4.5C15.6193 4.5 14.5 5.61929 14.5 7C14.5 8.38071 15.6193 9.5 17 9.5ZM17 19.5C18.3807 19.5 19.5 18.3807 19.5 17C19.5 15.6193 18.3807 14.5 17 14.5C15.6193 14.5 14.5 15.6193 14.5 17C14.5 18.3807 15.6193 19.5 17 19.5Z" fill="white" />
                  </svg>
                )}
              </Link>
            </li>
          </ul>
        </nav>
        <Search />
        <Button className='header__btn btn-reset' onClick={handleAuth}>
          {matches && (
            user ?
              <Link to={`/account/${user.name}`}>{firstCharToUpperCase(user.name)}</Link>
              :
              'Войти'
          )}
          {!matches && (
            <Link to={`/account/${user?.name}`} className='header__link-to nav__link'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="white" />
            </svg>
            </Link>
          )}
        </Button>
      </header>
      <AuthForm active={isModalActive} setActive={setModalActive} />
    </>
  )
}
