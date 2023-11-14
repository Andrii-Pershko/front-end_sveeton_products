import styled from 'styled-components';

export const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    margin-right: calc((100% - (350px * 3)) / 2);
  }

  li:nth-child(3n) {
    margin-right: 0;
  }

  @media screen and (min-width: 1700px) {
    li {
      margin-right: calc((100% - (350px * 4)) / 3);
    }

    li:nth-child(3n) {
      margin-right: calc((100% - (350px * 4)) / 3);
    }

    li:nth-child(4n) {
      margin-right: 0;
    }
  }
`;
