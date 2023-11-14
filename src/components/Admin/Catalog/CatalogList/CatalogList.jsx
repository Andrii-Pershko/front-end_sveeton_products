import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from 'redux/products/operations';
import { selectProductList } from 'redux/products/selectors';
import CatalogItems from '../CatalogItems';
import { ProductList } from 'components/Products/ProductsList/Products.styled';

const CatalogList = () => {
  const dispatch = useDispatch();
  const productList = useSelector(selectProductList);

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);
  return (
    <>
      {productList.length > 0 ? (
        <ProductList>
          {productList.map(product => (
            <CatalogItems key={product._id} product={product} />
          ))}
        </ProductList>
      ) : (
        <p>
          Каталог порожній, ви можете додати новий товар нажавши на кнопку вище
        </p>
      )}
    </>
  );
};
export default CatalogList;
