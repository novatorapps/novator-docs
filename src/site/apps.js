import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Catalog from '@site/src/components/Catalog';

export default function Apps() {
  return (
    <Layout title="Odoo apps by Novator"
            description="All Novator apps for Odoo: reporting, security, storage, printing, Point of Sale, inventory and payments. Free editions, one-time prices, a user guide for each.">
      <header className="home-hero">
        <h1>Odoo apps by Novator</h1>
        <p>Every app is on the Odoo Apps Store and has a user guide with installation, setup and release notes.</p>
      </header>
      <main className="container">
        <Catalog guideBase="https://docs.novatorapps.com" />
        <p className="catalog-custom">
          Need an app we do not have? <Link to="/services#request">Tell us what you need</Link>.
        </p>
      </main>
    </Layout>
  );
}
