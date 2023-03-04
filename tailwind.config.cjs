/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

const myColors = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: colors.slate,
  gray: colors.gray,
  zinc: colors.zinc,
  neutral: colors.neutral,
  stone: colors.stone,
  red: colors.red,
  orange: colors.orange,
  amber: colors.amber,
  yellow: colors.yellow,
  lime: colors.lime,
  green: colors.green,
  emerald: colors.emerald,
  teal: colors.teal,
  cyan: colors.cyan,
  sky: colors.sky,
  blue: colors.blue,
  indigo: colors.indigo,
  violet: colors.violet,
  purple: colors.purple,
  fuchsia: colors.fuchsia,
  pink: colors.pink,
  rose: colors.rose,
};
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      full: "100% 100%",
      "x-full": "100% auto",
      "y-full": "auto 100%",
    },
    fontFamily: {
      navbar: ["Crete Round"],
      majestic: ["Majestic cursive"],
    },
    colors: {
      ...myColors,
      theme: {
        normal: "#4e3123",
        dark: "#382319",
        xdark: "#22140e",
        light: "#69432f",
      },
    },
    extend: {
      animation: {
        shine: "shine 1500ms",
        mybounce: "mybounce 2000ms infinite",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
        mybounce: {
          "0%": {
            transform: "translateY(0)",
          },
          "20%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(0)",
          },
          "80%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(0)",
          },
          "40%": {
            transform: "translateY(-30px)",
          },
          "60%": {
            transform: "translateY(-15px)",
          },
        },
      },
    },
  },
  plugins: [
    // require("flowbite/plugin"),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
};
