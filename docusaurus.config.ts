import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import customLightTheme from "./src/utils/lightTheme";
import customDarkTheme from "./src/utils/darkTheme";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "3Commas API Platform",
  tagline: "Official 3Commas API documentation",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://developers.3commas.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          routeBasePath: "/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/3commas_api_social_card.jpg",
    navbar: {
      logo: {
        alt: "3Commas API Platform",
        src: "img/logo.svg",
        srcDark: "img/logo@dark.svg",
      },
      items: [
        {
          href: "https://github.com/3commas-io/3commas-official-api-docs",
          label: "GitHub",
          position: "right",
        },
      ],
      hideOnScroll: false,
    },
    footer: {
      style: "dark",
    },
    prism: {
      theme: customLightTheme,
      darkTheme: customDarkTheme,
    },
    algolia: {
      // Safe to commit. Scope only allows search in the developers.3commas.io index.
      appId: "6MVPU5XJH8",
      apiKey: "2559e4f1b39cf34977491636a20fe300",
      indexName: "developers_3commas_io",
      searchPagePath: "custom-search",
    },
  } satisfies Preset.ThemeConfig,
};
export default config;
