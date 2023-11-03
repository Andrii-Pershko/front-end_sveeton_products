import styled from 'styled-components';

export const Modal = styled.div`
  background-color: rgba(255, 255, 255, 1);
  max-height: 80%;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  border-radius: 14px;
`;

export const Overlay = styled.div`
  z-index: 1200;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(18, 20, 23, 0.5);
  justify-content: center;
  align-items: center;
`;
