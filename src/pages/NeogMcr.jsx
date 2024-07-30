import { useState } from "react";
import useFetch from "../customHooks/useFetch";
import FilterCategories from "../components/FilterCategories";
import Card from "../components/Card";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const NeogMcr = () => {
  const [selectedCategories, setSelectedCategories] = useState("");

  const apiUrl = "https://projects-api-delta.vercel.app/api/neog-mcr";
  const { data: mcrData = [], loading, error } = useFetch(apiUrl);

  const handleMcrData = (categories) => {
    setSelectedCategories(categories);
  };

  const filteredMCR = selectedCategories.includes("All")
    ? mcrData
    : mcrData.filter((project) =>
        selectedCategories.includes(project.category)
      );

  return (
    <main className="container py-4">
      <h1>MCR</h1>
      <FilterCategories handleCategoriesData={handleMcrData} />

      {loading && <LoadingSpinner loadingMsg="Loading NeoG MCR..." />}
      {error && <ErrorMessage />}
      <div className="row py-4 g-3">
        {filteredMCR.map((project) => {
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
