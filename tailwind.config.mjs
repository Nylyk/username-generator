/** @type {import('tailwindcss').Config} */

import catppuccin from '@catppuccin/tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [catppuccin({
    defaultFlavour: "mocha",
  })],
}

