function getPurgeCssPlugin() {
  if (process.env.NODE_ENV === "production") {
    return [
      "@fullhuman/postcss-purgecss",
      {
        content: ["./src/pages/*.tsx", "./src/components/*.tsx"],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      },
    ];
  }
}
module.exports = {
  plugins: [
    "tailwindcss",
    "postcss-preset-env",
    getPurgeCssPlugin(),
    "autoprefixer",
  ],
};
