import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Leyout from 'components/Leyout/Leyout';

const Home = lazy(() => import('../../pages/Home'));
const Search = lazy(() => import('../../pages/Search'));
const Film = lazy(() => import('../Film/Film'));
const Cast = lazy(() => import('../Film/Cast/Cast'));
const Reviews = lazy(() => import('../Film/Reviews/Reviews'));
const Treiler = lazy(() => import('../Film//Treiler/Treiler'));
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
          <Route path="treiler" element={<Treiler />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
