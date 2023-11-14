import { Item } from 'components/Products/ProductItem/ProductItem.styled';
import styled from 'styled-components';

export const CatalogItem = styled(Item)`
  height: 700px;
`;

export const BtnThumb = styled.div`
  margin-top: auto;
  button:nth-child(1) {
    margin-bottom: 20px;
  }
`;
