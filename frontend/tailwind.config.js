/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gantari: ["Gantari", "sans-serif"],
      },
      colors: {
        "main-brown": "#51210D",
        "medium-brown": "#6E4334",
        "light-brown": "#B59988",
        "off-white": "#F0EFED",
        cream: "#F5F5F5",
      },
      fontSize: {
        "main-title": ["60px", { letterSpacing: "-0.03em", fontWeight: "600" }],
        subtitle: ["48px", { letterSpacing: "-0.03em", fontWeight: "600" }],
        "header-1": ["48px", { letterSpacing: "-0.03em", fontWeight: "500" }],
        "header-2": ["36px", { letterSpacing: "-0.03em", fontWeight: "500" }],
        "header-3": ["30px", { letterSpacing: "-0.03em", fontWeight: "500" }],
        "header-4": ["22px", { fontWeight: "700" }],
        "body": ["24px", { fontWeight: "300" }],
        "body-2": ["20px", { fontWeight: "400" }],
        "body-3": ["16px", { fontWeight: "300" }],
      },
    },
  },
  plugins: [],
};
