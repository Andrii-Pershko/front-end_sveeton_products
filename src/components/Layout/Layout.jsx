import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, LogoNavLink, StyledLink } from './Layout.styled';

const Layout = () => {
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
        </nav>
      </Header>
      <Suspense fallback={<h1>loading</h1>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
