/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      navbar: ["Crete Round"],
      majestic: ["Majestic cursive"],
    },
    colors: {
      ...colors,
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
