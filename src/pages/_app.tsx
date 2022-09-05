import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../layouts/main";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import seoConfig from "../config/seo";

export default function SinanBekarPortfolioApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <>
      <DefaultSeo {...seoConfig} />
      <ThemeProvider attribute="class">
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  );
}
