import { useState } from 'react';
import ModalAddProduct from '../ModalAddProduct';
import OverlayModal from 'components/OverlayModal';
import useScrollLock from 'hooks/useScrollLock';

const AddNewProduct = () => {
  const [openAddProducts, setOpenAddProducts] = useState(false);
  useScrollLock(openAddProducts);

  const togleOpenAddProducts = () => {
    setOpenAddProducts(!openAddProducts);
  };

  return (
    <>
      <button onClick={() => setOpenAddProducts(true)}>
        Добавити новий шедевр
      </button>
      {openAddProducts ? (
        <OverlayModal togleModal={togleOpenAddProducts}>
          <ModalAddProduct togleModal={togleOpenAddProducts} />
        </OverlayModal>
      ) : null}
    </>
  );
};
export default AddNewProduct;
