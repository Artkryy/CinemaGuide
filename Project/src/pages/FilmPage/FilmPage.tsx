import './FilmPage.css'
import { FC } from 'react';
import { Film } from '../../interfaces/Film';
import { useParams } from 'react-router-dom';
import { DetailFilm } from '../../Components/DetailFilm';
import { useFilmByGenre } from '../../hooks/useFilmByGenre';
import { Loader } from '../../ui/Loader';
import { useFavorites } from '../../hooks/useFavorites';
import { User } from '../../interfaces/User';
import { useFilmById } from '../../hooks/useFilmById';

interface TFilmPageProps {
  topFilms?: Film[];
  randomFilm?: Film;
  user: User | undefined;
  setAuthActive: any;
}

export const FilmPage: FC<TFilmPageProps> = ({ topFilms, randomFilm, user, setAuthActive }) => {
  if (topFilms) {
    const { filmId } = useParams();
    const film = topFilms.find(film => film.id === Number(filmId))
    if (film) {
      return (
        <>
          <DetailFilm
            film={film}
            aboutFilmBtn={false}
            resetBtn={false}
            user={user}
            setAuthActive={setAuthActive} />
          <section className='about-film'>
            <h2 className="about-film__title">О фильме</h2>
            <table className="about-film__specifications specifications">
              <tbody className="specifications__table-body">
                <tr className="specifications__item">
                  <th className="specifications__name">
                    <span className="specifications__name-decor">
                      <span className="specifications__cell">Язык оригинала</span>
                    </span>
                  </th>
                  <td className="specifications__prop">{film.language}</td>
                </tr>
                <tr className="specifications__item">
                  <th className="specifications__name">
                    <span className="specifications__name-decor">
                      <span className="specifications__cell">Бюджет</span>
                    </span>
                  </th>
                  <td className="specifications__prop">{film.budget}</td>
                </tr>
                <tr className="specifications__item">
                  <th className="specifications__name">
                    <span className="specifications__name-decor">
                      <span className="specifications__cell">Выручка</span>
                    </span>
                  </th>
                  <td className="specifications__prop">{film.revenue}</td>
                </tr>
                <tr className="specifications__item">
                  <th className="specifications__name">
                    <span className="specifications__name-decor">
                      <span className="specifications__cell">Режиссёр</span>
                    </span>
                  </th>
                  <td className="specifications__prop">{film.director}</td>
                </tr>
                <tr className="specifications__item">
                  <th className="specifications__name">
                    <span className="specifications__name-decor">
                      <span className="specifications__cell">Продакшен</span>
                    </span>
                  </th>
                  <td className="specifications__prop">{film.production}</td>
                </tr>
                <tr className="specifications__item">
                  <th className="specifications__name">
                    <span className="specifications__name-decor">
                      <span className="specifications__cell">Награды</span>
                    </span>
                  </th>
                  <td className="specifications__prop">{film.awardsSummary}</td>
                </tr>
              </tbody>
            </table>
          </section>
        </>
      )
    }
  }

  if (randomFilm) {
    return (
      <>
        <DetailFilm
          film={randomFilm}
          aboutFilmBtn={false}
          resetBtn={false}
          user={user}
          setAuthActive={setAuthActive}
        />
        <section className='about-film'>
          <h2 className="about-film__title">О фильме</h2>
          <table className="about-film__specifications specifications">
            <tbody className="specifications__table-body">
              <tr className="specifications__item">
                <th className="specifications__name">
                  <span className="specifications__name-decor">
                    <span className="specifications__cell">Язык оригинала</span>
                  </span>
                </th>
                <td className="specifications__prop">{randomFilm.language}</td>
              </tr>
              <tr className="specifications__item">
                <th className="specifications__name">
                  <span className="specifications__name-decor">
                    <span className="specifications__cell">Бюджет</span>
                  </span>
                </th>
                <td className="specifications__prop">{randomFilm.budget}</td>
              </tr>
              <tr className="specifications__item">
                <th className="specifications__name">
                  <span className="specifications__name-decor">
                    <span className="specifications__cell">Выручка</span>
                  </span>
                </th>
                <td className="specifications__prop">{randomFilm.revenue}</td>
              </tr>
              <tr className="specifications__item">
                <th className="specifications__name">
                  <span className="specifications__name-decor">
                    <span className="specifications__cell">Режиссёр</span>
                  </span>
                </th>
                <td className="specifications__prop">{randomFilm.director}</td>
              </tr>
              <tr className="specifications__item">
                <th className="specifications__name">
                  <span className="specifications__name-decor">
                    <span className="specifications__cell">Продакшен</span>
                  </span>
                </th>
                <td className="specifications__prop">{randomFilm.production}</td>
              </tr>
              <tr className="specifications__item">
                <th className="specifications__name">
                  <span className="specifications__name-decor">
                    <span className="specifications__cell">Награды</span>
                  </span>
                </th>
                <td className="specifications__prop">{randomFilm.awardsSummary}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </>
    )
  }

  const params = useParams();

  if (params.genre) {
    const genre = params.genre;
    const filmId = params.filmId;

    const { data, isLoading, isError } = useFilmByGenre(genre)

    if (isError) {
      return (
        <p>Что-то пошло не так...</p>
      )
    }

    if (isLoading) {
      return (
        <Loader />
      )
    }

    const film = data.find(film => film.id === Number(filmId))
    if (film) {
      return (
        <>
          <DetailFilm
            film={film}
            aboutFilmBtn={false}
            resetBtn={false}
            user={user}
            setAuthActive={setAuthActive}
          />
          <section className='about-film'>
            <h2 className="about-film__title">О фильме</h2>
            <table className="about-film__specifications specifications">
              <tbody className="specifications__table-body">
                <tr className="specifications__item">
                  <th className="specifications__name">
                    <span className="specifications__name-decor">
                      <span className="specifications__cell">Язык оригинала</span>
                    </span>
                  </th>
                  <td className="specifications__prop">{film.language}</td>
                </tr>
                <tr className="specifications__item">
                  <th className="specifications__name">
                    <span className="specifications__name-decor">
                      <span className="specifications__cell">Бюджет</span>
                    </span>
                  </th>
                  <td className="specifications__prop">{film.budget}</td>
                </tr>
                <tr className="specifications__item">
                  <th className="specifications__name">
                    <span className="specifications__name-decor">
                      <span className="specifications__cell">Выручка</span>
                    </span>
                  </th>
                  <td className="specifications__prop">{film.revenue}</td>
                </tr>
                <tr className="specifications__item">
                  <th className="specifications__name">
                    <span className="specifications__name-decor">
                      <span className="specifications__cell">Режиссёр</span>
                    </span>
                  </th>
                  <td className="specifications__prop">{film.director}</td>
                </tr>
                <tr className="specifications__item">
                  <th className="specifications__name">
                    <span className="specifications__name-decor">
                      <span className="specifications__cell">Продакшен</span>
                    </span>
                  </th>
                  <td className="specifications__prop">{film.production}</td>
                </tr>
                <tr className="specifications__item">
                  <th className="specifications__name">
                    <span className="specifications__name-decor">
                      <span className="specifications__cell">Награды</span>
                    </span>
                  </th>
                  <td className="specifications__prop">{film.awardsSummary}</td>
                </tr>
              </tbody>
            </table>
          </section>
        </>
      )
    }
  }

  if (params.user) {
    const filmId = params.filmId;

    const { data, isLoading, isError } = useFavorites()

    if (isError) {
      return (
        <p>Что-то пошло не так...</p>
      )
    }

    if (isLoading) {
      return (
        <Loader />
      )
    }

    const film = data?.find(film => film.id === Number(filmId))
    if (film) {
      return (
        <>
          <DetailFilm
            film={film}
            aboutFilmBtn={false}
            resetBtn={false}
            user={user}
            setAuthActive={setAuthActive}
          />
          <section className='about-film'>
            <h2 className="about-film__title">О фильме</h2>
            <table className="about-film__specifications specifications">
              <tbody className="specifications__table-body">
                <tr className="specifications__item">
                  <th className="specifications__name">
                    <span className="specifications__name-decor">
                      <span className="specifications__cell">Язык оригинала</span>
                    </span>
                  </th>
                  <td className="specifications__prop">{film.language}</td>
                </tr>
                <tr className="specifications__item">
                  <th className="specifications__name">
                    <span className="specifications__name-decor">
                      <span className="specifications__cell">Бюджет</span>
                    </span>
                  </th>
                  <td className="specifications__prop">{film.budget}</td>
                </tr>
                <tr className="specifications__item">
                  <th className="specifications__name">
                    <span className="specifications__name-decor">
                      <span className="specifications__cell">Выручка</span>
                    </span>
                  </th>
                  <td className="specifications__prop">{film.revenue}</td>
                </tr>
                <tr className="specifications__item">
                  <th className="specifications__name">
                    <span className="specifications__name-decor">
                      <span className="specifications__cell">Режиссёр</span>
                    </span>
                  </th>
                  <td className="specifications__prop">{film.director}</td>
                </tr>
                <tr className="specifications__item">
                  <th className="specifications__name">
                    <span className="specifications__name-decor">
                      <span className="specifications__cell">Продакшен</span>
                    </span>
                  </th>
                  <td className="specifications__prop">{film.production}</td>
                </tr>
                <tr className="specifications__item">
                  <th className="specifications__name">
                    <span className="specifications__name-decor">
                      <span className="specifications__cell">Награды</span>
                    </span>
                  </th>
                  <td className="specifications__prop">{film.awardsSummary}</td>
                </tr>
              </tbody>
            </table>
          </section>
        </>
      )
    }
  }

  if (params.film) {
    const filmId = params.filmId;

    if (filmId) {
      const { data, isLoading, isError } = useFilmById(Number(filmId))


      if (isError) {
        return (
          <p>Что-то пошло не так...</p>
        )
      }

      if (isLoading) {
        return (
          <Loader />
        )
      }

      if (data) {
        return (
          <>
            <DetailFilm
              film={data}
              aboutFilmBtn={false}
              resetBtn={false}
              user={user}
              setAuthActive={setAuthActive}
            />
            <section className='about-film'>
              <h2 className="about-film__title">О фильме</h2>
              <table className="about-film__specifications specifications">
                <tbody className="specifications__table-body">
                  <tr className="specifications__item">
                    <th className="specifications__name">
                      <span className="specifications__name-decor">
                        <span className="specifications__cell">Язык оригинала</span>
                      </span>
                    </th>
                    <td className="specifications__prop">{data.language}</td>
                  </tr>
                  <tr className="specifications__item">
                    <th className="specifications__name">
                      <span className="specifications__name-decor">
                        <span className="specifications__cell">Бюджет</span>
                      </span>
                    </th>
                    <td className="specifications__prop">{data.budget}</td>
                  </tr>
                  <tr className="specifications__item">
                    <th className="specifications__name">
                      <span className="specifications__name-decor">
                        <span className="specifications__cell">Выручка</span>
                      </span>
                    </th>
                    <td className="specifications__prop">{data.revenue}</td>
                  </tr>
                  <tr className="specifications__item">
                    <th className="specifications__name">
                      <span className="specifications__name-decor">
                        <span className="specifications__cell">Режиссёр</span>
                      </span>
                    </th>
                    <td className="specifications__prop">{data.director}</td>
                  </tr>
                  <tr className="specifications__item">
                    <th className="specifications__name">
                      <span className="specifications__name-decor">
                        <span className="specifications__cell">Продакшен</span>
                      </span>
                    </th>
                    <td className="specifications__prop">{data.production}</td>
                  </tr>
                  <tr className="specifications__item">
                    <th className="specifications__name">
                      <span className="specifications__name-decor">
                        <span className="specifications__cell">Награды</span>
                      </span>
                    </th>
                    <td className="specifications__prop">{data.awardsSummary}</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </>
        )
      }
    }
  }
}
