// User guides for Novator apps: https://docs.novatorapps.com (docs.novator.co redirects here).
// The company site novatorapps.com is built from site.config.js in this same repo.
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Novator Docs',
  tagline: 'Step-by-step guides for every Novator app for Odoo',
  favicon: 'img/favicon.png',
  url: 'https://docs.novatorapps.com',
  baseUrl: '/',
  organizationName: 'novatorapps',
  projectName: 'novator-docs',
  trailingSlash: false,
  staticDirectories: ['static', 'static-docs'],
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
  clientModules: ['./src/clientModules/track.js'],
  themes: [
    ['@easyops-cn/docusaurus-search-local', {
      hashed: true, indexBlog: false, docsRouteBasePath: '/', highlightSearchTermsOnTargetPage: true,
    }],
  ],
  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      title: 'Docs',
      logo: {alt: 'Novator', src: 'img/novator-logo.png', height: 30},
      items: [
        {to: '/', label: 'Apps', position: 'left', activeBaseRegex: '^/$'},
        {to: '/getting-started/install', label: 'Getting started', position: 'left'},
        {type: 'docSidebar', sidebarId: 'guides', position: 'left', label: 'Guides'},
        {to: '/support', label: 'Support', position: 'left'},
        {href: 'https://novatorapps.com', label: 'novatorapps.com', position: 'right', className: 'nav-store'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Guides', items: [{label: 'All guides', to: '/'}, {label: 'Installing an app', to: '/getting-started/install'}, {label: 'Support', to: '/support'}]},
        {title: 'Novator Apps', items: [{label: 'novatorapps.com', href: 'https://novatorapps.com'}, {label: 'Custom apps and integrations', href: 'https://novatorapps.com/services'}, {label: 'Articles', href: 'https://novatorapps.com/articles'},
                                 {label: 'Odoo Apps Store', href: 'https://apps.odoo.com/apps/browse?repo_maintainer_id=271577'}]},
        {title: 'Contact', items: [{label: 'support@novator.co', href: 'mailto:support@novator.co'}, {label: 'www.novator.co', href: 'https://www.novator.co'},
                                                 {label: 'GitHub', href: 'https://github.com/novatorapps'}]},
      ],
      copyright: `Copyright ${new Date().getFullYear()} Novator Technologies. Official Odoo Partner.`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula, additionalLanguages: ['python', 'sql', 'bash']},
  },
};

export default config;
