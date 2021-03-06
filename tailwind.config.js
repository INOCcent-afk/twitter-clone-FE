module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "var(--color-black)",
      white: "var(--color-white)",
      primary: {
        DEFAULT: "var(--color-primary)",
        900: "var(--color-primary-900)",
      },
      green: {
        DEFAULT: "var(--color-green)",
        900: "var(--color-green-900)",
      },
      blue: {
        400: "var(--color-blue-4)",
      },
      red: {
        DEFAULT: "var(--color-red)",
        900: "var(--color-red-900)",
        100: "var(--color-red-100)",
      },
      secondary: "var(--color-secondary)",
      gray: "var(--color-text-gray)",
      graySecondary: {
        DEFAULT: "var(--color-text-gray-secondary)",
        500: "var(--color-text-gray-secondary-50)",
      },
      accentGray: "var(--color-accent-gray)",
    },
    screens: {
      sm: "500px",

      md: "768px",

      lg: "988px",

      xl: "1280px",

      "2xl": "1536px",

      "height-sm": { raw: "(min-height: 800px)" },
    },
  },
  plugins: [],
};
