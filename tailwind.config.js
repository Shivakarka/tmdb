/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGrey: "#E3E3E3",
        darkerGrey: "#C8C8C8",
        vibrantDarkBlue: "#062541",
        vibrantLightBlue: "#0076F1",
        tmdbDarkBlue: "#032541",
        tmdbLightBlue: "#01B4E4",
        tmdbLighterGreen: "#C0FECF",
        tmdbLightGreen: "#1ED5A9",
        tmdbLogoGreen: "#90CEA1",
        tmdbLogoOrange: "#FDC170",
        tmdbLogoRed: "#D93B63",
      },
    },
  },
  plugins: [daisyui],
};
