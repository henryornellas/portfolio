import type { Config } from "tailwindcss";

const config: Config = {
  corePlugins: {
    container: false,
  },

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 20px rgba(242,242,247, 0.35)",
          "0 0px 65px rgba(242,242,247, 0.2)"
        ]
      },

      animation: {
        expand: "expand 500ms ease-in-out",
      },

      keyframes: {
        expand: {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "55%": {
            transform: "translateX(-8px)",
          },
          "75%": {
            transform: "translateX(0)",
          },
          "90%": {
            transform: "translateX(1px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
    },
  },

  plugins: [
    function ({ addComponents }: any) {
      addComponents({
        ".container": {
          maxWidth: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen md": {
            maxWidth: "60%",
          },
          "@screen 2xl": {
            maxWidth: "960px",
          },
        },
      })
    },
  ],
};
export default config;
