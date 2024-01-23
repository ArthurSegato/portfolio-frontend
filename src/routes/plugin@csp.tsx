import type { RequestHandler } from "@builder.io/qwik-city";
import { isDev } from "@builder.io/qwik/build";

export const onRequest: RequestHandler = (event) => {
  if (isDev) return; // Will not return CSP headers in dev mode
  const nonce = crypto.randomUUID();
  event.sharedMap.set("@nonce", nonce);
  const csp = [
    `default-src 'self' 'unsafe-inline'`,
    `font-src 'self'`,
    `img-src 'self' 'unsafe-inline' data:`,
    `script-src 'self' 'unsafe-inline' https: 'nonce-${nonce}' 'strict-dynamic'`,
    `style-src 'self' 'unsafe-inline'`,
    `frame-src 'self' 'nonce-${nonce}' 'https://www.youtube.com/'`,
    `object-src 'none'`,
    `base-uri 'self'`,
  ];

  event.headers.set("Content-Security-Policy", csp.join("; "));
  event.headers.set("X-Content-Type-Options", "nosniff");
  event.headers.set("X-XSS-Protection", "1; mode=block");
  event.headers.set("X-Frame-Options", "DENY");
  event.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
  );
};
