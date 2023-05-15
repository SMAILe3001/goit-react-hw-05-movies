import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchFilms from 'servises/servise';

const Treiler = () => {
  const [treilers, setTreiler] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { filmId } = useParams();

  useEffect(() => {
    if (!filmId) return;
    const searchData = async () => {
      try {
        setIsLoading(true);
        const treilers = await fetchFilms(`movie/${filmId}/videos`);
        setTreiler([...treilers.results]);
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
      <div>
        {treilers
          .filter(({ type }) => type === 'Trailer')
          .map(treiler => (
            <iframe
              key={treiler.id}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${treiler.key}`}
              title={treiler.name}
              allowfullscreen
            ></iframe>
          ))}
      </div>
      {isLoading && <h2>We are loading reviews</h2>}
      {error && <h2>Щось пішло не так</h2>}
    </>
  );
};

export default Treiler;
