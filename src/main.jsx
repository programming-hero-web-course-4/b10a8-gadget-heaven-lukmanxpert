import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
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
import { toast } from 'react-toastify';
import ErrorElement from './components/ErrorElement';
import UpcomingProducts from './pages/UpcomingProducts';
function App() {
  const [cartedProducts, setCartedProducts] = useState([]);
  const handleAddToCart = (cartedProduct) => {
    const newCartedProducts = [...cartedProducts, cartedProduct]
    setCartedProducts(newCartedProducts)
    toast.success('Added to cart successfully', {
      position: "top-center"
    })
  }
  const handleSortByPrice = () => {
    const sortedProducts = [...cartedProducts].sort((a, b) => b.price - a.price);
    setCartedProducts(sortedProducts);
  };
  const [wishedProducts, setWishedProducts] = useState([]);
  const handleWishList = (wishedProduct) => {
    const isExist = wishedProducts.find(pro => pro.product_id === wishedProduct.product_id)
    if (isExist) {
      toast.warning('Already Added', {
        position: "top-center"
      })
    } else {
      const newWishedProducts = [...wishedProducts, wishedProduct]
      setWishedProducts(newWishedProducts)
      toast.success('Added to wishlist successfully', {
        position: "top-center"
      })
    }

  }
  const handlePurchaseBtn = () => {
    document.getElementById('my_modal_1').showModal();
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorElement></ErrorElement>,
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
          element: <Dashboard setCartedProducts={setCartedProducts} handlePurchaseBtn={handlePurchaseBtn} handleSortByPrice={handleSortByPrice} cartedProducts={cartedProducts} wishedProducts={wishedProducts} />,
          children: [
            {
              path: '/dashboard/cart',
              element: <Cart></Cart>
            },
            {
              path: '/dashboard/wishlist',
              element: <Wishlish></Wishlish>
            }
          ]
        },
        {
          path: '/product-details/:id',
          loader: () => fetch('../Products.json'),
          element: <ProductDetails handleAddToCart={handleAddToCart} handleWishList={handleWishList} />
        },
        {
          path: '/upcoming-products',
          element: <UpcomingProducts></UpcomingProducts>,
          loader: () => fetch('../UpcomingProducts.json')
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
