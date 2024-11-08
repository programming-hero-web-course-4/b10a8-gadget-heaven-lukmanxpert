import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Statistic from './pages/Statistic';
import Dashboard from './pages/Dashboard';
import ProductDetails from './pages/ProductDetails';

function App() {
  const [product, setProduct] = useState([]);
  const handleProductDetailsBtn = (product) => {
    setProduct(product);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home handleProductDetailsBtn={handleProductDetailsBtn} />
        },
        {
          path: '/home',
          element: <Home handleProductDetailsBtn={handleProductDetailsBtn} />
        },
        {
          path: '/statistic',
          element: <Statistic />
        },
        {
          path: '/dashboard',
          element: <Dashboard />
        },
        {
          path: '/product-details',
          element: <ProductDetails product={product} />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
