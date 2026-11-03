import {useLocation} from '@docusaurus/router';
import {sendEvent} from '@site/src/clientModules/track';

const BODY = [
  'What should the app do (the problem it solves):', '',
  'Odoo version and edition:',
  'Hosting (Odoo.sh or own server):',
  'Apps it works with (Sales, Inventory, Point of Sale, ...):',
  'Other systems to connect (if any):',
  'When you need it:',
  'Company:', '',
].join('\n');

// Opens an email for a custom app request and counts the click (no personal data).
export default function AppRequest({label = 'Request a custom app'}) {
  const {pathname} = useLocation();
  const href = `mailto:support@novator.co?subject=${encodeURIComponent('App request: ')}&body=${encodeURIComponent(BODY)}`;
  return (
    <p style={{margin: '1.2rem 0'}}>
      <a className="button button--primary" href={href} onClick={() => sendEvent({type: 'app_request', page: pathname})}>
        {label}
      </a>
    </p>
  );
}
