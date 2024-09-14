import { useState } from "react";
import useFetch from "../customHooks/useFetch";
import Card from "../components/Card";
import DisplayCategories from "../components/DisplayCategories";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const Mcr = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const apiUrl = `${import.meta.env.VITE_APP_API_URL}/api/projects`;
  const { data: projects = [], loading, error } = useFetch(apiUrl);

  // Get unique categories from the projects
  const categoryList = [
    ...new Set(projects?.map((project) => project.category)),
  ];

  // Handle category change
  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  // Filter projects based on selected category
  const filteredProjects = projects.filter(
    (project) => project.category === selectedCategory
  );

  return (
    <main className="container py-4">
      <h1>MCR</h1>
      {/* Pass categories and handleCategory function */}
      <DisplayCategories
        categories={categoryList}
        handleCategory={handleCategory}
      />{" "}
      {loading && <LoadingSpinner loadingMsg="Loading MCR..." />}
      {error && <ErrorMessage />}
      <div className="row py-4 g-3">
        {filteredProjects.map((project) => {
          const {
            _id,
            projectLiveUrl,
            projectName,
            category,
            description,
            replUrl,
            githubUrl,
          } = project;
          return (
            <Card
              key={_id}
              col="col-md-6"
              liveUrl={projectLiveUrl}
              name={projectName}
              category={category}
              description={description}
              replUrl={replUrl}
              githubUrl={githubUrl}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Mcr;
