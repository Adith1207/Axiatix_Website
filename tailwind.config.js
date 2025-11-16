/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a42a2a",
        light: "#e9cccc"
      },
      keyframes: {
        meshFlow: {
          "0%": { transform: "scale(1.08) translate(-6%, -6%)" },
          "50%": { transform: "scale(1.22) translate(6%, 4%)" },
          "100%": { transform: "scale(1.08) translate(-6%, -6%)" },
        }
      },
      animation: {
        meshFlow: "meshFlow 12s ease-in-out infinite alternate",
      }
    }
  },
  plugins: [],
}
