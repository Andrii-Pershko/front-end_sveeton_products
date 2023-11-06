import { useSelector } from 'react-redux';
import { selectBasketList } from 'redux/basket/selectors';
import BasketItem from '../BasketItem';
import { Table, Td, Th, Tr } from './BasketList.styled';
import { useState } from 'react';
import OrderModal from '../OrderModal';

const BasketList = () => {
  const basketList = useSelector(selectBasketList);
  const [orderList, setOrderList] = useState(basketList);
  const [isOpenOrderModal, setIsOpenOrderModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(() => {
    let price = 0;
    basketList.map(product => (price = price + Number(product.price)));
    return price;
  });
  const [totalCount, setTotalCount] = useState(basketList.length);

  const ref = {
    orderList,
    totalCount,
    totalPrice,
    setOrderList,
    setTotalCount,
    setTotalPrice,
  };

  const toggleModal = () => {
    setIsOpenOrderModal(!isOpenOrderModal);
  };

  

  return (
    <>
      <Table>
        <thead>
          <Tr>
            <Th>Назва</Th>
            <Th>Опис</Th>
            <Th>Фото</Th>
            <Th>Ціна</Th>
            <Th>Кількість</Th>
          </Tr>
        </thead>
        <tbody>
          {basketList.map(product => (
            <BasketItem key={product._id} product={product} functional={ref} />
          ))}
          <tr>
            <td colSpan="3"></td>
            <Td>{totalPrice} грн</Td>
            <Td>{totalCount}</Td>
          </tr>
        </tbody>
      </Table>
      <button onClick={toggleModal}>Замовити</button>
      {isOpenOrderModal ? (
        <OrderModal toglle={toggleModal} orderData={orderList} />
      ) : null}
    </>
  );
};
export default BasketList;
