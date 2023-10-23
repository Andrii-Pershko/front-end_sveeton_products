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

  return (
    <>
      <h1>ProductsPage</h1>
      <ul>
        {productList.map(product => (
          <li key={product._id}>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.characreristick}</p>
            <p>{product.img}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Products;
