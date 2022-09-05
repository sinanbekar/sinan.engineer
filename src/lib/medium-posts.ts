import Parser from "rss-parser";
import { mediumUsername } from "../data";

interface MediumPost {
  creator: string;
  title: string;
  link: string;
  "content:encoded": string;
  guid: string;
  isoDate: string;
  categories: string[];
}

export async function getFeed() {
  const parser = new Parser();

  const { items } = await parser.parseURL(
    `https://medium.com/feed/@${mediumUsername}`
  );

  return items as MediumPost[];
}

export async function getPosts() {
  const items = await getFeed();

  const posts = items.map((item) => {
    const content = item["content:encoded"];
    const strippedContent = content.split(/<[^>]+>/gi); // remove html tags
    if (!strippedContent[0]) strippedContent.shift(); // remove first empty
    const excerpt = strippedContent.slice(0, 2).join(" ").trim(); // get first two sentences

    return {
      id: item.guid,
      title: item.title,
      excerpt:
        excerpt.length > 200 ? excerpt.substring(0, 200) + "..." : excerpt, // get first 200 chars
      date: item.isoDate,
      link: item.link,
      tags: item.categories,
      content,
    };
  });

  return posts;
}
