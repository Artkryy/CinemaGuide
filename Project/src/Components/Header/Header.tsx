import { Link } from 'react-router-dom'
import { Logo } from '../../ui/Logo'
import './Header.css'
import { Search } from '../Search'
import { Button } from '../../ui/Button'
import { FC } from 'react'
import { AuthForm } from '../Auth/AuthForm'
import { User } from '../../interfaces/User'
import { firstCharToUpperCase } from '../../utils/utils'

interface THeaderProps {
  user: User | undefined;
  isModalActive: boolean;
  setModalActive: any
}

export const Header: FC<THeaderProps> = ({ user, isModalActive, setModalActive }) => {
  // const [searchTerm, setSearchTerm] = useState('');



  // const handleSearch = (query: string) => {
  //   setSearchTerm(query);
  // };

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
              <Link to={'/'} className='nav__link'>Главная</Link>
            </li>
            <li className='nav__item'>
              <Link to={'/genres'} className='nav__link'>Жанры</Link>
            </li>
          </ul>
        </nav>
        <Search />
        <Button className='header__btn btn-reset' onClick={handleAuth}>
          {user ?
            <Link to={`/account/${user.name}`}>{firstCharToUpperCase(user.name)}</Link>
            :
            'Войти'}
        </Button>
      </header>
      <AuthForm active={isModalActive} setActive={setModalActive} />
    </>
  )
}
