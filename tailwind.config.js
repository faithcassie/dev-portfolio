/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        customPink: "-10px 10px 10px 1px rgba(246, 142, 255, 0.3)",
        customBlue: "-10px 10px 10px 1px rgba(24, 142, 255, 0.2)",
      },
    },
  },
  plugins: [],
};
