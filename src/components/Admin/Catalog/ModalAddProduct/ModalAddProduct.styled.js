import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const LabelStyled = styled.label`
  display: block;
  margin-top: 15px;

  p {
    margin-bottom: 5px;
    text-align: center;
  }
`;

export const StyledFied = styled(Field)`
  padding: 5px 15px;
  width: 350px;
  height: 40px;
  border: 2px solid var(--primal-color);
  border-radius: 10px;
  font-size: 22px;
`;

export const ModalAddProducts = styled.div`
  display: flex;
  justify-content: center;
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
  background-color: rgba(18, 20, 23, 0.5);
`;

export const AddPhoto = styled(LabelStyled)`
  display: block;
  padding: 5px 15px;
  width: 350px;
  height: 40px;
  border: 2px solid var(--primal-color);
  border-radius: 10px;
  font-size: 22px;
  overflow: hidden;
  margin-top: 5px;

  input {
    display: none;
  }
`;

export const PhotoText = styled.p`
  margin-top: 15px;
`;

export const SubmitBtn = styled.button`
  margin-top: 20px;
  width: 200px;
  font-weight: 600;
  font-style: 24px;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleModal = styled.h1`
  font-size: 28px;
`;

export const SelectStyled = styled(StyledFied)`
  text-align: center;
  padding: 0;
`;

export const ErrorMessageStyle = styled(ErrorMessage)`
  position: absolute;
  color: red;

  &[id='name'] {
    top: 58%;
    font-size: 10px;
    transform: translate(0, -50%);
    line-height: 0;
    left: 35px;
  }
`;
