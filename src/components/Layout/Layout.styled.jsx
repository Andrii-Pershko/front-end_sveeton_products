import { NavLink } from 'react-router-dom';
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
  padding-top: 100px;
  width: 100%;
  min-width: 1280px;
  max-width: 1440px;
  padding-left: 96px;
  padding-right: 96px;
  margin: 0 auto;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  &.active {
    color: var(--primal-color);
  }
  &:hover {
    color: #829f19;
  }
  &:active {
    color: var(--primal-color);
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 96px;
  padding-right: 96px;
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
  margin-bottom: 10px;
  margin-left: -8px;
  position: relative;
`;

export const Count = styled.p`
  font-size: 14px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  top: 50%;
  left: 50%;
  transform: translate(-48%, -40%);
`;
