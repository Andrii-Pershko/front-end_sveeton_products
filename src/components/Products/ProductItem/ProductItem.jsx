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
import ModalProducts from '../ModalProducts';
import useScrollLock from 'hooks/useScrollLock';

const ProductItem = ({ product }) => {
  const products = useSelector(selectBasketList).filter(
    item => item._id === product._id
  ).length;

  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [inBasket, setInBasket] = useState(products > 0);
  useScrollLock(isOpenProductModal);

  const dispath = useDispatch();

  const handleChangeInBasket = () => {
    if (inBasket) {
      dispath(deleteProductfromBasket(product));
      setInBasket(false);
      return;
    }

    dispath(addProductinBasket(product));
    setInBasket(true);
  };

  const shortDescription = text => {
    if (text.length > 25) {
      return `${text.slice(0, 25)}...`;
    }
    return text;
  };

  const togleProductModal = e => {
    console.log('Example', e.target.localName === 'button');
    console.log('e', e);
    if (e.target.localName !== 'button') {
      setIsOpenProductModal(!isOpenProductModal);
    }
  };
  return (
    <>
      <Item onClick={togleProductModal}>
        <h2>{shortDescription(product.title)}</h2>
        <ImgContainer>
          <Img src={product.img} alt="my product" />
        </ImgContainer>
        <InfThumb>
          <p>{shortDescription(product.characreristick)}</p>
          <p>{product.price} uah</p>
        </InfThumb>

        <button onClick={handleChangeInBasket}>
          {!inBasket ? 'ДОДАТИ В КОШИК' : 'ВИДАЛИТИ З КОШИКА'}
        </button>
      </Item>
      {isOpenProductModal ? (
        <ModalProducts
          product={product}
          toglle={togleProductModal}
          inBasket={inBasket}
          setInBasket={handleChangeInBasket}
        />
      ) : (
        ''
      )}
    </>
  );
};
export default ProductItem;
