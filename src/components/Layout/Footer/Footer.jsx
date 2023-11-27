import { Container } from '../Layout.styled';
import {
  FooterContainer,
  FooterStyled,
  SocialContainer,
  SocialMedia,
} from './Footer.styled';
import instagram from '../../../img/ico/SVG/instagram.svg';
import telegram from '../../../img/ico/SVG/telegram.svg';

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <p>Контакти:</p>
        <SocialContainer>
          <a href="https://www.instagram.com/sveet.on/" target="blanc">
            <SocialMedia src={instagram} />
          </a>
          <a href="https://t.me/s_pershko" target="blanc">
            <SocialMedia src={telegram} />
          </a>
        </SocialContainer>
        <p>Syte by @Andriiinf</p>
      </FooterContainer>
    </FooterStyled>
  );
};
export default Footer;
