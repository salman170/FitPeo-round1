/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#202028",
        darkMainBg: "#141416",
        darkCard: "#374151",
        lightText: "#d1d5db",
        primaryBlue: "#7294ff",
        secondryGray: "#47484d",
        lightHeader: "#2a2b30",
      },
    },
  },
  plugins: [],
};
