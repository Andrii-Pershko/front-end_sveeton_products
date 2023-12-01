import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from 'redux/products/operations';
import { selectIsLoading, selectProductList } from 'redux/products/selectors';
import ProductItem from '../ProductItem';
import { ProductList } from './Products.styled';
import Loader from 'components/Loader';
import FilterBar from '../FilterBar';
import { raiceFilter, waneFilter } from 'utils/utils';

const Products = () => {
  const [typeProduct, setTypeProduct] = useState('Всі');
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const productList = useSelector(selectProductList);
  const reverseProductList = [...productList].reverse();
  const [sortForPrice, setSortForPrice] = useState(null);

  const filterProductList = reverseProductList.filter(item => {
    if (typeProduct === 'Всі') {
      return true;
    }
    return item.type === typeProduct;
  });

  const finalProductList = () => {
    if (sortForPrice === null) {
      return filterProductList;
    }
    if (!sortForPrice) {
      return filterProductList.sort(waneFilter);
    }
    if (sortForPrice) {
      return filterProductList.sort(raiceFilter);
    }
  };

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <FilterBar
        setFilter={{ setTypeProduct, setSortForPrice }}
        filter={typeProduct}
      />
      <ProductList>
        {finalProductList().map(product => (
          <ProductItem key={product._id} product={product} />
        ))}
      </ProductList>
    </>
  );
};
export default Products;
