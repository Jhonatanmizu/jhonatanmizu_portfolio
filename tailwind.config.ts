import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Righteous"],
      body: ["Lexend"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "dark", // default theme from the themes object
      defaultExtendTheme: "dark", // default theme to extend on custom themes
      // layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          // layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          // layout: {}, // dark theme layout
          colors: {
            primary: "#222436",
            secondary: "#F2F2F2",
            tertiary: "#BD93F9",
            alt: "#4831D4",
            accent: "#D17A22",
          },
        },
      },
    }),
  ],
};
export default config;
