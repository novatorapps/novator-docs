import Head from '@docusaurus/Head';
import apps from '@site/src/data/apps.json';

// SoftwareApplication structured data for an app overview page. Uses only catalog facts:
// name, summary, category, supported Odoo versions and the published price. No ratings or reviews.
function offer(name, price, url) {
  return {'@type': 'Offer', name, price: price, priceCurrency: 'USD', url};
}

export default function AppSchema({slug}) {
  const app = apps.apps.find((a) => a.slug === slug);
  if (!app) return null;
  const offers = [];
  if (app.free) offers.push(offer('Free edition', '0', app.store_free));
  if (app.pro) offers.push(offer(app.free ? 'Pro edition' : 'Paid app', (app.price || '').replace(/[^0-9.]/g, ''), app.store_pro));
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: app.title,
    description: app.summary,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: app.category,
    operatingSystem: `Odoo ${app.versions}`,
    url: `https://docs.novatorapps.com/${app.slug}`,
    publisher: {'@type': 'Organization', name: 'Novator Technologies', url: 'https://www.novator.co'},
    offers,
  };
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Head>
  );
}
