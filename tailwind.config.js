/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        dropShadow1: "0px 126px 35px 0 #000000",
        dropShadow2: "0px 81px 32px 0 #000000/[1]",
        dropShadow3: "0px 45px 27px 0 #000000/5",
        dropShadow4: "0px 20px 20px 0 #000000/[9]",
        dropShadow5: "0px 5px 11px 0 #000000/[10]",
        dropShadow6: "0px 0px 0px 0 #000000/[10]",
      },
      maxWidth: {
        xl: "1275px",
      },
      colors: {
        buttonColor: "#5D50C6",
        headingColor: "#191825",
        textColor: "#515151",
        strongTextColor: "#F85E9F",
        textLinkColor: "#222831",
        textDesc: "#191825",
      },
    },
  },
  plugins: [],
};
