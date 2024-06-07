import { useState } from "react";
import { categories } from "../../../data/categories";

// Define types
interface SubSubCategory {
  id: number;
  name: string;
}

interface SubCategory {
  id: number;
  name: string;
  subSubCategories?: SubSubCategory[];
}

interface Category {
  id: number;
  name: string;
  icon: string;
  subCategories?: SubCategory[];
}

const SideNav = () => {
  const [openCategories, setOpenCategories] = useState<{
    [key: number]: boolean;
  }>({});
  const [openSubCategories, setOpenSubCategories] = useState<{
    [key: number]: number | null;
  }>({});

  // Toggle function for categories
  const toggleCategory = (id: number) => {
    setOpenCategories((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  // Toggle function for subcategories within a category
  const toggleSubCategory = (categoryId: number, subCategoryId: number) => {
    setOpenSubCategories((prevState) => ({
      ...prevState,
      [categoryId]:
        prevState[categoryId] === subCategoryId ? null : subCategoryId,
    }));
  };

  return (
    <div className="px-5 md:px-10 py-5">
      <h1 className="text-xl font-bold uppercase">Categories</h1>

      {categories.map((category: Category) => (
        <div key={category.id} className="mt-5">
          <h2
            className="text-lg font-semibold cursor-pointer"
            onClick={() => toggleCategory(category.id)}
          >
            {category.name}
          </h2>

          {openCategories[category.id] && (
            <ul className="mt-2 transition duration-500 ease-in-out delay-200">
              {category.subCategories?.map((subCategory: SubCategory) => (
                <li key={subCategory.id} className="mt-2">
                  <h3
                    className="font-semibold cursor-pointer"
                    onClick={() =>
                      toggleSubCategory(category.id, subCategory.id)
                    }
                  >
                    {subCategory.name}
                  </h3>
                  {openSubCategories[category.id] === subCategory.id && (
                    <ul className="mt-2 transition-all duration-500 ease-in-out transform">
                      {subCategory.subSubCategories?.map(
                        (subSubCategory: SubSubCategory) => (
                          <li key={subSubCategory.id} className="mt-2">
                            <h4>{subSubCategory.name}</h4>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideNav;
