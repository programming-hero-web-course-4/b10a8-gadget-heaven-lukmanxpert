import { useLoaderData } from "react-router-dom";
import UpcomingProduct from "../components/UpcomingProduct";

const UpcomingProducts = () => {
    const products = useLoaderData();
    return (
        <div>
            <div className="text-3xl font-bold my-10 px-10">Upcoming Products : {products.length}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4 items-center">
                {
                    products.map(pro => <UpcomingProduct key={pro.id} product={pro}></UpcomingProduct>)
                }
            </div>
        </div>
    );
};

export default UpcomingProducts;