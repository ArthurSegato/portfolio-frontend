/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
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
    ],
  },
};
