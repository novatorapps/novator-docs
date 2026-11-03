import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import apps from '@site/src/data/apps.json';

function AppCard({app}) {
  const icon = useBaseUrl(app.icon || 'img/app-default.png');
  const href = app.guide ? `/${app.slug}` : app.store;
  const inner = (
    <>
      <img src={icon} alt="" />
      <div>
        <h3>{app.title}</h3>
        <p>{app.summary}</p>
        <div className="app-tags">
          {app.free && <span className="app-tag free">Free</span>}
          {app.pro && <span className="app-tag pro">{app.free ? `Pro ${app.price}` : app.price}</span>}
          <span className="app-tag">Odoo {app.versions}</span>
          {!app.guide && <span className="app-tag">Guide coming soon</span>}
        </div>
      </div>
    </>
  );
  return app.guide
    ? <Link className="app-card" to={href}>{inner}</Link>
    : <a className="app-card" href={href} target="_blank" rel="noopener noreferrer">{inner}</a>;
}

export default function Home() {
  const list = [...apps.apps].sort((a, b) => Number(b.guide) - Number(a.guide));
  return (
    <Layout title="User guides" description="Step-by-step guides for every Novator app for Odoo">
      <header className="home-hero">
        <h1>Novator user guides</h1>
        <p>Install, set up and get the most out of every Novator app for Odoo. Pick an app, or search with the box at the top.</p>
      </header>
      <main className="container">
        <div className="app-grid">
          {list.map((app) => <AppCard key={app.slug} app={app} />)}
        </div>
      </main>
    </Layout>
  );
}
