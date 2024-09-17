import { useEffect, useState } from "react";

const DisplayCategories = ({ categories, handleCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0] || "");
  // console.log(selectedCategory);

  useEffect(() => {
    handleCategory(selectedCategory);
  }, [handleCategory, categories, selectedCategory]);

  return (
    <div className="pt-4">
      {categories &&
        categories?.map((category, index) => (
          <div className="form-check form-check-inline" key={index}>
            <input
              className="form-check-input"
              type="radio"
              id={`${category}-${index}`}
              value={category}
              name="category"
              checked={selectedCategory === category}
              onChange={(e) => setSelectedCategory(e.target.value)}
            />
            <label
              className="form-check-label"
              htmlFor={`${category}-${index}`}
            >
              {category}
            </label>
          </div>
        ))}
    </div>
  );
};

export default DisplayCategories;
