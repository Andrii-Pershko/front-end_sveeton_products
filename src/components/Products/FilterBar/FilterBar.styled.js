import styled from 'styled-components';

export const Filter = styled.div`
  position: relative;
  padding: 5px 10px;
  max-width: 800px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
  background-color: var(--background-color);
  margin-bottom: 50px;
`;

export const TypeField = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    color: var(--primal-color);
  }
`;

export const TypeFilterContainer = styled.div`
  position: absolute;
  top: 37px;
  left: -0px;
  border-radius: 15px;
  display: block;
  z-index: 1;
  width: 180px;
  height: ${({ open }) => (open ? '200px' : '0px')};
  background-color: #f6e8d7;
  overflow: hidden;
  transition: all 500ms linear;

  ul {
    padding: 20px;

    :not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

export const TitleFilter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div:first-child {
    width: 90px;
  }
`;
