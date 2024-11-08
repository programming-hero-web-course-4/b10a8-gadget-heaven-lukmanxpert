import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Products from "../components/Products";

const Home = ({handleProductDetailsBtn}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState("all-categories");
    useEffect(() => {
        fetch('./Products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
            });
    }, []);

    const handleCategoryBtn = (category) => {
        setActiveCategory(category);

        if (category === 'all-categories') {
            setProducts(filteredProducts);
        } else {
            const newProducts = filteredProducts.filter(product => product.category === category);
            setProducts(newProducts);
        }
    };

    return (
        <div className="min-h-screen">
            <Banner />
            <h1 className="text-4xl text-center font-bold">Explore Cutting-Edge Gadgets</h1>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-[0.2fr_0.8fr] my-4">
                <Categories 
                    handleCategoryBtn={handleCategoryBtn} 
                    activeCategory={activeCategory}
                />
                <Products handleProductDetailsBtn={handleProductDetailsBtn} products={products} />
            </div>
        </div>
    );
};

export default Home;
