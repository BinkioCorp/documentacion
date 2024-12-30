import { createPreset } from 'fumadocs-ui/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
  ],
  presets: [createPreset()],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(90.2deg, #9A70F1 -0.58%, rgba(80, 60, 147, 0.8) 18.89%, #6A3EF4 37.29%, #D42BBD 74.62%, #F93781 94.63%)',
      },
    },
  },
  plugins: [],
};
