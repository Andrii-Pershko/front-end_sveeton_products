import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
    from {
        padding-left: 620px;
    }
    to {
        padding-left: 0;
    }
`;

export const Container = styled.div`
  position: relative;
  padding-top: 150px;
  width: 100%;
  min-width: 1280px;
  max-width: 1920px;
  padding-left: 96px;
  padding-right: 96px;
  margin: 0 auto;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;

  &:hover {
    color: rgb(66, 122, 17);
  }
  &.active {
    color: var(--primal-color);
  }

  &:active {
    color: rgb(73, 150, 6);
  }
`;

export const LogoNavLink = styled(StyledLink)`
  animation: ${fadeInAnimation} 1s ease;
  overflow: hidden;
`;

export const ImgLogo = styled.img`
  height: 90px;
  width: 120px;
  object-fit: cover;
`;
export const Header = styled.header`
  position: fixed;
  width: 100%;
  border-bottom: 3px solid #4e5e159d;

  z-index: 2;
  background-color: var(--background-color);

  nav > a {
    font-size: 24px;
    font-weight: 600;
  }

  nav > a:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Basket = styled(StyledLink)`
  margin-left: -8px;
  position: relative;

  &:hover {
    svg {
      fill: rgb(66, 122, 17);
    }
  }

  &:active {
    svg {
      fill: rgb(73, 150, 6);
    }
  }
  &.active {
    svg {
      fill: var(--primal-color);
    }
  }
`;

export const Count = styled.p`
  font-size: 14px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  top: 5px;
  left: 1px;
`;
export const LoaderStyle = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding-top: 100px;
`;

export const IcoBasket = styled(ReactSVG)`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 45px;
    height: 45px;
  }
`;

export const HeaderContainer = styled(Container)`
  padding-top: 0;
  padding-left: 96px;
  padding-right: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
