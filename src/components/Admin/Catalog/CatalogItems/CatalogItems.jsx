import { useEffect, useState } from 'react';
import { Img, ImgContainer } from '../CatalogList/CatalogList.styled';
import OverlayModal from 'components/OverlayModal';
import DeleteModal from '../DeleteModal';
import useScrollLock from 'hooks/useScrollLock';
import UpdateModal from '../UpdateModal';

const CatalogItems = ({ product }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  useScrollLock(openDeleteModal || openUpdateModal);

  useEffect(() => {});

  const togleDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };
  const togleUpdateModal = () => {
    setOpenUpdateModal(!openUpdateModal);
  };

  const { title, characreristick, price, img } = product;
  return (
    <li>
      <p>{title}</p>
      <ImgContainer>
        <Img src={img} alt={title}></Img>
      </ImgContainer>

      <p>{characreristick}</p>
      <p>{price} грн</p>
      <button onClick={() => togleUpdateModal()}>Редагувати</button>
      <button onClick={() => togleDeleteModal()}>Видалити товар</button>

      {openDeleteModal ? (
        <OverlayModal togleModal={togleDeleteModal}>
          <DeleteModal
            togleModal={togleDeleteModal}
            title={title}
            id={product._id}
          />
        </OverlayModal>
      ) : (
        ''
      )}

      {openUpdateModal ? (
        <OverlayModal togleModal={togleUpdateModal}>
          <UpdateModal togleModal={togleUpdateModal} product={product} />
        </OverlayModal>
      ) : (
        ''
      )}
    </li>
  );
};
export default CatalogItems;
