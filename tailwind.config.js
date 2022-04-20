module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      bg: {
        primary: "#FFFBEF",
        secondary: "rgb(191, 219, 250)",
        dark:"#4E90A8",
  
      },
      btn: {
        primary: "#376576",
        secondary: "#4E90A8",
        base: "#FFFBEF",
      },
      txt: {
        primary: "#2A220E",
        secondary: "#FFFBEF",
        hint: "#868686",
        black: "#000000",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Poppins"],
        serif: ["Poppins"],
      },
      letterSpacing: {
        primary: "0.03em",
      },
      lineHeight: {
        small: "17px",
        medium: "25px",
        large: "38px",
        extraLarge: "56px",
        extraExLarge: "84px",
      },
    },
  },
  plugins: [],
}
