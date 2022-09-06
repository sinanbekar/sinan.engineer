import { featuredProjects } from "../data";
import Project from "./Project";

const FeaturedProjects = () => {
  return (
    <ul>
      {featuredProjects.map((project, idx) => (
        <li key={idx}>
          <Project {...project} />
        </li>
      ))}
    </ul>
  );
};

export default FeaturedProjects;
