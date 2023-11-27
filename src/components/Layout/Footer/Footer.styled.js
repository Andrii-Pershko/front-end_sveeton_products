import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import { Container } from '../Layout.styled';

export const FooterStyled = styled.footer`
  margin-top: 80px;
  border-top: 3px solid #4e5e159d;
  border-bottom: 3px solid #4e5e159d;
  display: block;

  width: 100%;
  background-color: var(--background-color);
`;

export const SocialMedia = styled(ReactSVG)`
  width: 32px;
  height: 32px;
`;

export const SocialContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  width: 100px;
  a {
    cursor: pointer;
    display: block;
  }

  svg:hover {
    fill: var(--primal-color);
  }
`;

export const FooterContainer = styled(Container)`
  padding: 50px 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  font-size: 22px;

  p {
    margin-bottom: 20px;
  }
  /* div {
    margin-bottom: 20px;
  } */
`;
