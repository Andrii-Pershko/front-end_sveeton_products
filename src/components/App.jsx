import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from 'Page/Home';
import Products from 'Page/Products';
import Admin from 'Page/Admin';
import NotFound from 'Page/NotFound';
import Catalog from 'Page/Catalog';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="Super_Admin" element={<Admin />}>
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/orders" element={<Catalog />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
