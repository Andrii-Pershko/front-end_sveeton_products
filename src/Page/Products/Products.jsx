import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from 'redux/products/operations';
import { selectIsLoading, selectProductList } from 'redux/products/selectors';

const Products = () => {
  const dispatch = useDispatch();
  const productList = useSelector(selectProductList);
  const isLoading = useSelector(selectIsLoading);
  console.log('Example', isLoading);
  console.log('Example', productList);

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  return <h1>ProductsPage</h1>;
};
export default Products;
