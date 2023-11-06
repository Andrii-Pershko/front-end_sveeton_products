import { ImgContainer } from 'components/Admin/Catalog/CatalogList/CatalogList.styled';

const { default: styled } = require('styled-components');

export const ItemFullInf = styled.div`
  width: 550px;
  transition: transform 0.3s ease;
  background-color: #fff;
  border-radius: 20px;

  h2 {
    text-align: center;

    margin-bottom: 10px;
  }
  button {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }

  div {
    margin-bottom: 20px;
  }
  > * {
  }
`;

export const ImgThumbFull = styled(ImgContainer)`
  width: 550px;
  height: auto;
`;
