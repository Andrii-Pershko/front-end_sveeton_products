import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from 'redux/Admin/operations';
import { getProductList } from 'redux/products/operations';

const AddNewProduct = ({ togleModal }) => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const initialValues = {
    title: '',
    characreristick: '',
    price: '',
  };

  const handleFileChange = e => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  };

  const handleSubmit = async e => {
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
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <h1>Введіть данні нового продукту</h1>
        <label>
          <p>Назва продукту</p>
          <Field type="text" name="title" />
        </label>
        <label>
          <p>Опис продукту</p>
          <Field type="text" name="characreristick" />
        </label>
        <label>
          <p>Вартість продукту</p>
          <Field type="text" name="price" />
        </label>
        <label>
          <p>Фото продукту</p>
          <Field type="file" name="img" onChange={handleFileChange} />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default AddNewProduct;
