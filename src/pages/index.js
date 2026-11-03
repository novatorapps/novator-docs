import Layout from '@theme/Layout';
import Catalog from '@site/src/components/Catalog';

export default function Home() {
  return (
    <Layout title="User guides for Novator apps for Odoo"
            description="User guides for every Novator Technologies app for Odoo: installation, setup, everyday use, troubleshooting and release notes.">
      <header className="home-hero">
        <h1>Novator app guides</h1>
        <p>Install, set up and get the most out of every Novator app for Odoo. Each guide follows the same steps:
          overview, installation, setup, everyday use, troubleshooting and release notes.</p>
      </header>
      <main className="container">
        <Catalog />
        <p className="catalog-custom">
          Need an app we do not have? <a href="https://novatorapps.com/services#request">Tell us what you need</a>.
        </p>
      </main>
    </Layout>
  );
}
