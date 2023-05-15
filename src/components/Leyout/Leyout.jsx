import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';

const Leyout = () => {
  return (
    <>
      <header>
        <Container>
          <nav>
            <ul style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
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
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Leyout;
