// novatorapps.com: Novator Technologies, official Odoo partner for apps, integrations and custom development.
// Built from the same repo as the guides (docusaurus.config.js -> docs.novatorapps.com):
//   npx docusaurus build --config site.config.js --out-dir build-site
import {themes as prismThemes} from 'prism-react-renderer';

const STORE = 'https://apps.odoo.com/apps/browse?repo_maintainer_id=271577';
const DOCS = 'https://docs.novatorapps.com';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Novator Apps',
  tagline: 'Odoo apps, integrations and custom development',
  favicon: 'img/favicon.png',
  url: 'https://novatorapps.com',
  baseUrl: '/',
  organizationName: 'novatorapps',
  projectName: 'novatorapps-site',
  trailingSlash: false,
  staticDirectories: ['static', 'static-site'],
  onBrokenLinks: 'throw',
  markdown: {hooks: {onBrokenMarkdownLinks: 'throw', onBrokenMarkdownImages: 'throw'}},
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [
    ['classic', {
      docs: false,
      pages: {path: 'src/site'},
      blog: {
        routeBasePath: 'articles',
        path: 'articles',
        blogTitle: 'Articles',
        blogDescription: 'Practical articles about running Odoo: storage, permissions, dashboards and Point of Sale hardware.',
        blogSidebarTitle: 'All articles',
        blogSidebarCount: 'ALL',
        showReadingTime: true,
        feedOptions: {type: ['rss', 'atom'], title: 'Novator articles about Odoo'},
        onInlineAuthors: 'ignore',
        onUntruncatedBlogPosts: 'ignore',
      },
      theme: {customCss: ['./src/css/custom.css', './src/css/site.css']},
    }],
  ],
  clientModules: ['./src/clientModules/track.js'],
  // No search box: the local search plugin needs the docs plugin. The guides have search at docs.novatorapps.com.
  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {respectPrefersColorScheme: true},
    metadata: [{name: 'keywords', content: 'Odoo apps, Odoo partner, Odoo integration, Odoo custom development, Odoo modules'}],
    navbar: {
      logo: {alt: 'Novator', src: 'img/novator-logo.png', height: 30},
      items: [
        {to: '/apps', label: 'Apps', position: 'left'},
        {to: '/services', label: 'Services', position: 'left'},
        {to: '/articles', label: 'Articles', position: 'left'},
        {href: DOCS, label: 'Docs', position: 'left'},
        {to: '/contact', label: 'Contact', position: 'left'},
        {href: STORE, label: 'Odoo Apps Store', position: 'right', className: 'nav-store'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Apps', items: [{label: 'All apps', to: '/apps'}, {label: 'Odoo Apps Store', href: STORE},
                                {label: 'Docs', href: DOCS}, {label: 'Installing an app', href: `${DOCS}/getting-started/install`}]},
        {title: 'Services', items: [{label: 'Custom apps and integrations', to: '/services'}, {label: 'Request an app', to: '/services#request'},
                                    {label: 'Support', href: `${DOCS}/support`}]},
        {title: 'Company', items: [{label: 'Contact', to: '/contact'}, {label: 'Articles', to: '/articles'},
                                   {label: 'www.novator.co', href: 'https://www.novator.co'}, {label: 'GitHub', href: 'https://github.com/novatorapps'},
                                   {label: 'Privacy Policy', to: '/privacy'}, {label: 'Terms of Service', to: '/terms'}]},
      ],
      copyright: `Copyright ${new Date().getFullYear()} Novator Technologies. Official Odoo Partner. Odoo is a trademark of Odoo S.A.`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula, additionalLanguages: ['python', 'sql', 'bash']},
  },
};

export default config;
