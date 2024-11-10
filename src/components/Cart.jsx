import { IoFilterCircle } from "react-icons/io5";
import CartedProducts from "./CartedProducts";
import { useEffect, useState } from "react";
const Cart = ({ cartedProducts }) => {
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const sum = cartedProducts.reduce((accumulator, pro) => accumulator + pro.price, 0);
        setTotalPrice(sum);
    }, [cartedProducts]);
    return (
        <div className="bg-gray-200 px-6">
            <div className="flex justify-between items-center py-4">
                <div>
                    <h1 className="font-bold text-2xl">Cart</h1>
                </div>
                <div className="flex items-center gap-6">
                    <div>
                        <p className="text-2xl font-bold">Total Cost: <span>{totalPrice}</span></p>
                    </div>
                    <button className="flex gap-2  items-center border-2 rounded-3xl text-lg font-semibold border-purple-500 px-2 py-1 text-purple-600">Sort By Price <IoFilterCircle></IoFilterCircle></button>
                    <button className="border-2  rounded-3xl text-lg font-semibold bg-purple-800 text-white border-purple-500 px-2 py-1">Purchase</button>
                </div>
            </div>
            <div className="py-4">
                {
                    cartedProducts.map((pro, idx) => <CartedProducts key={idx} product={pro}></CartedProducts>)
                }
            </div>
        </div>
    );
};

export default Cart;