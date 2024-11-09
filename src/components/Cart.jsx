import { IoFilterCircle } from "react-icons/io5";
const Cart = () => {
    return (
        <div>
            <div className="flex justify-between items-center my-4">
                <div>
                    <h1 className="font-bold text-2xl">Cart</h1>
                </div>
                <div className="flex items-center gap-6">
                    <div>
                        <p className="text-2xl font-bold">Total Cost: <span></span></p>
                    </div>
                   <button className="flex gap-2  items-center border-2 rounded-3xl text-lg font-semibold border-purple-500 px-2 py-1 text-purple-600">Sort By Price <IoFilterCircle></IoFilterCircle></button>
                   <button className="border-2  rounded-3xl text-lg font-semibold bg-purple-800 text-white border-purple-500 px-2 py-1">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;