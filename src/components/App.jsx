import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Layout = lazy(() => import('./Layout'));
const Home = lazy(() => import('../Page/Home'));
const Products = lazy(() => import('../Page/Products'));
const Admin = lazy(() => import('../Page/Admin'));
const NotFound = lazy(() => import('../Page/NotFound'));
const Catalog = lazy(() => import('../Page/Catalog'));
const Orders = lazy(() => import('../Page/Orders'));
const Basket = lazy(() => import('../Page/Basket'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Завантаження...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="basket" element={<Basket />} />
            <Route path="superAdmin" element={<Admin />}>
              <Route path="catalog" element={<Catalog />} />
              <Route path="orders" element={<Orders />} />
            </Route>
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
