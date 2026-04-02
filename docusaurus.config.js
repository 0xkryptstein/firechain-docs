// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Documentation",
  tagline: "Firechain Documentation and Guides",
  url: "https://docs.thefirechain.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "0xfirechain",
  projectName: "firechain-docs",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "FireChain Logo",
          src: "img/logo.png",
          srcDark: "img/logo-dark.png",
        },
        items: [
          {
            href: "https://twitter.com/0xfirechain",
            label: "Twitter",
            position: "right",
          },
          {
            href: "https://github.com/0xfirechain",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Developers",
            items: [
              {
                label: "Introduction",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/FVaTXyNnCS",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/0xfirechain",
              },
              {
                label: "Telegram",
                href: "https://t.me/firestationcex",
              },
            ],
          },
          {
            title: "Network",
            items: [
              {
                label: "Faucet",
                href: "https://faucet.firestation.io",
              },
              {
                label: "Explorer",
                href: "https://rinia.firescan.io",
              },
              {
                label: "GitHub",
                href: "https://github.com/0xfirechain",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Firechain`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
