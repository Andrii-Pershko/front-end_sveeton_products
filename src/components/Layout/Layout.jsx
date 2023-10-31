import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, LogoNavLink, StyledLink } from './Layout.styled';
import { useSelector } from 'react-redux';
import { selectIsAdmin } from 'redux/Admin/selectors';

const Layout = () => {
  const isAdmin = useSelector(selectIsAdmin);

  return (
    <Container>
      <Header>
        <LogoNavLink to="/">
          <h1>LOGO</h1>
        </LogoNavLink>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/products">Catalog</StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
          {isAdmin ? (
            <>
              <StyledLink to="/catalog">Favorites</StyledLink>
              <StyledLink to="/order">Favorites</StyledLink>
            </>
          ) : (
            <></>
          )}
        </nav>
      </Header>
      <Suspense fallback={<h1>loading</h1>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
