import { useState } from "react";
import useFetch from "../customHooks/useFetch";
import Card from "../components/Card";
import FilterCategories from "../components/FilterCategories";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const NeogPrc = () => {
  const [selectedCategories, setSelectedCategories] = useState("");

  const apiUrl = "https://projects-api-delta.vercel.app/api/projects";
  const { data: projects = [], loading, error } = useFetch(apiUrl);

  const handleProjectData = (categories) => {
    setSelectedCategories(categories);
  };

  const filteredProjects = selectedCategories.includes("All")
    ? projects
    : projects.filter((project) =>
        selectedCategories.includes(project.category)
      );

  return (
    <main className="container py-4">
      <h1>neo-g Prc Projects</h1>
      <FilterCategories handleCategoriesData={handleProjectData} />
      {loading && <LoadingSpinner loadingMsg="Loading neo-g Projects..." />}
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

export default NeogPrc;
