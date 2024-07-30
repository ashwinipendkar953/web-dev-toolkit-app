import { useEffect, useState } from "react";

const FilterCategories = ({ handleCategoriesData }) => {
  const projectCategories = ["HTML", "Bootstrap", "JavaScript"];
  const [categories, setCategories] = useState(["All"]);

  const handleCategories = (event) => {
    const { value, checked } = event.target;
    if (checked && value === "All") {
      setCategories(["All"]);
    } else if (!checked && value === "All") {
      setCategories([]);
    } else if (checked) {
      setCategories((prevVal) =>
        prevVal.includes("All") ? [value] : [...prevVal, value]
      );
    } else {
      setCategories((prevVal) =>
        prevVal.filter((val) => val !== value && val !== "All")
      );
    }
  };

  useEffect(() => {
    handleCategoriesData(categories);
  }, [categories]);

  return (
    <div className="pt-4">
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="all"
          value="All"
          name="category"
          checked={categories.includes("All")}
          onChange={handleCategories}
        />
        <label className="form-check-label" htmlFor="all">
          All
        </label>
      </div>
      {projectCategories &&
        projectCategories.map((category, index) => (
          <div className="form-check form-check-inline" key={index}>
            <input
              className="form-check-input"
              type="checkbox"
              id={`${category}-${index}`}
              value={category}
              name="category"
              checked={categories.includes(category)}
              onChange={handleCategories}
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

export default FilterCategories;
