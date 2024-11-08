import Title from "../components/Title";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
const ProductDetails = ({ product }) => {
    const { product_title, product_image, category, price, description, Specification, availability, rating } = product;
    return (
        <div className="bg-gray-100 md:relative flex flex-col justify-center">
            <div className="bg-banner lg:pb-52">
                <Title title1="Product Details"
                    desc1="Explore the latest gadgets that will take your experience to the next level. From smart devices to"
                    desc2=" the coolest accessories, we have it all!"></Title>
            </div>
            <div className="bg-gray-100 hidden lg:block md:h-96"></div>
            <div className="lg:left-1/2 lg:transform lg:-translate-x-1/2 mx-auto rounded-lg  flex flex-col md:flex-row items-center gap-4 lg:absolute lg:top-40 bg-base-100 shadow-xl p-6">
                <figure className="max-w-96">
                    <img className="bg-gray-300 w-full rounded-lg"
                        src={product_image}
                        alt="Album" />
                </figure>
                <div className="">
                    <h2 className="card-title text-2xl font-semibold">{product_title}</h2>
                    <p className="font-semibold text-xl my-1">Price : ${price}</p>
                    <p className="bg-green-300 my-1 inline-block p-1 text-xs border-2 border-green-500 rounded-3xl text-center">{availability}</p>
                    <p className="text-lg text-[rgba(9,8,15,0.6)]">{description}</p>
                    <div>
                        <h1 className="font-bold text-lg">Specifications : </h1>
                        <ol className="list-decimal list-inside">
                            {
                                Specification.map((spec) => <li className="text-lg text-[rgba(9,8,15,0.6)]">{spec}</li>)
                            }
                        </ol>
                    </div>
                    <p className="font-bold text-lg">Rating : {rating}</p>
                    <div className="flex gap-6">
                        <button className="flex items-center gap-2 bg-banner py-1 px-2 my-2 rounded-3xl text-white text-sm font-bold">Add To Cart <FaCartShopping /></button>
                        <button className="border-2 rounded-full h-10 w-10 flex items-center justify-center">{<CiHeart className="font-bold" />}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;