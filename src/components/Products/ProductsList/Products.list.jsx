import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from 'redux/products/operations';
import { selectIsLoading, selectProductList } from 'redux/products/selectors';
import ProductItem from '../ProductItem';
import { ProductList } from './Products.styled';
import Loader from 'components/Loader';
import FilterBar from '../FilterBar';

const Products = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const productList = useSelector(selectProductList);
  const reverseProductList = [...productList].reverse();
  const filterProductList = '';
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <FilterBar />
      <ProductList>
        {reverseProductList.map(product => (
          <ProductItem key={product._id} product={product} />
        ))}
      </ProductList>
    </>
  );
};
export default Products;
