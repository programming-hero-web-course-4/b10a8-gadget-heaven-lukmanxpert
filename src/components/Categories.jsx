const Categories = ({ handleCategoryBtn, activeCategory }) => {
    const categories = ['all-categories', 'laptops', 'phones', 'accessories', 'smart-watches'];

    return (
        <div className="flex flex-col space-y-2">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => handleCategoryBtn(category)}
                    className={`px-4 hover:border-purple-600 border-2 py-2 rounded ${
                        activeCategory === category ? 'active' : ''
                    }`}
                >
                    {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                </button>
            ))}
        </div>
    );
};

export default Categories;
