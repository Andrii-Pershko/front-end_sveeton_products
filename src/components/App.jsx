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
  const getExcelDataFromSharePoint = async () => {
    const excelFileUrl =
      'https://obnovastores.sharepoint.com/:x:/r/_layouts/15/Doc.aspx?sourcedoc=%7BA2F674C2-5E08-421E-83B7-D623EA8D88B5%7D&file=%D0%9A%D0%9E%D0%A0%D0%9F%D0%9E%D0%A0%D0%90%D0%A2%D0%98%D0%92%D0%9D%D0%98%D0%98%CC%86%20%D0%91%D0%86%D0%97%D0%9D%D0%95%D0%A1%20%D0%A1%D0%9B%D0%9E%D0%92%D0%9D%D0%98%D0%9A%20%D0%9E%D0%91%D0%9D%D0%9E%D0%92%D0%90%20(3)-16092ee7-b8cc-4461-8690-432171ae6ba1.xlsx&action=default&mobileredirect=true'; // URL вашого файлу Excel на SharePoint

    try {
      const response = await fetch(`${excelFileUrl}`, {});

      if (response.ok) {
        const data = await response.json();
        console.log('Дані з Excel:', data);
        // Отримані дані з файлу Excel на SharePoint будуть у форматі JSON
      } else {
        console.error(
          'Помилка при отриманні даних з Excel:',
          response.statusText
        );
      }
    } catch (error) {
      console.error('Помилка:', error);
    }
  };

  // Виклик функції для отримання даних з Excel файлу на SharePoint
  getExcelDataFromSharePoint();

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
