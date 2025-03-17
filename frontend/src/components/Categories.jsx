import { useEffect, useState } from "react";
import CategorieService from "../services/categorie.service";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await CategorieService.getAllCategorie();
      if (data) {
        setCategories(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="section-container mt-22">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="categories-card">
            {category.name}
            <img
              className="w-16 h-16 object-cover rounded-md"
              src={category.image}
              alt={category.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
