import Banner from "../components/Banner";
import Categorys from "../components/Categories";
import Products from "../components/Products";
import { useEffect, useState } from "react";
const Home = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        fetch('./Products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data)
            })
    }, []);
    const handleCategoryBtn = (category) => {
        if (category === 'all-categories') {
            setProducts(filteredProducts);
        } else if (category === 'laptops') {
            const newProducts = filteredProducts.filter(product => product.category === category)
            setProducts(newProducts);
        } else if (category === 'phones') {
            const newProducts = filteredProducts.filter(product => product.category === category)
            setProducts(newProducts);
        } else if (category === 'accessories') {
            const newProducts = filteredProducts.filter(product => product.category === category)
            setProducts(newProducts);
        } else if (category === 'smart-watches') {
            const newProducts = filteredProducts.filter(product => product.category === category)
            setProducts(newProducts);
        }
    }
    return (
        <div className="min-h-screen">
            <Banner></Banner>
            <h1 className="text-4xl text-center font-bold">Explore Cutting-Edge Gadgets</h1>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-[0.2fr_0.8fr] my-4">
                <Categorys handleCategoryBtn={handleCategoryBtn}></Categorys>
                <Products products={products}></Products>
            </div>
        </div>
    );
};

export default Home;