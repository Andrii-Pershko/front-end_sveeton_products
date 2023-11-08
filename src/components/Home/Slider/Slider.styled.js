import {
  Img,
  ImgContainer,
} from 'components/Admin/Catalog/CatalogList/CatalogList.styled';
import styled from 'styled-components';

export const ImgSlide = styled(ImgContainer)`
  width: 300px;
  height: 300px;
  display: flex !important;
  justify-content: center;
  align-items: center;
`;

export const ImgSlider = styled(Img)`
  width: 300px;
  height: 300px;
`;

export const SliderContainer = styled.div`
  position: absolute;
  top: 100px;
  width: 140vw;
  margin-left: calc(-20% + -96px);
`;
