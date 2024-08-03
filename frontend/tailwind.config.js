/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "sign-in-background": "url('/assets/book-store-background.jpg)",
      },
    },
  },
  plugins: [],
};
