import LoginAdmin from 'components/Admin/LoginAdmin';
import { useSelector } from 'react-redux';
import { selectIsAdmin } from 'redux/Admin/selectors';

const Admin = () => {
  const isAdmin = useSelector(selectIsAdmin);

  return (
    <>
      <h1>AdminPage</h1>
      {!isAdmin ? <LoginAdmin /> : <h1>ТИ АДМІН!!</h1>}
    </>
  );
};
export default Admin;
