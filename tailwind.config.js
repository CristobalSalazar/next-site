const { defaultBreakpoints, generateScreens } = require("./breakpoints");
const { defaultTheme } = require("./themes");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/components/**/*.tsx", "./src/pages/**/*.tsx"],
  theme: {
    screens: generateScreens(defaultBreakpoints),
    fontFamily: {
      serif: ["David Libre", "Georgia", "Times New Roman", "Times", "serif"],
      cursive: ["Sansita Swashed", "cursive"],
      sans: ["Inter", "sans"],
    },
    extend: {
      width: {
        "screen/2": "50vw",
      },
      height: {
        "screen/2": "50vh",
      },
      colors: defaultTheme,
    },
  },
  variants: {},
  plugins: [],
};
