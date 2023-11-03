import { Field, Formik, Form } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from 'redux/Admin/operations';
import { getProductList } from 'redux/products/operations';

const UpdateModal = ({ product, togleModal }) => {
  const [image, setImage] = useState(null);
  const { title, characreristick, price } = product;
  const dispatch = useDispatch();

  const initialValues = {
    title,
    characreristick,
    price,
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

    if (image !== null) {
      formData.append('img', image);
    }

    console.log('formData', formData);

    await dispatch(updateProduct({ id: product._id, form: formData }));
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
export default UpdateModal;
