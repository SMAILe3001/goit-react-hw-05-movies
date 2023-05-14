import Container from 'components/Container/Container';
import { NavLink, Outlet } from 'react-router-dom';

const Leyout = () => {
  return (
    <>
      <header>
        <Container>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/search">Search</NavLink>
              </li>
            </ul>
          </nav>
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Leyout;
