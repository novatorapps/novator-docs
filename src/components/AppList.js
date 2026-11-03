import Link from '@docusaurus/Link';
import apps from '@site/src/data/apps.json';

export default function AppList() {
  return (
    <ul>
      {apps.apps.map((app) => (
        <li key={app.slug}>
          {app.guide ? <Link to={`/${app.slug}`}><b>{app.title}</b></Link> : <b>{app.title}</b>}
          {': '}{app.summary}{app.guide ? '' : ' (guide coming soon)'}
        </li>
      ))}
    </ul>
  );
}
