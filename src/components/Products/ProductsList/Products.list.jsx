import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from 'redux/products/operations';
import { selectIsLoading, selectProductList } from 'redux/products/selectors';
import ProductItem from '../ProductItem';
import { ProductList } from './Products.styled';
import Loader from 'components/Loader';

const Products = () => {
  const dispatch = useDispatch();
  const productList = useSelector(selectProductList);
  const isLoading = useSelector(selectIsLoading);
  const reverseProductList = [...productList].reverse();

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <ProductList>
      {reverseProductList.map(product => (
        <ProductItem key={product._id} product={product} />
      ))}
    </ProductList>
  );
};
export default Products;
