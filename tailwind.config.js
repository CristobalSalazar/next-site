module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens: {
      xs: { max: "500px" },
      sm: { max: "500px" },
      md: { max: "800px" },
      lg: { max: "1080px" },
      xl: { max: "1366px" },
    },
    fontFamily: {
      serif: ["Georgia", "Times New Roman", "Times", "serif"],
    },
    extend: {
      height: {
        "screen/2": "50vh",
      },
      colors: {
        dark: "#132743",
        light: "whitesmoke",
        primary: "#edc988",
        secondary: "#f8efd4",
        accent: "#d7385e",
        muted: "#666",
      },
    },
  },
  variants: {},
  plugins: [],
};
