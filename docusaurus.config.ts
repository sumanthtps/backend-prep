import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Be Dev",
  tagline: "Dinosaurs are cool, not Java",
  favicon: "img/favicon.ico",

  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/",

  organizationName: "Sumanth",
  projectName: "docusaurus",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  // 👇 Add this section
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true, // better caching
        indexDocs: true, // search in /docs/**/*.md(x)
        indexBlog: true, // search in /blog/**/*.md(x)
        indexPages: true, // search in /src/pages/**/*.mdx
        docsRouteBasePath: "/", // change if your docs aren’t under /docs
        searchResultContextMaxLength: 80, // snippet length in results
      },
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Be Dev",
      logo: {
        alt: "Be Dev Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        { type: "search", position: "right" }, // 👈 ensure search box in navbar
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [{ label: "Tutorial", to: "/docs/intro" }],
        },
        {
          title: "Community",
          items: [{ label: "Chatgpt", href: "https://chatgpt.com/" }],
        },
        {
          title: "More",
          items: [{ label: "GitHub", href: "https://github.com/sumanthtps" }],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
