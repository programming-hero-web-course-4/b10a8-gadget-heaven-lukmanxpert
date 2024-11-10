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
import Cart from './components/Cart';
import Wishlish from './components/Wishlish';
function App() {
  const [cartedProducts, setCartedProducts] = useState([]);
  const handleAddToCart = (cartedProduct) => {
    const newCartedProducts = [...cartedProducts, cartedProduct]
    setCartedProducts(newCartedProducts)
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/statistic',
          element: <Statistic />
        },
        {
          path: '/dashboard',
          element: <Dashboard cartedProducts={cartedProducts}/>,
          children : [
            {
              path : '/dashboard/cart',
              element : <Cart></Cart>
            },
            {
              path : '/dashboard/wishlist',
              element : <Wishlish></Wishlish>
            }
          ]
        },
        {
          path: '/product-details/:id',
          loader : ()=> fetch('../Products.json'),
          element: <ProductDetails handleAddToCart={handleAddToCart}/>
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
