import CartedProducts from "./CartedProducts";
const Wishlish = ({ wishedProducts }) => {
    return (
        <div className="bg-gray-200 px-6">
            <div className="flex justify-between items-center py-4">
                <div>
                    <h1 className="font-bold text-2xl">Wishlist</h1>
                </div>
            </div>
            <div className="py-4">
                {
                    wishedProducts.map((pro) => <CartedProducts key={pro.product_title} product={pro}></CartedProducts>)
                }
            </div>
        </div>
    );
};

export default Wishlish;