import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import ErrorPage from './pages/Error.js'; 
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ProductsDetailPage from './pages/ProductDetail';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />, 
    children: [
      { path: true, element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:productId',element: <ProductsDetailPage /> },
    ],
  }
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
