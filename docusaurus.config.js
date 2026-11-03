// Novator user guides: https://docs.novator.co
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Novator User Guides',
  tagline: 'Step-by-step guides for every Novator app for Odoo',
  favicon: 'img/favicon.png',
  url: 'https://docs.novator.co',
  baseUrl: '/',
  organizationName: 'novatorapps',
  projectName: 'novator-docs',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {hooks: {onBrokenMarkdownLinks: 'throw', onBrokenMarkdownImages: 'throw'}},
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [
    ['classic', {
      docs: {
        routeBasePath: '/',
        sidebarPath: './sidebars.js',
        showLastUpdateTime: false,
      },
      blog: false,
      theme: {customCss: './src/css/custom.css'},
    }],
  ],
  themes: [
    ['@easyops-cn/docusaurus-search-local', {
      hashed: true, indexBlog: false, docsRouteBasePath: '/', highlightSearchTermsOnTargetPage: true,
    }],
  ],
  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      title: 'User Guides',
      logo: {alt: 'Novator', src: 'img/logo.svg'},
      items: [
        {type: 'docSidebar', sidebarId: 'guides', position: 'left', label: 'All apps'},
        {href: 'https://apps.odoo.com/apps/browse?repo_maintainer_id=271577', label: 'Odoo Apps Store', position: 'right'},
        {href: 'mailto:support@novator.co', label: 'Support', position: 'right'},
        {href: 'https://www.novator.co', label: 'novator.co', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Guides', items: [{label: 'All apps', to: '/'}, {label: 'Installing an app', to: '/getting-started/install'}]},
        {title: 'Help', items: [{label: 'support@novator.co', href: 'mailto:support@novator.co'},
                                 {label: 'Odoo Apps Store', href: 'https://apps.odoo.com/apps/browse?repo_maintainer_id=271577'}]},
        {title: 'Novator Technologies', items: [{label: 'www.novator.co', href: 'https://www.novator.co'},
                                                 {label: 'GitHub', href: 'https://github.com/novatorapps'}]},
      ],
      copyright: `Copyright ${new Date().getFullYear()} Novator Technologies. Odoo Certified Partner.`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula, additionalLanguages: ['python', 'sql', 'bash']},
  },
};

export default config;
