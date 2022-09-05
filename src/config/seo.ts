import { DefaultSeoProps } from "next-seo";
import { twitterUsername } from "../data";

const siteName = "sinan.engineer";
const title = "Sinan Bekar – Full Stack Developer";
const description =
  "A developer who enjoys building things and solving problems.";
const keywords = [
  "Full Stack Developer",
  "Web development",
  "Freelance",
  "Frontend",
  "Backend",
];

const seoConfig: DefaultSeoProps = {
  defaultTitle: title,
  titleTemplate: `%s – Sinan Bekar`,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: "website",
    site_name: siteName,
  },
  twitter: {
    handle: `@${twitterUsername}`,
    site: `@${siteName}`,
    cardType: "summary_large_image",
  },
  additionalMetaTags: [{ name: "keywords", content: keywords.join(",") }],
};

export default seoConfig;
