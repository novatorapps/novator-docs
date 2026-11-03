import {useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import apps from '@site/src/data/apps.json';

// App catalog with search and filters. Used by the docs home (guideBase '') and by novatorapps.com
// (guideBase 'https://docs.novatorapps.com').
const SERIES = ['13.0', '14.0', '15.0', '16.0', '17.0', '18.0', '19.0', '20.0'];

/** "17.0 - 20.0" -> ['17.0', ..., '20.0'] */
function seriesOf(app) {
  const parts = app.versions.split('-').map((s) => s.trim());
  const from = SERIES.indexOf(parts[0]);
  const to = SERIES.indexOf(parts[parts.length - 1]);
  return from < 0 || to < 0 ? parts : SERIES.slice(from, to + 1);
}

function AppCard({app, guideBase}) {
  const guide = `${guideBase}/${app.slug}`;
  const icon = useBaseUrl(app.icon || 'img/app-default.png');
  return (
    <article className="app-card">
      <img src={icon} alt="" width="56" height="56" loading="lazy" />
      <div className="app-card-body">
        <div className="app-card-category">{app.category}</div>
        <h3>{app.guide ? <Link to={guide}>{app.title}</Link> : app.title}</h3>
        <p>{app.summary}</p>
        <div className="app-tags">
          {app.free && <span className="app-tag free">{app.pro ? 'Free edition' : 'Free'}</span>}
          {app.pro && <span className="app-tag pro">{app.free ? `Pro ${app.price}` : app.price}</span>}
          <span className="app-tag">Odoo {app.versions}</span>
        </div>
        <div className="app-links">
          {app.guide && <Link className="app-link" to={guide}>User guide</Link>}
          {app.store_free && (
            <a className="app-link" href={app.store_free} target="_blank" rel="noopener" data-outbound="apps-store">
              {app.store_pro ? 'Free on Odoo Apps' : 'View on Odoo Apps'}
            </a>
          )}
          {app.store_pro && (
            <a className="app-link" href={app.store_pro} target="_blank" rel="noopener" data-outbound="apps-store">
              {app.store_free ? 'Pro on Odoo Apps' : 'View on Odoo Apps'}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Catalog({guideBase = ''}) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [edition, setEdition] = useState('');
  const [series, setSeries] = useState('');
  const categories = useMemo(() => [...new Set(apps.apps.map((a) => a.category))].sort(), []);
  const list = apps.apps.filter((app) => {
    const text = `${app.title} ${app.summary} ${app.category} ${app.free || ''} ${app.pro || ''}`.toLowerCase();
    if (query && !text.includes(query.toLowerCase())) return false;
    if (category && app.category !== category) return false;
    if (edition === 'free' && !app.free) return false;
    if (edition === 'paid' && !app.pro) return false;
    if (series && !seriesOf(app).includes(series)) return false;
    return true;
  });
  return (
    <>
        <div className="catalog-filters" role="search">
          <input type="search" className="catalog-search" placeholder="Search apps" aria-label="Search apps"
                 value={query} onChange={(e) => setQuery(e.target.value)} />
          <select aria-label="Category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All categories</option>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select aria-label="Edition" value={edition} onChange={(e) => setEdition(e.target.value)}>
            <option value="">Free and paid</option>
            <option value="free">Has a free edition</option>
            <option value="paid">Paid apps</option>
          </select>
          <select aria-label="Odoo version" value={series} onChange={(e) => setSeries(e.target.value)}>
            <option value="">Any Odoo version</option>
            {SERIES.slice().reverse().map((s) => <option key={s} value={s}>Odoo {s}</option>)}
          </select>
        </div>
        <p className="catalog-count">{list.length} of {apps.apps.length} apps</p>
        <div className="app-grid">
          {list.map((app) => <AppCard key={app.slug} app={app} guideBase={guideBase} />)}
        </div>
        {!list.length && <p className="catalog-empty">No app matches these filters.</p>}
    </>
  );
}
