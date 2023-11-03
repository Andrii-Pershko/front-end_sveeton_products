import BasketList from 'components/Basket/BasketList';
import { useDispatch } from 'react-redux';
import { handleNewOrder, newOrder } from 'redux/Order/operations';

const Basket = () => {
  const dispatch = useDispatch();
  const order = () => {
    // handleNewOrder({ name: 'Aндрій', phone: '0679543102', price: '10000' });
    dispatch(newOrder());
  };
  return (
    <>
      <BasketList />
      <button onClick={order}>замовити</button>
    </>
  );
};
export default Basket;
