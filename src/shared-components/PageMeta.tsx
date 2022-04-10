import React, { FC } from "react";
import Head from "next/head";

interface PageMetaTypes {
  title?: string;
  keywords?: string;
  description?: string;
}

export const PageMeta: FC<PageMetaTypes> = ({
  title = "Twitter. it's what's happening / Twitter",
  keywords = "Twitter",
  description = "Twitter",
}: PageMetaTypes) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};
