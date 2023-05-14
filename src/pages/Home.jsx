import FilmList from 'components/FilmList/FilmList';
import { useState, useEffect } from 'react';
import fetchFilms from 'servises/servise';

const Home = () => {
  const [topFilms, setTopFilms] = useState('day');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [totalPage, setTotalPage] = useState(false);

  useEffect(() => {
    const searchData = async () => {
      try {
        setIsLoading(true);
        const filmsData = await fetchFilms(`trending/movie/${topFilms}`);
        setMovies([...filmsData.results]);
        // setTotalPage(filmsData.total_pages);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    searchData();
  }, [topFilms]);

  return (
    <>
      <h2>Топ популярних фільмів</h2>
      <ul>
        <li>
          <button type="button" onClick={() => setTopFilms('day')}>
            За день
          </button>
        </li>
        <li>
          <button type="button" onClick={() => setTopFilms('week')}>
            За тиждень
          </button>
        </li>
      </ul>
      {isLoading && <h2>Завантажуємо фільми</h2>}
      <FilmList data={movies} />
      {error && <h2>Щось пішло не так</h2>}
    </>
  );
};

export default Home;
