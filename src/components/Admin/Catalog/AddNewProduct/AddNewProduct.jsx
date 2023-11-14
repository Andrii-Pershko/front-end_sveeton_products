import { useState } from 'react';
import ModalAddProduct from '../ModalAddProduct';
import OverlayModal from 'components/OverlayModal';
import useScrollLock from 'hooks/useScrollLock';
import { AddProductBtn } from './AddNewProduct.styled';

const AddNewProduct = () => {
  const [openAddProducts, setOpenAddProducts] = useState(false);
  useScrollLock(openAddProducts);

  const togleOpenAddProducts = () => {
    setOpenAddProducts(!openAddProducts);
  };

  return (
    <>
      <AddProductBtn onClick={() => setOpenAddProducts(true)}>
        Добавити новий шедевр
      </AddProductBtn>
      {openAddProducts ? (
        <OverlayModal togleModal={togleOpenAddProducts}>
          <ModalAddProduct togleModal={togleOpenAddProducts} />
        </OverlayModal>
      ) : null}
    </>
  );
};
export default AddNewProduct;
