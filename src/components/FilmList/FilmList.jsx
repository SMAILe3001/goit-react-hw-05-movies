import { genres } from 'servises/genres';
import './FilmList.scss';
import { Link } from 'react-router-dom';

const FilmList = ({ data }) => {
  return (
    <ul className="gallery-markup  list">
      {data.map(({ id, poster_path, title, genre_ids, original_title }) => (
        <li key={id} className="film-card">
          <Link to={`/info-film/${id}`}>
            <img
              loading="lazy"
              className="film-poster"
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={original_title}
            />
            <h2 className="film-title">{title}</h2>
            <div className="film-info">
              <span className="film-details">
                {genre_ids.map(id => genres[id]).join(', ')}
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FilmList;
