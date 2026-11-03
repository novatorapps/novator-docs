import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const DOCS = 'https://docs.novatorapps.com';

export default function Contact() {
  return (
    <Layout title="Contact Novator" description="Contact Novator Technologies about Odoo apps, custom development, integrations or support.">
      <header className="home-hero">
        <h1>Contact</h1>
        <p>Write to <a href="mailto:support@novator.co">support@novator.co</a>. Tell us which of the topics below it is about.</p>
      </header>
      <main className="container site-narrow">
        <div className="site-grid-2 site-section">
          <div className="site-card">
            <h3>Help with one of our apps</h3>
            <p>Check the app's guide and FAQ first. The <a href={`${DOCS}/support`}>support page</a> lists what to
              include so we can help quickly.</p>
          </div>
          <div className="site-card">
            <h3>A custom app or integration</h3>
            <p>Use the <Link to="/services#request">custom app request</Link>, which lists the questions we need answered.</p>
          </div>
          <div className="site-card">
            <h3>Another Odoo version of an app</h3>
            <p>Use <strong>Request this version</strong> on the app's installation page in the <a href={DOCS}>docs</a>.</p>
          </div>
          <div className="site-card">
            <h3>Buying an app</h3>
            <p>Apps are sold on the <a href="https://apps.odoo.com/apps/browse?repo_maintainer_id=271577" target="_blank" rel="noopener">Odoo Apps Store</a>.
              Questions about a purchase or a download go to Odoo through your Odoo account.</p>
          </div>
        </div>
        <section className="site-section">
          <h2>Novator Technologies</h2>
          <ul className="site-list">
            <li>Official Odoo Partner: <a href="https://www.odoo.com/partners/novator-825459" target="_blank" rel="noopener">our listing on odoo.com</a></li>
            <li>Company website: <a href="https://www.novator.co" target="_blank" rel="noopener">www.novator.co</a></li>
            <li>Source code of our free apps: <a href="https://github.com/novatorapps" target="_blank" rel="noopener">github.com/novatorapps</a></li>
            <li>Karachi, Pakistan</li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
