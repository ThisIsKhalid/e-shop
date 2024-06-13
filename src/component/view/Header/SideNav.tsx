import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
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
    <div className=" px-5 md:px-10 py-5">
      <h1 className="text-2xl font-bold uppercase text-gray-500">Categories</h1>

      {categories.map((category: Category) => (
        <div key={category.id} className="mt-3">
          <div
            className="flex items-center justify-between"
            onClick={() => toggleCategory(category.id)}
          >
            <h1 className="text-lg font-semibold cursor-pointer">
              {category.name}
            </h1>
            {category.subCategories && (
              <IoIosArrowDown
                className={`${
                  openCategories[category.id] ? "transform rotate-180" : ""
                }`}
              />
            )}
          </div>

          {openCategories[category.id] && (
            <ul className="ml-5 mt-2 transition duration-500 ease-in-out delay-200">
              {category.subCategories?.map((subCategory: SubCategory) => (
                <li key={subCategory.id} className="mt-2">
                  <div
                    className="flex items-center justify-between"
                    onClick={() =>
                      toggleSubCategory(category.id, subCategory.id)
                    }
                  >
                    <h3 className="font-medium text-base cursor-pointer">
                      {subCategory.name}
                    </h3>
                    {subCategory.subSubCategories && (
                      <IoIosArrowDown
                        className={`${
                          openSubCategories[category.id] === subCategory.id
                            ? "transform rotate-180"
                            : ""
                        }`}
                      />
                    )}
                  </div>
                  {openSubCategories[category.id] === subCategory.id && (
                    <ul className="ml-5 mt-2 transition-all duration-500 ease-in-out transform">
                      {subCategory.subSubCategories?.map(
                        (subSubCategory: SubSubCategory) => (
                          <li key={subSubCategory.id} className="mt-2">
                            <h4 className="text-sm">{subSubCategory.name}</h4>
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
