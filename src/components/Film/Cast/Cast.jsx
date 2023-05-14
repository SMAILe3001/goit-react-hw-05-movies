import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchFilms from 'servises/servise';

const Cast = () => {
  const [infoFilm, setInfoFilm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { filmId } = useParams();

  useEffect(() => {
    if (!filmId) return;
    const searchData = async () => {
      try {
        setIsLoading(true);
        const infoFilm = await fetchFilms(`movie/${filmId}/credits`);
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
  return (
    <div>
      {infoFilm.cast ? (
        <ul>
          {infoFilm.cast.map(actor => {
            return (
              <li key={actor.cast_id}>
                <img
                  loading="lazy"
                  src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                  alt={actor.name}
                />
                <h4>{actor.name}</h4>
                <h4>In the role - {actor.character}</h4>
              </li>
            );
          })}
        </ul>
      ) : (
        'нема інформації'
      )}
      {isLoading && <h2>We download movies</h2>}
      {error && <h2>Щось пішло не так</h2>}
    </div>
  );
};

export default Cast;
