import { featuredPosts } from "../data";
import ExternalContentItem from "./ExternalContentItem";

const FeaturedPosts = () => {
  return (
    <ul>
      {featuredPosts.map((post, idx) => (
        <li key={idx}>
          <ExternalContentItem {...post} />
        </li>
      ))}
    </ul>
  );
};

export default FeaturedPosts;
