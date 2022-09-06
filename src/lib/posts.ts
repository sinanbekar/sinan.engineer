import { getPosts as getMediumPosts } from "./medium-posts";

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  link: string;
  tags: string[];
  content: string;
}

export async function getPosts() {
  const mediumPosts = await getMediumPosts();
  const devToPosts: Post[] = [];
  const posts = [...mediumPosts, ...devToPosts];
  return posts;
}
