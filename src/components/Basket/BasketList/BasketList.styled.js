import { ImgContainer } from 'components/Admin/Catalog/CatalogList/CatalogList.styled';
import styled from 'styled-components';

export const TitleList = styled.li`
  display: flex;
  p {
    display: block;
  }

  :nth-child(2) {
    margin-left: 250px;
  }
  :nth-child(3) {
    margin-left: 250px;
  }

  :nth-child(4) {
    margin-left: auto;
    margin-right: 40px;
  }
`;

export const ImgThumb = styled(ImgContainer)`
  width: 100px;
  height: 100px;
  display: flex;
  margin-right: auto;
  margin-left: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  background-color: #f2f2f2;
`;
export const Td = styled.td`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
`;

export const Tr = styled.tr`
  :nth-child(4) {
    width: 135px;
  }
  :nth-child(3) {
    width: 180px;
  }
`;
export const OrderBtn = styled.button`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
`;
