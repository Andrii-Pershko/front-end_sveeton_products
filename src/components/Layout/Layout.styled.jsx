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
    color: var(--primal-color);
  }
  &:active {
    color: #0b44cd;
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
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav > a {
    font-size: 24px;
    font-weight: 600;
  }

  nav > a:not(:last-child) {
    margin-right: 20px;
  }
`;
