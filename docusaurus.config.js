// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Eta",
  tagline: "An incredibly fast embedded JS template engine",
  url: "https://eta.js.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "eta-dev", // Usually your GitHub org/user name.
  projectName: "eta-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/eta-dev/eta-docs/tree/master/",
          lastVersion: "current",
          versions: {
            current: {
              label: "3.x.x"
            }
          }
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/eta-dev/eta-docs/tree/master/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        },
        gtag: {
          trackingID: "G-RZPZ730L0H",
          anonymizeIP: true
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "eta_v3",
        content:
          "Eta v3 was just released! Read through the docs to learn more.",
        backgroundColor: "#25c2a0"
      },
      navbar: {
        title: "Eta",
        logo: {
          alt: "Greek Letter Eta",
          src: "img/logo.svg"
        },
        items: [
          {
            to: "docs",
            label: "Docs",
            position: "left"
          },
          { to: "playground", label: "Playground", position: "left" },
          {
            type: "docsVersionDropdown",
            position: "right"
          },
          {
            href: "https://discord.gg/27gGncJYE2",
            label: "Community",
            position: "right"
          },
          {
            href: "https://github.com/eta-dev/eta",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Learn",
                to: "docs/learn"
              },
              {
                label: "About",
                to: "docs/about"
              }
            ]
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/27gGncJYE2"
              }
            ]
          },
          {
            title: "Social",
            items: [
              {
                label: "Blog",
                to: "blog"
              },
              {
                label: "GitHub",
                href: "https://github.com/eta-dev/eta"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Eta developers. Built with Docusaurus. Theme inspired by <a href="https://www.benthos.dev">benthos.dev</a>`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ejs", "typescript"]
      }
    })
}

module.exports = config
