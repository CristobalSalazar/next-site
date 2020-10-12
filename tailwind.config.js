theme1 = {
  dark: "#132743",
  light: "whitesmoke",
  primary: "#edc988",
  secondary: "#f8efd4",
  accent: "#d7385e",
  muted: "#ddd",
};

const breakpoints = {
  sm: 500,
  md: 800,
  lg: 1080,
  xl: 1366,
};

function px(num) {
  return num + "px";
}

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens: {
      sm: { max: px(breakpoints.sm) },
      md: { min: px(breakpoints.sm + 1), max: px(breakpoints.md) },
      lg: { min: px(breakpoints.md + 1), max: px(breakpoints.lg) },
      xl: { min: px(breakpoints.lg + 1), max: px(breakpoints.xl) },
    },
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
      colors: {
        dark: "#132743",
        light: "whitesmoke",
        primary: "#edc988",
        secondary: "#f8efd4",
        accent: "#d7385e",
        muted: "#aaa",
      },
    },
  },
  variants: {},
  plugins: [],
};
