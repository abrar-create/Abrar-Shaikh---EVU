/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#000000",
        electric: "#0070f3",
      },
      boxShadow: {
        electric: "0 0 0 1px rgba(0,112,243,0.25), 0 10px 30px rgba(0,112,243,0.2)",
      },
    },
  },
  plugins: [],
};
