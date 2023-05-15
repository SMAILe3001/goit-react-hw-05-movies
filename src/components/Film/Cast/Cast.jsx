import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchFilms from 'servises/servise';
import defaultImages from '../../../img/onImages.png';
import './Cast.scss';

const Cast = () => {
  const [infoFilm, setInfoFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { filmId } = useParams();

  useEffect(() => {
    if (!filmId) return;
    const searchData = async () => {
      try {
        setIsLoading(true);
        const infoFilm = await fetchFilms(`movie/${filmId}/credits`);
        setInfoFilm([...infoFilm.cast]);
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
      {infoFilm?.length ? (
        <ul className="profile_list">
          {infoFilm.map(({ cast_id, profile_path, name, character }) => {
            return (
              <li className="profile_item" key={cast_id}>
                <img
                  className="profile_images"
                  loading="lazy"
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300${profile_path}`
                      : defaultImages
                  }
                  alt={name}
                />
                <h3>{name}</h3>
                <span>In the role - {character}</span>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There is no information about the actors</p>
      )}
      {isLoading && <h2>Loading information about the actors</h2>}
      {error && <h2>Щось пішло не так</h2>}
    </div>
  );
};

export default Cast;
