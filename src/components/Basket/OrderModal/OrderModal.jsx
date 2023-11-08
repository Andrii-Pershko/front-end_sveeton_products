import OverlayModal from 'components/OverlayModal';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { newOrder } from 'redux/Order/operations';
import {
  FormStyled,
  Hint,
  Label,
  StyledField,
  Title,
  TitleField,
} from './OrderModal.styled';

const OrderModal = ({ toglle, orderData }) => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    dispatch(newOrder({ userData: e, orderData }));
  };

  const initialValues = {
    name: '',
    adress: '',
    phone: '',
  };
  return (
    <OverlayModal togleModal={toglle}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <FormStyled>
          <Title>Введіть данні замовлення</Title>
          <Label>
            <TitleField>Ваше імя</TitleField>
            <StyledField type="text" name="name" />
          </Label>
          <Label>
            <TitleField>Адреса Доставки</TitleField>
            <StyledField type="text" name="adress" />
            <Hint>Введіть місто, службу доставки та номер відділеня</Hint>
          </Label>
          <Label>
            <TitleField>Номер для підтвердження замовлення</TitleField>
            <StyledField type="text" name="phone" />
          </Label>

          <button type="submit">Підтвердити</button>
        </FormStyled>
      </Formik>
    </OverlayModal>
  );
};
export default OrderModal;
