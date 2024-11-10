const UpcomingProduct = ({ product }) => {
    const { name, releaseDate, price, description, imageUrl, status } = product;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="">
                <img className="w-full"
                    src={imageUrl}
                    alt={name} />
            </figure>
            <div className="card-body">
                <div className="flex justify-between">
                    <h2 className="card-title text-xl font-bold">{name}</h2>
                    <div className="rounded-3xl text-center py-1 px-2 max-w-32 badge-secondary">{status}</div>
                </div>
                <p className="font-bold">Price : {price}</p>
                <p className="font-bold">Release Date : {releaseDate}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default UpcomingProduct;