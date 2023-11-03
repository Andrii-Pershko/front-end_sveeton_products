import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Basket,
  Container,
  Count,
  Header,
  LogoNavLink,
  Nav,
  StyledLink,
} from './Layout.styled';
import { useSelector } from 'react-redux';
import { selectIsAdmin } from 'redux/Admin/selectors';
import basket from '../../img/ico/baskett/bag_7156253.svg';
import logo from '../../img/logo.svg';
import { selectBasketList } from 'redux/basket/selectors';

const Layout = () => {
  const isAdmin = useSelector(selectIsAdmin);
  const products = useSelector(selectBasketList).length;

  return (
    <>
      <Header>
        <LogoNavLink to="/">
          <img width={100} src={logo} alt="logo" />
        </LogoNavLink>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/products">Products</StyledLink>
          <Basket to="/basket">
            <img width={45} src={basket} alt="basket" />
            {products > 0 ? <Count>{products}</Count> : <></>}
          </Basket>

          {isAdmin ? (
            <>
              <StyledLink to="superAdmin/catalog">Каталог</StyledLink>
              <StyledLink to="superAdmin/orders">Замовлення</StyledLink>
            </>
          ) : (
            <></>
          )}
        </Nav>
      </Header>
      <Container>
        <Suspense fallback={<h1>loading</h1>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
