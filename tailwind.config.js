module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./assets/js/**/*.js",
    "./themes/**/*.{html,js}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "100ch",
          },
        },
        blog: {
          css: {
            maxWidth: "100ch",
            h1: {
              fontSize: "2rem",
              fontWeight: "bold",
              color: theme("colors.black"),
              position: "relative",
              padding: theme("spacing.4"),
              marginBottom: theme("spacing.4"),
              marginTop: theme("spacing.6"),
              backgroundColor: theme("colors.yellow.300"),
              textAlign: "left",
            },
            h2: {
              fontSize: "1.5rem",
              fontWeight: "bold",
              position: "relative",
              marginBottom: theme("spacing.4"),
              marginTop: theme("spacing.6"),
              paddingBottom: theme("spacing.2"),
              borderBottomWidth: "2px",
              borderBottomStyle: "solid",
              borderImage: `linear-gradient(to right, ${theme(
                "colors.gray.400",
              )} 85%, ${theme("colors.primary")} 100%) 1`,
            },
          },
        },
      }),
      fontFamily: {
        sans: ['"Noto Sans JP"', "sans-serif"],
      },
      colors: {
        primary: "#272343",
        "primary-focus": "#2d334a", // buttonHover
        "primary-content": "#2d334a", // buttonText
        secondary: "#0017c1",
        "secondary-focus": "#000bb1", // tertiary
        "secondary-content": "#fffffe", // optional
        accent: "#ffd803", // link
        "accent-focus": "#e8c702", // optional darker link
        "accent-content": "#fffffe",
        neutral: "#272343", // headline
        "neutral-focus": "#1f1e2b", // headlineHover
        "neutral-content": "#fffffe",
        "base-100": "#fffffe", // background
        "base-200": "#e3f6f5", // secondary
        "base-300": "#bae8e8", // tertiary
        "base-content": "#2d334a", // paragraph
        info: "#bae8e8",
        success: "#e3f6f5",
        warning: "#ffd803",
        error: "#ff5722",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: ["corporate"],
  },
  mode: "jit",
};
