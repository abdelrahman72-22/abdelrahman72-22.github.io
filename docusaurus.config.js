// @ts-check

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SilentRoot",

  tagline:
    "Windows Internals • WinAPI • Malware Development • Malware Analysis • Reverse Engineering",

  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://abdelrahman72-22.github.io",
  baseUrl: "/",

  organizationName: "abdelrahman72-22",
  projectName: "abdelrahman72-22.github.io",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "docs",
        },

        blog: {
          showReadingTime: true,
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: "img/social-card.png",

      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: "SilentRoot",

        logo: {
          alt: "SilentRoot Logo",
          src: "img/logo.jpg",
        },

        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },

          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
        ],
      },

      footer: {
        style: "dark",

        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "About",
                to: "/docs/about",
              },
            ],
          },

          {
            title: "Blog",
            items: [
              {
                label: "Latest Posts",
                to: "/blog",
              },
            ],
          },

          {
            title: "Resources",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/abdelrahman72-22",
              },
            ],
          },
        ],

        copyright: `© ${new Date().getFullYear()} Abdelrahman. Built with Docusaurus.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;