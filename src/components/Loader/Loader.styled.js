import styled from 'styled-components';

export const ThumbLoader = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const ImgThumb = styled.img`
  width: 100%;
`;
export const Palitre = styled(ImgThumb)`
  position: absolute;
  left: 20px;
  transform: rotate(-10deg);
  transform-origin: bottom left;
  animation: rotatePalitre 2s infinite;

  @keyframes rotatePalitre {
    0% {
      transform: rotate(-10deg);
    }

    50% {
      transform: rotate(-25deg);
    }

    100% {
      transform: rotate(-10deg);
    }
  }
`;
export const Pencil = styled(ImgThumb)`
  position: absolute;
  right: -65px;
  top: -25px;
  transform: rotate(-25deg) scale(0.7);
  transform-origin: bottom left;
  animation: rotatePencil 2s infinite;

  @keyframes rotatePencil {
    0% {
      transform: rotate(-25deg) scale(0.7);
    }

    50% {
      transform: rotate(25deg) scale(0.7);
    }

    100% {
      transform: rotate(-25deg) scale(0.7);
    }
  }
`;
