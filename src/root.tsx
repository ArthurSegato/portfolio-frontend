import { component$, useServerData } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  const nonce = useServerData<string | undefined>("nonce");
  const themes = [
    "light",
    "dark",
    "cupcake",
    "synthwave",
    "retro",
    "valentine",
    "forest",
    "dracula",
    "cmyk",
    "autumn",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="icon"
          sizes="16x16"
          href="https://www.arthursegato.dev/favicon.ico"
        />
        <link
          rel="icon"
          sizes="32x32"
          href="https://www.arthursegato.dev/favicon32.ico"
        />

        <link
          rel="apple-touch-icon"
          href="https://www.arthursegato.dev/apple-touch-icon.png"
        />
        <RouterHead />
      </head>
      <body
        lang="en"
        data-theme={themes[Math.floor(Math.random() * themes.length)]}
      >
        <RouterOutlet />
        <ServiceWorkerRegister nonce={nonce} />
      </body>
    </QwikCityProvider>
  );
});
