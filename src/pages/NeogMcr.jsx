import { useState } from "react";
import useFetch from "../customHooks/useFetch";
import FilterCategories from "../components/DisplayCategories";
import Card from "../components/Card";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import DisplayCategories from "../components/DisplayCategories";

const NeogMcr = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const apiUrl = `${import.meta.env.VITE_APP_API_URL}/api/neog-mcr`;
  const { data: mcr = [], loading, error } = useFetch(apiUrl);

  // Get unique categories from the projects
  const categoryList = [...new Set(mcr?.map((project) => project.category))];

  // Handle category change
  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  // Filter projects based on selected category
  const filteredMCR =
    selectedCategory === ""
      ? mcr
      : mcr?.filter((project) => project?.category === selectedCategory);

  return (
    <main className="container py-4">
      <h1>MCR</h1>
      {/* Pass categories and handleCategory function */}
      <DisplayCategories
        categories={categoryList}
        handleCategory={handleCategory}
      />

      {loading && <LoadingSpinner loadingMsg="Loading NeoG MCR..." />}
      {error && <ErrorMessage />}
      <div className="row py-4 g-3">
        {filteredMCR?.map((project) => {
          const {
            _id,
            mcrLiveUrl,
            mcrName,
            category,
            description,
            replUrl,
            githubUrl,
            instructionsUrl,
          } = project;
          return (
            <Card
              key={_id}
              col="col-md-6"
              liveUrl={mcrLiveUrl}
              name={mcrName}
              category={category}
              description={description}
              replUrl={replUrl}
              githubUrl={githubUrl}
              instructionsUrl={instructionsUrl}
            />
          );
        })}
      </div>
    </main>
  );
};

export default NeogMcr;
