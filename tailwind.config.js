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
      },
      fontFamily: {
        "body" : ["Barlow", "sans-serif"],
        "heading" : ["Fraunces", "serif"],
      },
      // fontSize: {
      //   "h1" : "2.5rem",
      //   "h2" : "1.5rem",
      //   "h3" : "1.25rem",
      //   "h4" : "1rem",
      //   "h5" : "0.875rem",
      //   "h6" : "0.75rem",
      //   "p" : "0.875rem",
      // },
      // lineHeight: {
      //   "h1" : "3rem",
      //   "h2" : "1.75rem",
      //   "h3" : "1.5rem",
      //   "h4" : "1.25rem",
      //   "h5" : "1.125rem",
      //   "h6" : "1rem",
      //   "p" : "1.5rem",
      // },
      // letterSpacing: {
      //   "h1" : "-0.025em",
      //   "h2" : "-0.025em",
      //   "h3" : "-0.025em",
      //   "h4" : "-0.025em",
      //   "h5" : "-0.025em",
      //   "h6" : "-0.025em",
      //   "p" : "-0.025em",
      // },
      // fontWeight: {
      //   "h1" : "700",
      //   "h2" : "700",
      //   "h3" : "700",
      //   "h4" : "700",
      //   "h5" : "700",
      //   "h6" : "700",
      //   "p" : "400",
      // },
      // boxShadow: {
      //   "card" : "0px 10px 20px rgba(0, 0, 0, 0.25)",
      // },
      // borderRadius: {
      //   "card" : "15px",
      // },
      // backgroundImage: {
      //   "desktop" : "url('./images/bg-desktop.svg')",
      //   "mobile" : "url('./images/bg-mobile.svg')",
      // },
      // backgroundSize: {
      //   "desktop" : "cover",
      //   "mobile" : "cover",
      // },
      // backgroundPosition: {
      //   "desktop" : "center",
      //   "mobile" : "center",
      // },
      // backgroundRepeat: {
      //   "desktop" : "no-repeat",
      //   "mobile" : "no-repeat",
      // },
      // backgroundAttachment: {
      //   "desktop" : "fixed",
      //   "mobile" : "fixed",
      // },
    }, 
  },
  plugins: [],
}

