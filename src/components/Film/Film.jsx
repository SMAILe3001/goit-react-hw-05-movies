import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import fetchFilms from 'servises/servise';
import './Film.scss';
import Container from 'components/Container/Container';
import Button from 'components/Button/Button';

const Film = () => {
  const [infoFilm, setInfoFilm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { filmId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!filmId) return;
    const searchData = async () => {
      try {
        setIsLoading(true);
        const infoFilm = await fetchFilms(`movie/${filmId}`);
        setInfoFilm({ ...infoFilm });
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    searchData();
  }, [filmId]);

  const { poster_path, original_title, title, vote_average, overview, genres } =
    infoFilm;

  return (
    <Container>
      <Link to={backLinkLocationRef.current}>
        <Button>назад</Button>
      </Link>
      <div className="film_info">
        {poster_path && (
          <img
            loading="lazy"
            className="film_images"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={original_title}
          />
        )}
        <div>
          <h2>{title}</h2>
          <p>User rating: {vote_average}</p>
          <h3>Movie description</h3>
          {overview ? <p>{overview}</p> : 'немає опису'}
          <h3>Genre/Genres</h3>
          {genres && <p>{genres.map(({ name }) => name).join(', ')}</p>}
          <ul style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
            <li>
              <Link to="cast">
                <Button>Cast</Button>
              </Link>
            </li>
            <li>
              <Link to="reviews">
                <Button>Reviews</Button>
              </Link>
            </li>
            <li>
              <Link to="treiler">
                <Button>Treiler</Button>
              </Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>

      {isLoading && <h2>We download movies</h2>}
      {error && <h2>Щось пішло не так</h2>}
    </Container>
  );
};

export default Film;
