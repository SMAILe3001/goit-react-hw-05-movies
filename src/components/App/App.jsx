import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Film from 'components/Film/Film';
import Leyout from 'components/Leyout/Leyout';
import Cast from 'components/Film/Cast/Cast';
import Reviews from 'components/Film/Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Leyout />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<div>Search</div>} />
        <Route path="/info-film/:filmId" element={<Film />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
