import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Leyout from 'components/Leyout/Leyout';

const Home = lazy(() => import('../../pages/Home'));
const Search = lazy(() => import('../../pages/Search'));
const Film = lazy(() => import('../Film/Film'));
const Cast = lazy(() => import('../Film/Cast/Cast'));
const Reviews = lazy(() => import('../Film/Reviews/Reviews'));
const Trailer = lazy(() => import('../Film/Trailer/Trailer'));
const NotFound = lazy(() => import('../NotFound/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Leyout />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/info-film/:filmId" element={<Film />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="trailer" element={<Trailer />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
