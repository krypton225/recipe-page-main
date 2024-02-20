/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,pug}", "./*.{html}"],
  theme: {
    colors: {
      "nutmeg": "hsl(14, 45%, 36%)",
      "dark-raspberry": "hsl(332, 51%, 32%)",
      "rose-white": "hsl(330, 100%, 98%)",
      "eggshell": "hsl(30, 54%, 90%)",
      "light-grey": "hsl(30, 18%, 87%)",
      "wenge-brown": "hsl(30, 10%, 34%)",
      "dark-charcoal": "hsl(24, 5%, 18%)",
    },
    container: {
      center: true,
      padding: {
        xs: "1rem",
        sm: "2.5rem",
        md: "3rem"
      }
    },
    extend: {
      fontFamily: {
        "outfit": ["Outfit", "sans-serif"],
        "young": ["Young Serif", "sans-serif"]
      }
    },
  },
  plugins: [
    (process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  ],
};
