import Button from 'components/Button/Button';
import Container from 'components/Container/Container';
import FilmList from 'components/FilmList/FilmList';
import { useState, useEffect } from 'react';
import fetchFilms from 'servises/servise';

const Home = () => {
  const [topFilms, setTopFilms] = useState('day');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const searchData = async () => {
      try {
        setIsLoading(true);
        const filmsData = await fetchFilms(`trending/movie/${topFilms}`);
        setMovies([...filmsData.results]);
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
      <Container>
        <h2>Top popular movies</h2>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            gap: 12,
            marginBottom: 12,
          }}
        >
          <li>
            <Button onClick={() => setTopFilms('day')}>In a day</Button>
          </li>
          <li>
            <Button onClick={() => setTopFilms('week')}>In a week</Button>
          </li>
        </ul>
        <FilmList data={movies} />
        {isLoading && <h2>We download movies</h2>}
        {error && <h2>Щось пішло не так</h2>}
      </Container>
    </>
  );
};

export default Home;
