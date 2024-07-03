/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        165: "165px",
      },
      boxShadow: {},
      width: {
        25: "6.25rem",
        272: "272px",
        300: "300px",
      },
      maxWidth: {
        "3/5": "60%",
        "4/5": "80%",
        430: "430px",
        444: "444px",
        xl: "1110px",
        "2xl": "1200px",
        "3xl": "1440px",
      },
      minWidth: {
        xl: "1275px",
      },
      height: {
        25: "6.25rem",
        172: "172px",
        272: "272px",
        300: "300px",
        400: "400px",
      },
      minHeight: {
        713: "713px",
      },
      borderRadius: {
        32: "32px",
      },
      fontSize: {
        23: "23px",
        28: "28px",
        35: "35px",
        "4xl": "40px",
        "5xl": "48px",
        69: "69px",
      },
      lineHeight: {
        1.2: "120%",
        1.6: "160%",
      },
      blur: {
        layer: "500px",
      },
      dropShadow: {
        1: "0px 126px 35px 0 #000000",
        2: "0px 81px 32px 0 #000000/[1]",
        3: "0px 45px 27px 0 #000000/5",
        4: "0px 20px 20px 0 #000000/[9]",
        5: "0px 5px 11px 0 #000000/[10]",
        6: "0px 0px 0px 0 #000000/[10]",
        7: "0px 41px 89px 0 #000000/10",
      },
      colors: {
        buttonColor: "#5D50C6",
        headingColor: "#191825",
        textColor: "#515151",
        strongTextColor: "#F85E9F",
        textLinkColor: "#222831",
        textDesc: "#191825",
        stats: "#FF5722",
      },
      filter: {
        invert: "invert(1)",
        sepia: "sepia(1)",
        saturate: "saturate(5)",
        "hue-rotate": "hue-rotate(180deg)",
      },
    },
  },
  variants: {
    filter: ["responsive", "hover"],
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".filter-invert": {
          filter: "invert(1)",
        },
        ".filter-sepia": {
          filter: "sepia(1)",
        },
        ".filter-saturate": {
          filter: "saturate(5)",
        },
        ".filter-hue-rotate": {
          filter: "hue-rotate(180deg)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
