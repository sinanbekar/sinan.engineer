import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-slate-50 text-slate-600 antialiased dark:bg-slate-900 dark:text-slate-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
