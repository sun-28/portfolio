/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        icewhite: "#ebebeb",
        grey: "#5d5d5d",
        darkblue: "#0c2019",
        blackblue: "#0c2019",
        turquoise: "#49dea5",
        lightTur: "#49dea5",
        tastycolor: "#70B9BE",
        silentmooncolor: "#bdffe2",
        instorcolor: "#4ae399",
      },
    },
  },
  plugins: [],
};
