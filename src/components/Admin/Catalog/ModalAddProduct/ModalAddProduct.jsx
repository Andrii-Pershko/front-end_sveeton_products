import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from 'redux/Admin/operations';
import { getProductList } from 'redux/products/operations';
import {
  AddPhoto,
  ErrorMessageStyle,
  LabelStyled,
  PhotoText,
  SelectStyled,
  StyledFied,
  StyledForm,
  SubmitBtn,
  TitleModal,
} from './ModalAddProduct.styled';
import * as Yup from 'yup';

const ModalAddProduct = ({ togleModal }) => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const initialValues = {
    title: '',
    characreristick: '',
    price: '',
    type: '',
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Заголовок обовязковий'),
    characreristick: Yup.string().required('Опис обовязковий'),
    price: Yup.string().required('Ціна обовязкова'),
    type: Yup.string().required('Тип обовязковий'),
  });

  const handleFileChange = e => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  };

  const handleSubmit = async e => {
    console.log('click');
    const formData = new FormData();

    for (const key in e) {
      formData.set(key, e[key]);
    }
    formData.append('img', image);

    await dispatch(addProduct(formData));
    togleModal();
    await dispatch(getProductList());
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <StyledForm>
          <TitleModal>Введіть данні нового продукту</TitleModal>
          <LabelStyled>
            <p>Назва продукту</p>
            <StyledFied type="text" name="title" placeholder="Назва" />
            <ErrorMessageStyle
              id="title"
              name="title"
              component="div"
              className="error"
            />
          </LabelStyled>
          <LabelStyled>
            <p>Опис продукту</p>
            <StyledFied type="text" name="characreristick" placeholder="Опис" />
            <ErrorMessageStyle
              id="characreristick"
              name="characreristick"
              component="div"
              className="error"
            />
          </LabelStyled>
          <LabelStyled>
            <p>Вартість продукту</p>
            <StyledFied type="text" name="price" placeholder="Вартість" />
            <ErrorMessageStyle
              id="price"
              name="price"
              component="div"
              className="error"
            />
          </LabelStyled>
          <PhotoText>Фото продукту</PhotoText>
          <AddPhoto>
            <p>{image ? image.name : 'Обрати фото'} </p>
            <StyledFied type="file" name="img" onChange={handleFileChange} />
          </AddPhoto>
          <LabelStyled>
            <p>Тип продукту</p>
            <SelectStyled
              as="select"
              name="type"
              onChange={e => setFieldValue('type', e.target.value)}
            >
              <option value="">Оберіть опцію</option>
              <option value="Шопер">Шопер</option>
              <option value="Листівка">Листівка</option>
              <option value="Стікер">Стікер</option>
              <option value="Інше">Інше</option>
            </SelectStyled>
            <ErrorMessageStyle name="type" component="div" className="error" />
          </LabelStyled>
          <SubmitBtn type="submit">Добавити</SubmitBtn>
        </StyledForm>
      )}
    </Formik>
  );
};
export default ModalAddProduct;
