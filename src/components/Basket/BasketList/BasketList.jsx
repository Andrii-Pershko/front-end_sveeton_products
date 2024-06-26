import { useSelector } from 'react-redux';
import { selectBasketList } from 'redux/basket/selectors';
import BasketItem from '../BasketItem';
import { OrderBtn, Table, Td, Th, Tr } from './BasketList.styled';
import { useEffect, useState } from 'react';
import OrderModal from '../OrderModal';

const BasketList = () => {
  const basketList = useSelector(selectBasketList);
  const [orderList, setOrderList] = useState(
    basketList.map(item => {
      return { ...item, amount: 1 };
    })
  );

  const [isOpenOrderModal, setIsOpenOrderModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(() => {
    return basketList.reduce(
      (accumulator, product) => accumulator + Number(product.price),
      0
    );
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

  useEffect(() => {
    // Використовуємо useEffect для встановлення значень, якщо кошик порожній
    if (basketList.length === 0) {
      setTotalPrice(0);
      setTotalCount(0);
    }
  }, [basketList]);

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
      <OrderBtn onClick={toggleModal}>Замовити</OrderBtn>
      {isOpenOrderModal ? (
        <OrderModal
          toglle={toggleModal}
          orderData={{ orderList, totalPrice }}
        />
      ) : null}
    </>
  );
};
export default BasketList;
