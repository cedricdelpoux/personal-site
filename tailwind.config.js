// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js"],
  theme: {
    colors: {},
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
      "9xl": "7rem",
    },
    textColor: {
      white: "#ffffff",
      grey: "#444444",
      black: "#111111",
      blue: "#067bc2",
      primary: "var(--color-text-primary)",
      secondary: "var(--color-text-secondary)",
      link: "var(--color-text-link)",
      default: "var(--color-text-default)",
      "default-soft": "var(--color-text-default-soft)",
      inverse: "var(--color-text-inverse)",
      "inverse-soft": "var(--color-text-inverse-soft)",
    },
    backgroundColor: {
      white: "#ffffff",
      grey: "#999999",
      modal: "#00000050",
      primary: "var(--color-bg-primary)",
      "primary-light": "var(--color-bg-primary-light)",
      compliment: "var(--color-bg-compliment)",
      accent: "var(--color-bg-accent)",
      "accent-light": "var(--color-bg-accent-light)",
      secondary: "var(--color-bg-secondary)",
      default: "var(--color-bg-default)",
      inverse: "var(--color-bg-inverse)",
    },
    borderColor: {
      primary: "var(--color-bg-primary)",
      accent: "var(--color-bg-accent)",
      link: "var(--color-text-link)",
      secondary: "var(--color-bg-secondary)",
      default: "var(--color-bg-default)",
      inverse: "var(--color-bg-inverse)",
      "light-grey": "#00000015",
    },
    fontFamily: {
      display: "var(--font-display)",
      body: "var(--font-body)",
    },
    fontWeights: {
      normal: "var(--font-weight-normal)",
      display: "var(--font-weight-display)",
      btn: "var(--font-weight-btn)",
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("postcss-nested"),
    require("autoprefixer"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/custom-forms"),
  ],
};
