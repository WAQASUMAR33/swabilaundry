'use client';
import { useEffect, useState } from 'react';
import FilterableTable from './FilterableTable';

const fetchCategories = async () => {
  try {
    const response = await fetch('/api/categories');
    const data = await response.json();
    console.log('Fetched categories:', data); // Debugging information
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};





const CategoryPage = () => {

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchData = async (categorySlug = null) => {
    setIsLoading(true);
    const [fetchedCategories] = await Promise.all([
      fetchCategories(),
    ]);
    setCategories(fetchedCategories);
    setIsLoading(false);
  };

  const handleCategoryClick = async (categorySlug) => {
    setSelectedCategory(categorySlug);

  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log('Categories:', categories); // Debugging information

  return (
    <div className="container mx-auto ">
      {isLoading ? (
        <div className="text-center text-2xl">Loading...</div>
      ) : (
        <>
          {/* <div className="flex space-x-4 overflow-x-auto mb-4">
            {Array.isArray(categories) && categories.length > 0 ? (
              categories.map((category) => (
                <button
                  key={category.slug}
                  className={`cursor-pointer p-2 rounded ${selectedCategory === category.slug ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                  onClick={() => handleCategoryClick(category.slug)}
                >
                  {category.name}
                </button>
              ))
            ) : (
              <div>No categories found</div>
            )}
          </div> */}
          <FilterableTable
            fetchCategories={() => fetchData(selectedCategory)}
            categories={categories}
    
          />
        </>
      )}
    </div>
  );
};

export default CategoryPage;