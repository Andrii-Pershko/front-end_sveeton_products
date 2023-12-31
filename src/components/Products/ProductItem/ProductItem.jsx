import { useState } from 'react';
import { InfThumb, Item, Type } from './ProductItem.styled';
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
import { shortDescription } from 'utils/utils';

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

  const togleProductModal = e => {
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
        <Type>{product.type}</Type>
        <InfThumb>
          <p>{shortDescription(product.characreristick)}</p>
          <p>{product.price} грн</p>
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
