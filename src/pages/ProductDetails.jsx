import { Helmet } from "react-helmet";
import Title from "../components/Title";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
const ProductDetails = ({ handleAddToCart, handleWishList }) => {
    const products = useLoaderData();
    const { id } = useParams();
    const theProduct = products.find(pro => pro.product_id === parseInt(id));
    const { product_title, product_image, price, description, Specification, availability, rating } = theProduct;
    const [disabled, setDisabled] = useState(false);
    const handleDisable = () => {
        setDisabled(true);
    }
    const handleClick = () => {
        handleWishList(theProduct)
        handleDisable()
    }
    return (
        <div className="bg-gray-100 md:relative flex flex-col justify-center">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Product Details | Gadget Heaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="bg-banner lg:pb-52 pt-6">
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
                                Specification.map((spec, idx) => <li key={idx} className="text-lg text-[rgba(9,8,15,0.6)]">{spec}</li>)
                            }
                        </ol>
                    </div>
                    <div className="flex items-center gap-2">
                        <h1 className="font-bold text-lg">Rating:</h1>
                        <ReactStars
                            count={5}
                            value={rating}
                            edit={false}
                            size={24}
                            activeColor="gold"
                            isHalf={true}
                        />
                        <span className="text-lg">{rating}</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <button onClick={() => handleAddToCart(theProduct)} className="flex items-center gap-2 bg-banner p-2 my-2 hover:bg-transparent hover:text-purple-600 hover:border-purple-600 hover:shadow-[inset_0_0_0_2px_theme('colors.purple.600')] transition-all duration-500 rounded-3xl text-white text-sm font-bold">Add To Cart <FaCartShopping /></button>
                        <button onClick={() => handleClick()} disabled={disabled} className={`${disabled && 'cursor-not-allowed border-none hover:bg-gray-300'} border-2 rounded-full h-10 w-10 flex items-center justify-center ${disabled || 'hover:bg-transparent hover:text-purple-600 hover:border-2 hover:border-purple-600'} hover:shadow-[inset_0_0_0_2px_theme('colors.purple.600')] transition-all duration-500`}>{<CiHeart className="font-bold" />}</button>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ProductDetails;