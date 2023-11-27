import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Basket,
  Container,
  Count,
  Header,
  HeaderContainer,
  IcoBasket,
  LoaderStyle,
  LogoNavLink,
  Nav,
  StyledLink,
} from './Layout.styled';
import { useSelector } from 'react-redux';
import { selectIsAdmin } from 'redux/Admin/selectors';
import basket from '../../img/ico/baskett/bag_7156253.svg';
import logo from '../../img/logo.svg';
import { selectBasketList } from 'redux/basket/selectors';
import Loader from 'components/Loader';
import Footer from './Footer';

const Layout = () => {
  const isAdmin = useSelector(selectIsAdmin);
  const products = useSelector(selectBasketList).length;

  return (
    <>
      <Header>
        <HeaderContainer>
          <LogoNavLink to="/">
            <img width={100} src={logo} alt="logo" />
          </LogoNavLink>
          <Nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/products">Products</StyledLink>
            <Basket to="/basket">
              <IcoBasket src={basket} />
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
        </HeaderContainer>
      </Header>
      <Suspense
        fallback={
          <LoaderStyle>
            <Loader />
          </LoaderStyle>
        }
      >
        <Container>
          <Outlet />
        </Container>
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
