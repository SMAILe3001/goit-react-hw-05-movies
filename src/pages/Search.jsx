import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import fetchFilms from 'servises/servise';
import Container from 'components/Container/Container';
import FilmList from 'components/FilmList/FilmList';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchFilms, setSearchFilms] = useState('');
  const [searchText, setSearchText] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const query = searchParams.get('query') ?? '';

  const handelInputSubmit = e => {
    e.preventDefault();

    if (searchText === '') return;

    setSearchParams({ query: searchText });
    setSearchFilms(searchText);
  };

  const updataQueryString = e => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (query === '') return;
    setSearchFilms(query);
  }, [query]);

  useEffect(() => {
    if (searchFilms === '') return;
    const searchData = async () => {
      try {
        setIsLoading(true);
        const filmsData = await fetchFilms(`search/movie`, searchFilms);
        setMovies([...filmsData.results]);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    searchData();
  }, [searchFilms]);

  return (
    <Container>
      <form style={{ marginBottom: 12 }} onSubmit={handelInputSubmit}>
        <label>
          <input
            style={{
              width: 550,
              height: 25,
              marginRight: 12,
              borderRadius: 4,
              fontSize: 16,
              paddingLeft: 8,
            }}
            type="text"
            onChange={updataQueryString}
            value={searchText}
          />
        </label>
        <button type="submit">search</button>
      </form>
      {movies?.length !== 0 && <FilmList data={movies} />}
      {isLoading && <h2>We download movies</h2>}
      {error && <h2>Щось пішло не так</h2>}
    </Container>
  );
};

export default Search;
