/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "mobile" : "375px",
        "desktop" : "1440px",
      },
      colors: {
        "soft_red" : "hsl(7, 99%, 70%)",
        "yellow" : "hsl(51, 100%, 49%)",
        "dark_desaturated_cyan" : "hsl(167, 40%, 24%)",
        "dark_blue" : "hsl(198, 62%, 26%)",
        "dark_moderate_cyan" : "hsl(168, 34%, 41%)",
        "very_dark_desaturated_blue" : "hsl(212, 27%, 19%)",
        "very_dark_grayish_blue" : "hsl(213, 9%, 39%)",
        "dark_grayish_blue" : "hsl(232, 10%, 55%)",
        "grayish_blue" : "hsl(210, 4%, 67%)",
        "white" : "hsl(0, 0%, 100%)",
        "hero-blue" : "#3ebfff",
      },
      fontFamily: {
        "body" : ["Barlow", "sans-serif"],
        "heading" : ["Fraunces", "serif"],
      },
    }, 
  },
  plugins: [],
}

