import LoginAdmin from 'components/Admin/LoginAdmin';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { refreshAdmin } from 'redux/Admin/operations';
import { selectIsAdmin } from 'redux/Admin/selectors';

const Admin = () => {
  const isAdmin = useSelector(selectIsAdmin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshAdmin());
  }, [dispatch]);

  if (!isAdmin) {
    return (
      <>
        <h1>AdminPage</h1>
        <LoginAdmin />
      </>
    );
  }

  return (
    <>
      <Suspense fallback={<h1>loading</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Admin;
