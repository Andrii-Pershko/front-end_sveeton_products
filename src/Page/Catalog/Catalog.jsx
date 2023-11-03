import AddNewProduct from 'components/Admin/Catalog/AddNewProduct';
import CatalogList from 'components/Admin/Catalog/CatalogList';

const Catalog = () => {
  return (
    <>
      <h1>CatalogPage</h1>
      <AddNewProduct />
      <CatalogList />
    </>
  );
};
export default Catalog;
