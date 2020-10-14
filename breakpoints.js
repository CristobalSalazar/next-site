module.exports = {
  defaultBreakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
  breakpoints: {
    sm: 500,
    md: 800,
    lg: 1080,
    xl: 1366,
  },
  generateScreens(breakpoints) {
    return {
      sm: { max: px(breakpoints.sm) },
      md: { min: px(breakpoints.sm + 1), max: px(breakpoints.md) },
      lg: { min: px(breakpoints.md + 1), max: px(breakpoints.lg) },
      xl: { min: px(breakpoints.lg + 1), max: px(breakpoints.xl) },
    };
  },
};

function px(num) {
  return num + "px";
}
