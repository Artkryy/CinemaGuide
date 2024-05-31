import './BaseLayout.css'
import { BrowserRouter, } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { Main } from '../../Components/Main/Main'
import { Footer } from '../../Components/Footer/Footer'
import { useRandomFilm } from '../../hooks/useRandomFilm'
import { useTopFilms } from '../../hooks/useTopFilms'
import { Loader } from '../Loader'


export const BaseLayout = () => {

  const randomFilm = useRandomFilm()
  const topFilms = useTopFilms()



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
        <Header />
        <Main randomFilm={randomFilm.data} topFilms={topFilms.data} />
        <Footer />
      </BrowserRouter>
    )
  }
}
