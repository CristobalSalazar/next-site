theme1 = {
  dark: "#132743",
  light: "whitesmoke",
  primary: "#edc988",
  secondary: "#f8efd4",
  accent: "#d7385e",
  muted: "#555",
};

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
      serif: [
        "Playfair Display",
        "Georgia",
        "Times New Roman",
        "Times",
        "serif",
      ],
      cursive: ["Sansita Swashed", "cursive"],
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
        muted: "#555",
      },
    },
  },
  variants: {},
  plugins: [],
};
