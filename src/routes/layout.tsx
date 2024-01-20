import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "synthwave",
    "retro",
    "valentine",
    "garden",
    "forest",
    "pastel",
    "fantasy",
    "wireframe",
    "dracula",
    "cmyk",
    "autumn",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];
  return (
    <>
      <main
        data-theme={themes[Math.floor(Math.random() * themes.length)]}
        class="flex min-h-screen w-full items-center justify-center bg-base-300 p-4 sm:p-6 lg:p-8"
      >
        <Slot />
      </main>
    </>
  );
});
