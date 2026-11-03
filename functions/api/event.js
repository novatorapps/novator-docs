// Cloudflare Pages Function: POST /api/event
// Stores simple counters in the EVENTS KV namespace. Nothing personal is kept: no IP address,
// no user agent, no cookies. Keys:
//   helpful:<page>:yes|no        "Was this helpful?" votes
//   outbound:<module>:<page>     clicks on Odoo Apps Store links (not purchases)
//   version:<slug>:<odoo version> clicks on "Request this version" (an email may or may not follow)
//   app_request:<page>           clicks on "Request a custom app"
// Requests from other hosts (previews, pages.dev) are stored under a "preview:" prefix.
const CANONICAL = ['novatorapps.com', 'docs.novatorapps.com'];

function clean(value, max) {
  return String(value || '').replace(/[^a-zA-Z0-9/_.:-]/g, '').slice(0, max);
}

export async function onRequestPost({request, env}) {
  if (!env.EVENTS) return new Response(null, {status: 204});
  let data;
  try {
    data = await request.json();
  } catch (e) {
    return new Response('bad request', {status: 400});
  }
  const page = clean(data.page, 120) || '/';
  let key;
  if (data.type === 'helpful' && (data.value === 'yes' || data.value === 'no')) {
    key = `helpful:${page}:${data.value}`;
  } else if (data.type === 'version') {
    key = `version:${clean(data.target, 60)}`;
  } else if (data.type === 'app_request') {
    key = `app_request:${page}`;
  } else if (data.type === 'outbound') {
    key = `outbound:${clean(data.target, 60) || 'store'}:${page}`;
  } else {
    return new Response('bad request', {status: 400});
  }
  if (!CANONICAL.includes(new URL(request.url).hostname)) key = 'preview:' + key;
  const current = parseInt((await env.EVENTS.get(key)) || '0', 10);
  await env.EVENTS.put(key, String(current + 1));
  return new Response(null, {status: 204});
}

export function onRequest() {
  return new Response('method not allowed', {status: 405, headers: {Allow: 'POST'}});
}
