import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from 'redux/products/operations';
import { selectProductList } from 'redux/products/selectors';
import ProductItem from '../ProductItem';
import { ProductList } from './Products.styled';

const Products = () => {
  const dispatch = useDispatch();
  const productList = useSelector(selectProductList);

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);
  return (
    <ProductList>
      {productList.map(product => (
        <ProductItem key={product._id} product={product} />
      ))}
    </ProductList>
  );
};
export default Products;
