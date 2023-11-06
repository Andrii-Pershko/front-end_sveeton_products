import OverlayModal from 'components/OverlayModal';
import { useDispatch } from 'react-redux';
import { newOrder } from 'redux/Order/operations';

const OrderModal = ({ toglle }) => {
  const dispatch = useDispatch();
  const order = () => {
    dispatch(newOrder());
  };
  return (
    <OverlayModal togleModal={toglle}>
      <button onClick={order}>Підтвердити</button>
    </OverlayModal>
  );
};
export default OrderModal;
