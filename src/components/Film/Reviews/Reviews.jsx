import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchFilms from 'servises/servise';

const Reviews = () => {
  const [infoFilm, setInfoFilm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { filmId } = useParams();

  useEffect(() => {
    if (!filmId) return;
    const searchData = async () => {
      try {
        setIsLoading(true);
        const infoFilm = await fetchFilms(`movie/${filmId}/reviews`);
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
    <>
      {infoFilm.results?.length ? (
        <ul>
          {infoFilm.results.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>
                  <b>{author}</b> - "{content}"
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        'There are no reviews'
      )}
      {isLoading && <h2>We are loading reviews</h2>}
      {error && <h2>Щось пішло не так</h2>}
    </>
  );
};

export default Reviews;
