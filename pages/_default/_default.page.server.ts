import { renderToString } from "@vue/server-renderer";
import { html } from "vite-plugin-ssr";
import { createApp } from "./app";
import { PageContext } from "./types";

export { render };
export { passToClient };

// See https://vite-plugin-ssr.com/data-fetching
const passToClient: (keyof PageContext)[] = [
  "pageProps",
  "routeParams",
  "urlPathname",
];

const isProduction = process.env.NODE_ENV === "production";

async function render(pageContext: PageContext) {
  const app = createApp(pageContext);
  const appHtml = await renderToString(app);

  // See https://vite-plugin-ssr.com/html-head
  const { documentProps } = pageContext;
  const title =
    (documentProps && documentProps.title) ||
    "Keeping Track of Hate Subreddits";

  const base = isProduction ? "/reddit-manosphere" : ".";
  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${base}/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="${base}/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="${base}/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="${base}/favicon-16x16.png"
        />
        <link rel="manifest" href="${base}/site.webmanifest" />
        <link rel="mask-icon" href="${base}/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${html.dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;
}
