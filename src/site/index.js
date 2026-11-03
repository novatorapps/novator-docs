import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Head from '@docusaurus/Head';
import apps from '@site/src/data/apps.json';

const DOCS = 'https://docs.novatorapps.com';
const PARTNER = 'https://www.odoo.com/partners/novator-825459';
const FEATURED = ['dashboard-builder', 'storage-manager', 'access-manager', 'ai-connector', 'direct-print', 'pos-counter-ticket'];
// Newest articles first. Add new articles here when they are published.
const ARTICLES = [
  ['/articles/where-odoo-storage-goes', 'Where does the storage of an Odoo database go?'],
  ['/articles/odoo-user-permissions-explained', 'Odoo user permissions explained: groups, access rights and record rules'],
  ['/articles/dashboards-in-odoo', 'Dashboards in Odoo: what is built in, and when you need more'],
  ['/articles/weighing-scales-in-odoo-point-of-sale', 'Connecting a weighing scale to Odoo Point of Sale'],
];

function MiniCard({app}) {
  const icon = useBaseUrl(app.icon || 'img/app-default.png');
  return (
    <Link className="mini-card" to={`${DOCS}/${app.slug}`}>
      <img src={icon} alt="" width="44" height="44" loading="lazy" />
      <span>
        <strong>{app.title}</strong>
        <small>{app.category} · {app.free ? (app.pro ? `Free and Pro ${app.price}` : 'Free') : app.price}</small>
      </span>
    </Link>
  );
}

export default function Home() {
  const total = apps.apps.length;
  const withFree = apps.apps.filter((a) => a.free).length;
  const featured = FEATURED.map((s) => apps.apps.find((a) => a.slug === s)).filter(Boolean);
  const org = {
    '@context': 'https://schema.org', '@type': 'Organization', name: 'Novator Technologies',
    url: 'https://novatorapps.com', logo: 'https://novatorapps.com/img/novator-logo.png',
    email: 'support@novator.co', sameAs: ['https://www.novator.co', 'https://github.com/novatorapps', PARTNER],
  };
  return (
    <Layout title="Odoo apps, integrations and custom development"
            description="Novator Technologies is an official Odoo partner that builds Odoo apps, integrations and custom modules. Apps on the Odoo Apps Store with a user guide for each.">
      <Head><script type="application/ld+json">{JSON.stringify(org)}</script></Head>
      <header className="site-hero">
        <div className="container">
          <p className="site-eyebrow">Official Odoo Partner</p>
          <h1>Odoo apps, integrations and custom development</h1>
          <p className="site-lead">
            Novator Technologies builds apps for Odoo, connects Odoo to the systems you already use, and develops
            custom apps for the way your business works.
          </p>
          <div className="site-actions">
            <Link className="button button--primary button--lg" to="/apps">Browse our apps</Link>
            <Link className="button button--outline button--primary button--lg" to="/services#request">Request a custom app</Link>
          </div>
        </div>
      </header>

      <main>
        <section className="site-section container">
          <div className="site-grid-3">
            <div className="site-card">
              <h2>Odoo apps</h2>
              <p>{total} apps on the Odoo Apps Store for reporting, security, storage, printing, Point of Sale,
                inventory and payments. {withFree} of them have a free edition, and paid apps are a one-time purchase.</p>
              <Link to="/apps">See all apps</Link>
            </div>
            <div className="site-card">
              <h2>Integrations</h2>
              <p>Odoo connected to payment gateways, weighing scales, printers, cloud storage such as Google Drive,
                Amazon S3 and Cloudflare R2, and AI assistants such as Claude.</p>
              <Link to="/services#integrations">How we integrate</Link>
            </div>
            <div className="site-card">
              <h2>Custom development</h2>
              <p>Apps built for your processes, on your Odoo version, for Community or Enterprise, on Odoo.sh or
                your own server.</p>
              <Link to="/services#request">Tell us what you need</Link>
            </div>
          </div>
        </section>

        <section className="site-section container">
          <div className="site-section-head">
            <h2>Popular apps</h2>
            <Link to="/apps">All {total} apps</Link>
          </div>
          <div className="mini-grid">
            {featured.map((app) => <MiniCard key={app.slug} app={app} />)}
          </div>
        </section>

        <section className="site-section site-band">
          <div className="container site-split">
            <div>
              <h2>What is Odoo?</h2>
              <p>Odoo is an open source suite of business apps: CRM, sales, invoicing and accounting, inventory,
                manufacturing, Point of Sale, eCommerce, HR and many more, all on one database. Companies start with
                the apps they need and add others as they grow.</p>
              <p>Odoo comes as <strong>Community</strong>, free and open source, and <strong>Enterprise</strong>,
                with more apps and Odoo's support under a subscription. It runs on <strong>Odoo Online</strong>{' '}
                (hosted by Odoo, no third-party apps), on <strong>Odoo.sh</strong> (Odoo's cloud platform for
                custom apps) or on your own server. A new major version is released every year.</p>
            </div>
            <div>
              <h2>How we build apps</h2>
              <ul className="site-list">
                <li>Built and tested on every Odoo version an app supports, most of them Odoo 17 to 20.</li>
                <li>Works on Community and Enterprise, on Odoo.sh and on your own server.</li>
                <li>Free editions where they make sense, and one-time prices for paid apps.</li>
                <li>A user guide, installation notes and release notes for every app.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="site-section container">
          <div className="site-section-head">
            <h2>Articles</h2>
            <Link to="/articles">All articles</Link>
          </div>
          <ul className="site-articles">
            {ARTICLES.map(([to, title]) => <li key={to}><Link to={to}>{title}</Link></li>)}
          </ul>
        </section>

        <section className="site-section container">
          <div className="site-cta">
            <div>
              <h2>An official Odoo partner</h2>
              <p>Novator Technologies is listed as an Odoo partner on odoo.com, with Odoo-certified expertise.
                We are based in Karachi, Pakistan, and our apps are available worldwide on the Odoo Apps Store.</p>
            </div>
            <div className="site-actions">
              <a className="button button--secondary" href={PARTNER} target="_blank" rel="noopener">Our listing on odoo.com</a>
              <Link className="button button--primary" to="/contact">Contact us</Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
