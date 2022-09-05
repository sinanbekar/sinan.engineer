import { featuredProjects } from "../data";
import ExternalContentItem from "./ExternalContentItem";

const FeaturedProjects = () => {
  return (
    <ul>
      {featuredProjects.map((project, idx) => (
        <li key={idx}>
          <ExternalContentItem {...project} />
        </li>
      ))}
    </ul>
  );
};

export default FeaturedProjects;
