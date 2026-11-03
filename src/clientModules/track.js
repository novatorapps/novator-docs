// Counts clicks on links to the Odoo Apps Store. A click is not a purchase: purchases happen on
// apps.odoo.com and cannot be measured here. No cookies, no personal data: only the page path and link.
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export function sendEvent(payload) {
  try {
    const body = JSON.stringify(payload);
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/event', new Blob([body], {type: 'application/json'}));
    } else {
      fetch('/api/event', {method: 'POST', body, headers: {'Content-Type': 'application/json'}, keepalive: true});
    }
  } catch (e) { /* tracking must never break the page */ }
}

if (ExecutionEnvironment.canUseDOM) {
  document.addEventListener('click', (ev) => {
    const a = ev.target.closest && ev.target.closest('a[href^="https://apps.odoo.com/"]');
    if (!a) return;
    const m = a.href.match(/apps\/modules\/[^/]+\/([a-z0-9_]+)/);
    sendEvent({type: 'outbound', page: window.location.pathname, target: m ? m[1] : 'store'});
  }, true);
}
