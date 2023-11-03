import { useState } from 'react';
import { InfThumb, Item } from './ProductItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductinBasket,
  deleteProductfromBasket,
} from 'redux/basket/basketSlice';
import { selectBasketList } from 'redux/basket/selectors';
import {
  Img,
  ImgContainer,
} from 'components/Admin/Catalog/CatalogList/CatalogList.styled';

const ProductItem = ({ product }) => {
  const dispath = useDispatch();

  const products = useSelector(selectBasketList).filter(
    item => item._id === product._id
  ).length;

  const [inBasket, setInBasket] = useState(products > 0);

  const handleChangeInBasket = () => {
    if (inBasket) {
      dispath(deleteProductfromBasket(product));
      setInBasket(false);
      return;
    }

    dispath(addProductinBasket(product));
    setInBasket(true);
  };
  return (
    <Item>
      <h2>{product.title}</h2>
      <ImgContainer>
        <Img src={product.img} alt="my product" />
      </ImgContainer>
      <InfThumb>
        <p>{product.characreristick}</p>
        <p>{product.price} uah</p>
      </InfThumb>

      <button onClick={handleChangeInBasket}>
        {!inBasket ? 'ДОДАТИ В КОШИК' : 'ВИДАЛИТИ З КОШИКА'}
      </button>
    </Item>
  );
};
export default ProductItem;
