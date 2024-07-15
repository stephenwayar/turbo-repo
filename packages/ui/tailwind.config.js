const sharedConfig = require('@repo/tailwind-config/tailwind.config.mts')

/** @type {import('tailwindcss').Config} */

module.exports = {
  ...sharedConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
}