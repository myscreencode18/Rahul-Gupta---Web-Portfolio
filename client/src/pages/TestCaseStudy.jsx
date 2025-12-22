import { useParams } from "react-router-dom";
import { projectsData } from "./SampleProject";
import Projects from "./Projects";

const TestCaseStudy = () => {
  const { slug } = useParams();

  const project = projectsData.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return <div className="text-white">Project not found</div>;
  }

  return <Projects {...project} onBack={() => window.history.back()} />;
};

export default TestCaseStudy;
