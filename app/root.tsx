import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/app.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "preload",
      href: "/fonts/jost/jost-v12-latin-regular.woff2",
      as: "font",
      type: "font/woff2",
    },
    {
      rel: "preload",
      href: "/fonts/francois-one/francois-one-v19-latin-regular.woff2",
      as: "font",
      type: "font/woff2",
    },
    {
      rel: "preload",
      href: "/img/wave.svg",
      as: "image",
      type: "image/svg+xml",
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <script
          defer
          data-domain="henrikfricke.dev"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
