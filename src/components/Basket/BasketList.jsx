import ProductItem from 'components/Products/ProductItem';
import { useSelector } from 'react-redux';
import { selectBasketList } from 'redux/basket/selectors';

const BasketList = () => {
  const basketList = useSelector(selectBasketList);

  return (
    <ul>
      {basketList.map(product => (
        <ProductItem key={product._id} product={product} />
      ))}
    </ul>
  );
};
export default BasketList;
