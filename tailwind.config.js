/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./html"],
  theme: {
    extend: {
      fontFamily: {
        "libre-franklin": ['"Libre Franklin"', "sans- serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "primary-blue": "hsl(223, 87%, 63%)",
        "pale-blue": "hsl(223, 100%, 88%)",
        "light-red": "hsl(354, 100%, 66%)",
        gray: "hsl(0, 0%, 59%)",
        "dark-blue": "hsl(209, 33%, 12%)",
      },
      width: {
        1280: "320rem",
        782: "195rem",
      },
    },
  },
  plugins: [],
};

