import { getPosts as getMediumPosts } from "./medium-posts";

export async function getPosts() {
  const mediumPosts = await getMediumPosts();
  const posts = mediumPosts.map((mediumPost) => ({
    ...mediumPost,
    source: "Medium",
  }));
  return posts;
}
