// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MakerGram Workshop 🛠',
  tagline: 'Open Community for Makers and hardware enthusiasts to grow further!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://workshop.makergram.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MakerGram', // Usually your GitHub org/user name.
  projectName: 'workshops', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/mg.png',
      navbar: {
        title: 'MakerGram Workshop Guides 📖📚',
        logo: {
          alt: 'My Site Logo',
          src: 'img/mg.png',
        },
        items: [
          {
            type: 'doc',
            docId: '/category/iot-basic-workshop-',
            position: 'left',
            label: 'IoT 💡',
          },
          {
            type: 'doc',
            docId: '/category/tinyml-workshop-',
            position: 'left',
            label: 'tinyML 🧠',
          },
          {
            type: 'doc',
            docId: '/category/projects-',
            position: 'left',
            label: 'Projects 📝',
          },
          
          // {to: '/category/tinyml-workshop-', label: 'tinyML 🧠', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'IoT',
                to: 'docs/category/iot-basic-workshop-',
              },
              {
                label: 'tinyML',
                to: 'docs/category/tinyml-workshop-',
              },

            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'https://makergram.com/community/',
              },
              // {
              //   label: 'Blog',
              //   href: 'https://makergram.com/blog/',
              // },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Maker_Gram',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://makergram.com/blog/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/MakerGram/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MakerGram. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
