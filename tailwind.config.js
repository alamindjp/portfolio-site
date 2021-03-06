/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bgSemi: "#2E0249",
        textSemi: "#B7E5DD",
        headingSemi: "#5FD068",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#79018C",
          secondary: "#F14668",
          accent: "#9C19E0",
          neutral: "#4C0070",
          "base-100": "#ffffff",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#FF96AD",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
