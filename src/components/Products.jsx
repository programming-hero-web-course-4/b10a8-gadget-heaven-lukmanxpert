import NoProducts from "./NoProducts";
import Product from "./Product";

const Products = ({ products }) => {
    return (
        <>
            {products.length !== 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    products.map(product => <Product key={product.product_id} product={product}></Product>)
                }
            </div> : <NoProducts></NoProducts>}
        </>
    );
};

export default Products;