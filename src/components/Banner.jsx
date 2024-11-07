import Title from "./Title";
import bannerImage from '../assets/banner.jpg'
const Banner = () => {
    return (
        <div className="bg-banner rounded-b-lg pt-6 pb-28 relative mb-52">
            <Title title1='Upgrade Your Tech Accessorize with' title2='Gadget Heaven Accessories' desc1='Explore the latest gadgets that will take your experience to the next level. From smart devices to' desc2='the coolest accessories, we have it all!'></Title>
            <div className="text-center pb-4">
                <button className="bg-white rounded-3xl py-2 px-4">Shop Now</button>
            </div>
            <div className="w-96 absolute -bottom-40 left-1/2 transform -translate-x-1/2 border-2 border-white rounded-lg">
                <div className="p-2">
                    <img className="w-full rounded-lg" src={bannerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;