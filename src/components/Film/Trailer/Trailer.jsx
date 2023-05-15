import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchFilms from 'servises/servise';

const Trailer = () => {
  const [trailers, setTrailer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { filmId } = useParams();

  useEffect(() => {
    if (!filmId) return;
    const searchData = async () => {
      try {
        setIsLoading(true);
        const trailers = await fetchFilms(`movie/${filmId}/videos`);
        setTrailer([...trailers.results]);
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
      {trailers?.length !== 0 ? (
        <div>
          {trailers
            .filter(({ type }) => type === 'Trailer')
            .map(({ id, key, name }) => (
              <iframe
                key={id}
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${key}`}
                title={name}
              ></iframe>
            ))}
        </div>
      ) : (
        <p>Trailer unavailable</p>
      )}
      {isLoading && <h2>We are loading reviews</h2>}
      {error && <h2>Щось пішло не так</h2>}
    </>
  );
};

export default Trailer;
