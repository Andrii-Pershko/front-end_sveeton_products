import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from 'redux/products/operations';
import { selectProductList } from 'redux/products/selectors';
import CatalogItems from '../CatalogItems';

const CatalogList = () => {
  const dispatch = useDispatch();
  const productList = useSelector(selectProductList);

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);
  return (
    <>
      <h2>CatalogList</h2>
      {productList.length > 0 ? (
        <ul>
          {productList.map(product => (
            <CatalogItems key={product._id} product={product} />
          ))}
        </ul>
      ) : (
        <p>
          Каталог порожній, ви можете додати новий товар нажавши на кнопку вище
        </p>
      )}
    </>
  );
};
export default CatalogList;
