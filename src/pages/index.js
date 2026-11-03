import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import apps from '@site/src/data/apps.json';

function AppCard({app}) {
  const icon = useBaseUrl(`/img/${app.slug}/icon-free.png`);
  return (
    <Link className="app-card" to={`/${app.slug}`}>
      <img src={icon} alt="" />
      <div>
        <h3>{app.title}</h3>
        <p>{app.summary}</p>
        <div className="app-tags">
          {app.free && <span className="app-tag free">Free</span>}
          {app.pro && <span className="app-tag pro">Pro {app.pro.price}</span>}
          <span className="app-tag">Odoo {app.versions[0]} - {app.versions[app.versions.length - 1]}</span>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const sorted = [...apps].sort((a, b) => a.title.localeCompare(b.title));
  return (
    <Layout title="User guides" description="Step-by-step guides for every Novator app for Odoo.">
      <main className="container">
        <div className="home-hero">
          <h1>Novator User Guides</h1>
          <p>Step-by-step guides for every Novator app for Odoo, with screenshots. Search above, or pick an app.</p>
        </div>
        <div className="app-grid">
          {sorted.map((app) => <AppCard key={app.slug} app={app} />)}
        </div>
      </main>
    </Layout>
  );
}
