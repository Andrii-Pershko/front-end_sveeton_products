const { styled } = require('styled-components');

export const Item = styled.li`
  width: 350px;
  padding-top: 10px;
  position: relative;
  margin-bottom: 40px;
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  transition: transform 0.3s ease;
  background-color: #fff;
  border-radius: 20px;

  &:hover {
    -webkit-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.56);
    -moz-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.56);
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.56);
    transform: scale(1.01);
  }
  h2 {
    text-align: center;
    margin-bottom: 10px;
  }
  button {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  div {
    margin-bottom: 20px;
  }
  > * {
  }
`;

export const InfThumb = styled.div`
  padding: 0 10px 0 10px;
  display: flex;
  justify-content: space-between;
`;
