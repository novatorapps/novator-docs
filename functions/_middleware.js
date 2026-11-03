// Host redirects shared by both Pages projects:
//   docs.novator.co/*     -> docs.novatorapps.com/*   (old guides address)
//   www.novatorapps.com/* -> novatorapps.com/*
const MOVED = {'docs.novator.co': 'docs.novatorapps.com', 'www.novatorapps.com': 'novatorapps.com'};

export async function onRequest({request, next}) {
  const url = new URL(request.url);
  const target = MOVED[url.hostname];
  if (target) {
    url.hostname = target;
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
