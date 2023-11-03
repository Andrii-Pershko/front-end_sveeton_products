import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { autorizationAdmin } from 'redux/Admin/operations';

const LoginAdmin = () => {
  const dispatch = useDispatch();
  const initialValues = { login: '', password: '' };

  const handleSubmit = e => {
    dispatch(autorizationAdmin(e));
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <h1>Введіть супер секретні данні адміна ❤️</h1>
          <label>
            <Field type="text" name="login" />
          </label>
          <label>
            <Field type="text" name="password" />
          </label>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginAdmin;
