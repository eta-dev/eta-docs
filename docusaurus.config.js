module.exports = {
  title: "Eta",
  tagline: "An incredibly fast embedded JS template engine",
  url: "https://eta.js.org",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "eta-dev", // Usually your GitHub org/user name.
  projectName: "eta-docs", // Usually your repo name.
  scripts: ["https://embed.runkit.com"],
  themeConfig: {
    prism: {
      additionalLanguages: ["ejs"],
      theme: require("prism-react-renderer/themes/vsDark")
    },
    googleAnalytics: {
      trackingID: "UA-162086718-1"
    },
    algolia: {
      apiKey: "8ab526ea88555e09891cf30ccbd4ce15",
      indexName: "eta_js",
      algoliaOptions: {} // Optional, if provided by Algolia
    },
    navbar: {
      title: "Eta",
      logo: {
        alt: "Greek Letter Eta",
        src: "img/logo.svg"
      },
      items: [
        {
          to: "docs/learn",
          activeBasePath: "docs/learn",
          label: "Learn",
          position: "left"
        },
        {
          to: "docs",
          activeBaseRegex: "docs$|docs\\/(get-started|api|syntax)",
          label: "Docs",
          position: "left"
        },
        {
          to: "docs/about",
          activeBasePath: "docs/about",
          label: "About",
          position: "left"
        },
        { to: "playground", label: "Playground", position: "left" },
        { to: "blog", label: "Blog", position: "right" },
        {
          href: "https://gitter.im/eta-dev/community",
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
              label: "Get Started",
              to: "docs/get-started/overview"
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
              label: "Gitter",
              href: "https://gitter.im/eta-js/community"
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
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/eta-dev/eta-docs/edit/master/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
}
