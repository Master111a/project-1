/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                before: "0px -10px 0 0 rgb(243,244,246)",
                card: "0px 2px 1.5px 0px rgb(204 204 204)",
                newShadow: "3.5px 6px 18px 0 rgb(0 0 0 /10%)",
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
            },
        },
    },
    plugins: [],
};
