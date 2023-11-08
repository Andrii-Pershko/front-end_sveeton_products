import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const StyledField = styled(Field)`
  width: 100%;
  height: 40px;
  background-color: var(--background-color);
  border-radius: 10px;
  padding: 5px 10px 5px 25px;
  border: none;
  font-size: 22px;

  &:focus {
    outline: 3px solid #ddd0a4;
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

export const Label = styled.label`
  margin-bottom: 25px;
`;

export const TitleField = styled.h2`
  margin-bottom: 15px;
  font-size: 20px;
`;

export const Hint = styled.p`
  margin-top: 5px;
  font-size: 12px;
  text-align: center;
`;
