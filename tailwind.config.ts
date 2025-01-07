import daisyui from "daisyui";
module.exports = {
  content: [
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#45193a",
          accent: "#694760",
          secondary: "#f9d2ef",
          neutral: "#694760",
        },
      },
    ],
  },
};
