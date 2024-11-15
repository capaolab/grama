/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#000000",
          2: "#FFFFFF",
          3: "#FFFFFF",
        },
        secondary: {
          1: "#9dff00",
          2: "#FFFFFF",
          3: "#FFFFFF",
        },
        accent: {
          1: "#000000",
          2: "#FFFFFF",
          3: "#FFFFFF",
        },
        neutral: {
          1: "#ffffff",
          2: "#FFFFFF",
          3: "#FFFFFF",
        },
        disabled: {
          text: "##1e293b",
          bg: "#64748b",
        },
        info: {
          1: "#000000",
          2: "#FFFFFF",
          3: "#FFFFFF",
        },
        success: {
          1: "#000000",
          2: "#FFFFFF",
          3: "#FFFFFF",
        },
        warning: {
          1: "#000000",
          2: "#FFFFFF",
          3: "#FFFFFF",
        },
        error: {
          1: "#000000",
          2: "#FFFFFF",
          3: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
