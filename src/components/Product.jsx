const Product = ({ product }) => {
    const {product_image, product_title, description} = product;
    return (
        <div className="card card-compact bg-base-100 shadow-2xl">
            <figure>
                <img className="p-6"
                    src={product_image}
                    alt={product_title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary text-purple-700 hover:text-white rounded-3xl bg-transparent">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Product;