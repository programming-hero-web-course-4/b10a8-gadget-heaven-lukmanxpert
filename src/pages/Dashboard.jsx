import { useState } from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";
import Wishlish from "../components/Wishlish";
const Dashboard = ({cartedProducts}) => {
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
            <div className="bg-banner">
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
                    active === 'cart' && <Cart cartedProducts={cartedProducts}></Cart> || <Wishlish></Wishlish>
                }
            </div>
        </div>
    );
};

export default Dashboard;