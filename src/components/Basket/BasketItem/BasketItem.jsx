import { Img } from 'components/Admin/Catalog/CatalogList/CatalogList.styled';
import { ImgThumb, Td, Tr } from '../BasketList/BasketList.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProductfromBasket } from 'redux/basket/basketSlice';
import { Math } from './BasketItem.styled';

const BasketItem = ({ product, functional }) => {
  const {
    totalPrice,
    totalCount,
    setTotalCount,
    setTotalPrice,
    orderList,
    setOrderList,
  } = functional;
  const [amount, setAmount] = useState(1);

  const increment = () => {
    setAmount(amount + 1);
    setTotalPrice(Number(totalPrice) + Number(product.price));
    setTotalCount(totalCount + 1);
    setOrderList(
      orderList.map(item => {
        if (product._id === item._id) {
          item.amount = amount + 1;
        }
        return item;
      })
    );
  };
  const decrement = () => {
    if (amount === 1) {
      return;
    }
    setAmount(amount - 1);
    setTotalPrice(totalPrice - product.price);
    setTotalCount(totalCount - 1);
    setOrderList(
      orderList.map(item => {
        if (product._id === item._id) {
          item.amount = amount;
        }
        return item;
      })
    );
  };
  const dispath = useDispatch();
  const deleteWithBasket = () => {
    dispath(deleteProductfromBasket(product));
  };

  return (
    <Tr key={product._id}>
      <Td>{product.title}</Td>
      <Td>{product.characreristick}</Td>
      <Td>
        <ImgThumb>
          <Img src={product.img} alt={product.description} />
        </ImgThumb>
      </Td>
      <Td>{product.price} грн</Td>
      <Td>
        <Math onClick={decrement}>- </Math>
        {amount}
        <Math onClick={increment}> +</Math>
      </Td>
      <Td>
        <button onClick={deleteWithBasket}>Видалити</button>
      </Td>
    </Tr>
  );
};
export default BasketItem;
