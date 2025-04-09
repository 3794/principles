import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Programming Principles</span>,
  project: {
    link: "https://github.com/3794/principles",
  },
  // chat: {
  //   link: "https://discord.com",
  // },
  // docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "by H",
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Programming Principles" />
      <meta property="og:description" content="Programming Principles" />
      <meta
        name="google-site-verification"
        content="wsChCCMARGUqJ-zlWWmlQQd4ypS9aEafMEtIUaVakQ4"
      />
    </>
  ),
  feedback: { content: null },
  editLink: { text: null },
  useNextSeoProps() {
    return {
      title: "Programming Principles",
    };
  },
};

export default config;
