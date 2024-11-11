import { useState } from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";
import Wishlish from "../components/Wishlish";
import { Helmet } from "react-helmet";
const Dashboard = ({ cartedProducts, wishedProducts, handleSortByPrice, handlePurchaseBtn, setCartedProducts }) => {
    const [active, setActive] = useState('cart')
    const handleToogle = (btn) => {
        if (btn === 'cart') {
            setActive(btn)
        } else {
            setActive(btn)
        }
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard | Gadget Heaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="bg-banner py-4 rounded-t-lg">
                <Title title1='Dashboard'
                    desc1='Explore the latest gadgets that will take your experience to the next level. From smart devices to'
                    desc2='the coolest accessories, we have it all!'
                ></Title>
            </div>
            <div className="flex gap-4 justify-center bg-banner pb-6">
                <Link onClick={() => handleToogle('cart')} className={`border-2 py-1 px-4 text-white border-white rounded-3xl text-lg font-extrabold ${active === 'cart' && 'btn-active' || ''}`}>Cart</Link>
                <Link onClick={() => handleToogle('wishlist')} className={`border-2 py-1 px-4 text-white border-white rounded-3xl text-lg font-extrabold ${active === 'wishlist' && 'btn-active' || ''}`}>Wishlist</Link>
            </div>
            <div>
                {
                    active === 'cart' && <Cart setCartedProducts={setCartedProducts} handlePurchaseBtn={handlePurchaseBtn} cartedProducts={cartedProducts} handleSortByPrice={handleSortByPrice}></Cart> || <Wishlish wishedProducts={wishedProducts}></Wishlish>
                }
            </div>
        </div>
    );
};

export default Dashboard;