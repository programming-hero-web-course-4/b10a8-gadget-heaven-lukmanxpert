const Categories = ({handleCategoryBtn}) => {
    return (
        <div>
            <nav className="shadow flex flex-col p-4 gap-2 font-bold rounded-lg text-2xl">
                <button className="btn" onClick={()=>handleCategoryBtn('all-categories')}>All Categories</button>
                <button className="btn" onClick={()=>handleCategoryBtn('laptops')}>Laptops</button>
                <button className="btn" onClick={()=>handleCategoryBtn('phones')}>Phones</button>
                <button className="btn" onClick={()=>handleCategoryBtn('accessories')}>Accessories</button>
                <button className="btn" onClick={()=>handleCategoryBtn('smart-watches')}>Smart Watches</button>
            </nav>
        </div>
    );
};

export default Categories;