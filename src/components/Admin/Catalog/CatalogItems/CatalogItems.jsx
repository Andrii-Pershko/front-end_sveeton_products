import { useEffect, useState } from 'react';
import { Img, ImgContainer } from '../CatalogList/CatalogList.styled';
import OverlayModal from 'components/OverlayModal';
import DeleteModal from '../DeleteModal';
import useScrollLock from 'hooks/useScrollLock';
import UpdateModal from '../UpdateModal';
import { InfThumb } from 'components/Products/ProductItem/ProductItem.styled';
import { shortDescription } from 'utils/utils';
import { BtnThumb, CatalogItem } from './CatalogItems.styled';

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
    <CatalogItem>
      <h2>{shortDescription(title)}</h2>
      <ImgContainer>
        <Img src={img} alt={title}></Img>
      </ImgContainer>
      <InfThumb>
        <p>{shortDescription(characreristick)}</p>
        <p>{price} грн</p>
      </InfThumb>
      <BtnThumb>
        <button onClick={() => togleUpdateModal()}>Редагувати</button>
        <button onClick={() => togleDeleteModal()}>Видалити товар</button>
      </BtnThumb>

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
    </CatalogItem>
  );
};
export default CatalogItems;
