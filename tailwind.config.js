/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "-10px 10px 10px 1px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
