import LoginAdmin from 'components/Admin/LoginAdmin';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsAdmin } from 'redux/Admin/selectors';

const Admin = ({ children }) => {
  const isAdmin = useSelector(selectIsAdmin);

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
      <h1>ТИ АДМІН!!</h1>
      <Suspense fallback={<h1>loading</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Admin;