module.exports = {
  title: 'Eta',
  tagline: 'An incredibly fast JS template engine',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'eta-dev', // Usually your GitHub org/user name.
  projectName: 'eta', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Eta',
      logo: {
        alt: 'Greek Letter Eta',
        src: 'img/logo.svg'
      },
      links: [
        {
          to: 'docs/get-started/overview',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left'
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        { to: 'playground', label: 'Playground', position: 'left' },
        {
          href: 'https://gitter.im/eta-js/community',
          label: 'Community',
          position: 'right'
        },
        {
          href: 'https://github.com/eta-dev/eta',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: 'docs/get-started/overview'
            },
            {
              label: 'About',
              to: 'docs/about/introduction'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Gitter',
              href: 'https://gitter.im/eta-js/community'
            }
          ]
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/eta-dev/eta'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Eta developers. Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/eta-dev/eta-docs/edit/master/website/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
