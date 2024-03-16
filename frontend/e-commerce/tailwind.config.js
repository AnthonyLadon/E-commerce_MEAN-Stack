/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        terraCotta: {
          50: "#F8E6E3",
          100: "#F0C0B5",
          200: "#E99A87",
          300: "#E27459",
          400: "#DA4E2B",
          500: "#D32800",
          600: "#AB2200",
          700: "#7F1A00",
          800: "#531200",
          900: "#270900",
        },
        ambre: {
          50: "#FCDED9",
          100: "#FABFB0",
          200: "#AF6655",
          300: "#AB593F",
          400: "#A44C29",
          500: "#9E3F13",
          600: "#6C2F0F",
          700: "#4F250C",
          800: "#321A08",
          900: "#160D04",
        },
        sable: {
          50: "#FFF3EE",
          100: "#FFE6D9",
          200: "#FFE6D9",
          300: "#FFD4C2",
          400: "#FFC0A8",
          500: "#FFAE8F",
          600: "#FF9B77",
          700: "#FF875E",
          800: "#FF7446",
          900: "#FF602D",
        },
        ocean: {
          50: "#E6EDF3",
          100: "#C0D1E1",
          200: "#005B91",
          300: "#005183",
          400: "#004475",
          500: "#003667",
          600: "#002959",
          700: "#001D4B",
          800: "#00113D",
          900: "#00052F",
        },
      },
    },
  },
  plugins: [],
};
