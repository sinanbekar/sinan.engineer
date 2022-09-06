import { featuredPosts } from "../data";
import ExternalPost from "./ExternalPost";

const FeaturedPosts = () => {
  return (
    <ul>
      {featuredPosts.map((post, idx) => (
        <li key={idx}>
          <ExternalPost {...post} />
        </li>
      ))}
    </ul>
  );
};

export default FeaturedPosts;
