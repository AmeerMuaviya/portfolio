/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "computer-person":"url(/images/computer-person.png)",
        tech:"url(/images/tech-bg.jpg)",
        react:"url(/React.svg)",
        "react_gif":"url(/React.svg)",
        "nodejs":"url(/nodejs.svg)",
        "tailwind":"url(/tailwind.svg)",
        "frontEnd":"url(/images/frontEnd.png)",
        "mysql":"url(/images/mysql.png)",
        me:"url(/images/me.jpeg)"
      },
      colors: {
        text: "#010809",
        background: "#e9f8fb",
        "primary-button": "#0f4b57",
        "secondary-button": "#ffffff",
        accent: "#0b3841",
        "accent-light":"#609aa5",
        skin:'#9B8488',
        'skin-dark':'#af8d87',
        'pink-light':'#f4c4f3',
        pink:'#fc67fa'
      },
    },
  },
  plugins: [],
};
