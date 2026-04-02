// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Documentation",
  tagline: "Firechain Documentation and Guides",
  url: "https://docs.thefirechain.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "0xfirechain", // Usually your GitHub org/user name.
  projectName: "firechain-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      // '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        // // gtag: 'G-WGXVB8BDCW',
        // googleTagManager: 'GTM-MN62ZGHW',
        // // // DEPRECATED: Will be passed to @docusaurus/plugin-google-analytics (only enabled when explicitly specified)
        // googleAnalytics: 'G-WGXVB8BDCW',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Logo",
          src: "img/logo.png",
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'right',
          //   label: 'Documentation',
          // },
          // {to: '/blog', label: 'Blog', position: 'right'},
          // {to: '/ecosystem', label: 'Ecosystem', position: 'right', docId: 'financial-relief'},
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
