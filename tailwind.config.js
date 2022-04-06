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
      red: {
        DEFAULT: "var(--color-red)",
        900: "var(--color-red-900)",
      },
      secondary: "var(--color-secondary)",
      gray: "var(--color-text-gray)",
      graySecondary: "var( --color-text-gray-secondary)",
      accentGray: "var(--color-accent-gray)",
    },
  },
  plugins: [],
};
