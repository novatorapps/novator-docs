import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import AppRequest from '@site/src/components/AppRequest';
import Heading from '@theme/Heading';

const DOCS = 'https://docs.novatorapps.com';

const INTEGRATIONS = [
  ['Payments', 'Hosted checkouts with server-side verification and refunds from Odoo.', 'bank-alfalah', 'Bank Alfalah'],
  ['Cloud storage', 'Attachments moved to Google Drive, Amazon S3 or Cloudflare R2 and opened from Odoo as before.', 'storage-manager', 'Storage Manager'],
  ['Printers', 'Reports, labels and receipts sent straight to local and network printers.', 'direct-print', 'Direct Print'],
  ['Scales', 'Weighing scales read in the browser at the Point of Sale, without an IoT Box.', 'pos-scale', 'POS Scale Integration'],
  ['AI assistants', 'Claude and other AI apps connected to Odoo through MCP, with each user’s own access rights.', 'ai-connector', 'AI Connector'],
];

export default function Services() {
  return (
    <Layout title="Custom Odoo apps and integrations"
            description="Custom Odoo app development and integrations with payment gateways, devices, cloud storage and other systems, by Novator Technologies, an official Odoo partner.">
      <header className="home-hero">
        <h1>Custom Odoo apps and integrations</h1>
        <p>When no app does what you need, we build it: for your Odoo version, Community or Enterprise,
          on Odoo.sh or your own server.</p>
      </header>
      <main className="container site-narrow">
        <section className="site-section">
          <h2>What we build</h2>
          <div className="site-grid-2">
            <div className="site-card">
              <h3>Custom apps</h3>
              <p>New features, screens, reports and automations that fit your processes, built as a proper Odoo app
                so they upgrade with your database.</p>
            </div>
            <div className="site-card">
              <h3>Integrations</h3>
              <p>Odoo connected to payment gateways, banks, devices, cloud services and other software, so data
                does not have to be typed twice.</p>
            </div>
            <div className="site-card">
              <h3>Our apps, extended</h3>
              <p>Changes to one of our apps for your case, or one of our apps on another Odoo version. Each
                installation guide has a <strong>Request this version</strong> button.</p>
            </div>
            <div className="site-card">
              <h3>Odoo implementation</h3>
              <p>Setting up Odoo for your company, from analysis to go-live, through
                {' '}<a href="https://www.novator.co" target="_blank" rel="noopener">Novator Technologies</a>.</p>
            </div>
          </div>
        </section>

        <section className="site-section">
          <Heading as="h2" id="integrations">Integrations we have built</Heading>
          <p>These are published apps, so you can read exactly how each one works.</p>
          <table className="site-table">
            <thead><tr><th>Area</th><th>What it does</th><th>Example</th></tr></thead>
            <tbody>
              {INTEGRATIONS.map(([area, text, slug, name]) => (
                <tr key={slug}><td>{area}</td><td>{text}</td><td><a href={`${DOCS}/${slug}`}>{name}</a></td></tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="site-section">
          <h2>How it works</h2>
          <ol className="site-steps">
            <li><strong>Tell us what you need.</strong> The problem, your Odoo version and edition, and the systems involved.</li>
            <li><strong>We reply with questions or a proposal.</strong> If one of our apps already does most of it, we say so.</li>
            <li><strong>We build and test it</strong> on your Odoo version, on a copy of your setup where possible.</li>
            <li><strong>You test it</strong> on a test database before it goes live.</li>
          </ol>
        </section>

        <section className="site-section site-request">
          <Heading as="h2" id="request">Request a custom app or integration</Heading>
          <p>The button opens an email with these questions. Answer the ones you can:</p>
          <ul className="site-list">
            <li>What should the app do, and who will use it? Describe the result, not the screens.</li>
            <li>Odoo version, Community or Enterprise, and hosting: Odoo.sh or your own server. Odoo Online does not allow custom apps.</li>
            <li>The Odoo apps involved, and any outside system to connect.</li>
            <li>When you need it.</li>
          </ul>
          <AppRequest label="Request a custom app or integration" />
          <p>Or write to <a href="mailto:support@novator.co">support@novator.co</a> with the subject <strong>App request</strong>.</p>
        </section>
      </main>
    </Layout>
  );
}
