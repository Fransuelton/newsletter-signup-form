/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 16px 32px 0px rgba(255, 97, 85, 0.50)'
      },
    },
  },
  plugins: [],
}
