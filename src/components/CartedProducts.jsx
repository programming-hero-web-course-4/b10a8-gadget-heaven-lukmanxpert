import { IoMdCloseCircleOutline } from "react-icons/io";

const CartedProducts = ({ product }) => {
    const {product_image, product_title, description, price} = product;
    return (
        <div className="flex gap-8 justify-start items-center py-1 px-2 bg-white rounded-2xl my-4">
            <img className="w-40" src={product_image} alt={product_title} />
            <div className="grow">
                <h1 className="text-xl font-semibold">{product_title}</h1>
                <p className="text-lg py-2">{description}</p>
                <p className="text-xl font-semibold">price : ${price}</p>
            </div>
            <button><IoMdCloseCircleOutline className="w-10 h-10 mx-4 text-red-500" /></button>
        </div>
    );
};

export default CartedProducts;