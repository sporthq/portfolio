/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)"],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#F17300", // 240,86,199
        primaryDark: "#3E7CB1", // 80,230,217
      },
      keyframes: {
        bounceicon: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translateY(-6px)" },
          "40%": { transform: "translate(0)" },
          "60%": { transform: "translateY(-3px)" },
          "80%": { transform: "translateY(0)" },
        },
      },
      animation: {
        bounceicon: "bounceicon .6s    ",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
  },

  plugins: [],
};
