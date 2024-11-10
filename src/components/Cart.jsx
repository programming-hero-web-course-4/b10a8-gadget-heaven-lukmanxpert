import { IoFilterCircle } from "react-icons/io5";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import CartedProducts from "./CartedProducts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Cart = ({ cartedProducts, handleSortByPrice, handlePurchaseBtn, setCartedProducts }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        const sum = cartedProducts.reduce((accumulator, pro) => accumulator + pro.price, 0);
        setTotalPrice(sum);
    }, [cartedProducts]);
    const navigate = useNavigate();
    const goToHome = () => {
        setCartedProducts([]);
        navigate('/')
    }
    return (
        <div className="bg-gray-200 px-6">
            <div className="flex justify-between items-center py-4">
                <div>
                    <h1 className="font-bold text-2xl">Cart</h1>
                </div>
                <div className="flex items-center gap-6">
                    <div>
                        <p className="text-2xl font-bold">Total Cost: $<span>{totalPrice}</span></p>
                    </div>
                    <button onClick={handleSortByPrice} className="flex gap-2  items-center border-2 rounded-3xl text-lg font-semibold border-purple-500 px-2 py-3 text-purple-600">Sort By Price <IoFilterCircle></IoFilterCircle></button>
                    <button onClick={handlePurchaseBtn} disabled={totalPrice === 0} className={`"border-2 py-3 px-6 rounded-3xl ${cartedProducts.length ? '' : 'cursor-not-allowed bg-gray-200 border-2 border-gray-500 px-6'} text-lg font-semibold bg-purple-800 text-white border-purple-500 px-6"`}>Purchase</button>
                </div>
            </div>
            <div className="py-4">
                {
                    cartedProducts.map((pro, idx) => <CartedProducts key={idx} product={pro}></CartedProducts>)
                }
            </div>
            <div>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box text-center">
                        <h3 className="font-bold text-lg text-center flex justify-center"><IoCheckmarkDoneCircleOutline className="h-32 w-32 text-green-500" /></h3>
                        <p className="py-4 font-bold text-2xl">Payment Successfully</p>
                        <hr className="my-2" />
                        <p>Thanks for purchasing</p>
                        <p>Total : {totalPrice}</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn" onClick={goToHome}>Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Cart;