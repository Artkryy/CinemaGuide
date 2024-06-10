import './BaseLayout.css'
import { BrowserRouter, } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { Main } from '../../Components/Main/Main'
import { Footer } from '../../Components/Footer/Footer'
import { useRandomFilm } from '../../hooks/useRandomFilm'
import { useTopFilms } from '../../hooks/useTopFilms'
import { Loader } from '../Loader'
import { useMe } from '../../hooks/useMe'
import { useState } from 'react'


export const BaseLayout = () => {

  const [isModalActive, setModalActive] = useState(false);
  const randomFilm = useRandomFilm()
  const topFilms = useTopFilms()
  const user = useMe();




  if (randomFilm.isError || topFilms.isError) {
    return (
      <p>Что-то пошло не так...</p>
    )
  }

  if (randomFilm.isLoading || topFilms.isLoading) {
    return (
      <Loader />
    )
  }

  if (randomFilm.data && topFilms.data) {
    return (
      <BrowserRouter>
        <Header
        user={user.data}
        isModalActive={isModalActive}
        setModalActive={setModalActive}
        />
        <Main
        randomFilm={randomFilm.data}
        topFilms={topFilms.data}
        user={user.data}
        userLoad={user.isLoading}
        setAuthActive={setModalActive}
        />
        <Footer />
      </BrowserRouter>
    )
  }
}
