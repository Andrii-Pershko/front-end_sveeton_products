import OverlayModal from 'components/OverlayModal';
import { ImgThumbFull, ItemFullInf } from './ModalProducts.styled';
import { Img } from 'components/Admin/Catalog/CatalogList/CatalogList.styled';
import { InfThumb, Type } from '../ProductItem/ProductItem.styled';

const ModalProducts = ({ product, toglle, inBasket, setInBasket }) => {
  return (
    <OverlayModal togleModal={toglle}>
      <ItemFullInf>
        <h2>{product.title}</h2>
        <ImgThumbFull>
          <Img src={product.img} alt="my product" />
        </ImgThumbFull>
        <Type>{product.type}</Type>
        <InfThumb>
          <p>{product.characreristick}</p>
          <p>{product.price} uah</p>
        </InfThumb>

        <button onClick={setInBasket}>
          {!inBasket ? 'ДОДАТИ В КОШИК' : 'ВИДАЛИТИ З КОШИКА'}
        </button>
      </ItemFullInf>
    </OverlayModal>
  );
};
export default ModalProducts;
