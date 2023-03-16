/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        186: "44rem",
        198: "52rem",
      },
    },
  },
  plugins: [],
};
