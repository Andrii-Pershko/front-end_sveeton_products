import { useDispatch } from 'react-redux';
import { DeleteModalStyled } from './DeleteModal.styled';
import { deleteProduct } from 'redux/Admin/operations';
import { getProductList } from 'redux/products/operations';

const DeleteModal = ({ togleModal, title, id }) => {
  const dispatch = useDispatch();

  const handleDeleteProduct = async () => {
    await dispatch(deleteProduct(id));
    togleModal();
    await dispatch(getProductList());
  };

  return (
    <DeleteModalStyled>
      <h2>Ти впевнена що бажаєш видалити {title}</h2>
      <div>
        <button onClick={handleDeleteProduct}>Так</button>
        <button onClick={togleModal}>Ні</button>
      </div>
    </DeleteModalStyled>
  );
};
export default DeleteModal;
