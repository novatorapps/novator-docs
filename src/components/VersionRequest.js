import {useState} from 'react';
import {useLocation} from '@docusaurus/router';
import apps from '@site/src/data/apps.json';
import {sendEvent} from '@site/src/clientModules/track';

const ALL = ['13.0', '14.0', '15.0', '16.0', '17.0', '18.0', '19.0', '20.0'];

function supported(versions) {
  const parts = versions.split('-').map((v) => parseFloat(v));
  const lo = parts[0];
  const hi = parts[parts.length - 1];
  return ALL.filter((v) => parseFloat(v) >= lo && parseFloat(v) <= hi);
}

// "Request another Odoo version": opens an email and counts the request (app and version only).
export default function VersionRequest({slug}) {
  const {pathname} = useLocation();
  const app = apps.apps.find((a) => a.slug === slug);
  const missing = app ? ALL.filter((v) => !supported(app.versions).includes(v)) : [];
  const [version, setVersion] = useState(missing[missing.length - 1] || '');
  if (!app || !missing.length) return null;
  const subject = `Version request: ${app.title} for Odoo ${version}`;
  const body = [
    `I would like ${app.title} for Odoo ${version}.`, '',
    'Odoo edition (Community or Enterprise):',
    'Hosting (Odoo.sh or own server):',
    'Company:', '',
  ].join('\n');
  const href = `mailto:support@novator.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return (
    <div className="request-box">
      <span>Need {app.title} on another Odoo version?</span>
      <select value={version} onChange={(e) => setVersion(e.target.value)} aria-label="Odoo version">
        {missing.map((v) => <option key={v} value={v}>Odoo {v}</option>)}
      </select>
      <a className="button button--sm button--primary" href={href}
         onClick={() => sendEvent({type: 'version', page: pathname, target: `${slug}:${version}`})}>
        Request this version
      </a>
    </div>
  );
}
