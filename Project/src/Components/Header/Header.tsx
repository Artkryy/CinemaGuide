import { Link } from 'react-router-dom'
import { Logo } from '../../ui/Logo'
import './Header.css'
import { Search } from '../../ui/Search'
import { Button } from '../../ui/Button'
import { useState } from 'react'
import { Account } from '../Auth/Account/Account'
import { AuthForm } from '../Auth/AuthForm'

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalActive, setModalActive] = useState<boolean>();

  const handleSearch = (query: string) => {
    setSearchTerm(query);
  };

  const handleAuth = () => {
    setModalActive(true)
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
            <Link to={'/'} className='nav__link'>Главная</Link>
          </li>
          <li className='nav__item'>
            <Link to={'/genres'} className='nav__link'>Жанры</Link>
          </li>
        </ul>
      </nav>
      <Search handleSearch={handleSearch} />
      <Button className='header__btn btn-reset' onClick={handleAuth}>Войти</Button>
    </header>
      {isModalActive && (<AuthForm />) }
    </>
  )
}
