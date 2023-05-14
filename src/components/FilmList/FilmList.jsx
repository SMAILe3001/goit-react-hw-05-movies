import { genres } from 'servises/genres';
import './FilmList.scss';

const FilmList = ({ data }) => {
  console.log(data);
  return (
    <ul className="gallery-markup  list">
      {data.map(film => (
        <li key={film.id} className="film-card" data-id={film.id}>
          <img
            className="film-poster"
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt="poster"
          />
          <h2 className="film-title">{film.title}</h2>
          <div className="film-info">
            <span className="film-details">
              {film.genre_ids.map(id => genres[id]).join(', ')}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FilmList;
