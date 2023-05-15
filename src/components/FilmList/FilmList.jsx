import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { genres } from 'servises/genres';
import './FilmList.scss';
import defaultImages from '../../img/onImages.png';

const FilmList = ({ data }) => {
  const location = useLocation();

  return (
    <ul className="gallery-markup  list">
      {data.map(({ id, poster_path, title, genre_ids, original_title }) => (
        <li key={id} className="film-card">
          <Link to={`/info-film/${id}`} state={{ from: location }}>
            <img
              loading="lazy"
              className="film-poster"
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : defaultImages
              }
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

FilmList.propType = {
  data: PropTypes.array,
};
