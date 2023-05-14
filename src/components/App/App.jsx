import { NavLink, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Головна</NavLink>
          </li>
          <li>
            <NavLink to="/search">Пошук</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<div>Пошук</div>} />
        <Route path="/search/:filmId" element={<div>Фільм</div>} />
      </Routes>
    </div>
  );
};
