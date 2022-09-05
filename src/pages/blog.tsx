import { InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import ExternalContentItem from "../components/ExternalContentItem";
import { getPosts } from "../lib/posts";

const seo = {
  title: "Blog",
  description: "Personal blog about programming.",
};

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <NextSeo {...seo} />
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Blog
        </h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <ExternalContentItem {...post} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
