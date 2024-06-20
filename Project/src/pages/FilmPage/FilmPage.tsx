import './FilmPage.css'
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { DetailFilm } from '../../Components/DetailFilm';
import { Loader } from '../../ui/Loader';
import { User } from '../../interfaces/User';
import { useFilmById } from '../../hooks/useFilmById';
import { formatWithSpaces, replaceLanguageName } from '../../utils/utils';

interface TFilmPageProps {
  user: User | undefined;
  setAuthActive: any;
}

export const FilmPage: FC<TFilmPageProps> = ({ user, setAuthActive }) => {
  const params = useParams();
  const filmId = params.filmId;

  const { data, isError, isLoading } = useFilmById(Number(filmId))

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
                <td className="specifications__prop">{replaceLanguageName(data.language)}</td>
              </tr>
              <tr className="specifications__item">
                <th className="specifications__name">
                  <span className="specifications__name-decor">
                    <span className="specifications__cell">Бюджет</span>
                  </span>
                </th>
                <td className="specifications__prop">{data.budget ? formatWithSpaces(data.budget) : '-'} {data.budget ? data.language === 'ru' ? ' руб.' : ' $' : ''}</td>
              </tr>
              <tr className="specifications__item">
                <th className="specifications__name">
                  <span className="specifications__name-decor">
                    <span className="specifications__cell">Выручка</span>
                  </span>
                </th>
                <td className="specifications__prop">{data.revenue ? formatWithSpaces(data.revenue) : '-'} {data.revenue ? data.language === 'ru' ? ' руб.' : ' $' : ''}</td>
              </tr>
              <tr className="specifications__item">
                <th className="specifications__name">
                  <span className="specifications__name-decor">
                    <span className="specifications__cell">Режиссёр</span>
                  </span>
                </th>
                <td className="specifications__prop">{data.director ? data.director : '-'}</td>
              </tr>
              <tr className="specifications__item">
                <th className="specifications__name">
                  <span className="specifications__name-decor">
                    <span className="specifications__cell">Продакшен</span>
                  </span>
                </th>
                <td className="specifications__prop">{data.production ? data.production : '-'}</td>
              </tr>
              <tr className="specifications__item">
                <th className="specifications__name">
                  <span className="specifications__name-decor">
                    <span className="specifications__cell">Награды</span>
                  </span>
                </th>
                <td className="specifications__prop">{data.awardsSummary ? data.awardsSummary : '-'}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </>
    )
  }
}
