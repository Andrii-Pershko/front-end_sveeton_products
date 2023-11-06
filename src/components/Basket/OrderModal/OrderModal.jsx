import OverlayModal from 'components/OverlayModal';
import { Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { newOrder } from 'redux/Order/operations';
import { FormStyled } from './OrderModal.styled';

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
          <h1>Введіть данні нового продукту</h1>
          <label>
            <p>Ваше імя</p>
            <Field type="text" name="name" />
          </label>
          <label>
            <p>Адреса Доставки</p>
            <Field type="text" name="adress" />
            <p>Якщо інший метод доставки залишете поле пустим</p>
          </label>
          <label>
            <p>Номер для підтвердження замовлення</p>
            <Field type="text" name="phone" />
          </label>

          <button type="submit">Підтвердити</button>
        </FormStyled>
      </Formik>
    </OverlayModal>
  );
};
export default OrderModal;
