const sharedConfig = require('@repo/tailwind-config/tailwind.config.mts')

/** @type {import('tailwindcss').Config} */

module.exports = {
  ...sharedConfig,
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
}