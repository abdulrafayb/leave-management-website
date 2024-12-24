/** @type {import('tailwindcss').Config} */

const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "400px",
      md: "768px",
      lg: "1200px",
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },

    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },

      backgroundColor: {
        "page-bg": "#F1F0F5",
        "header-bg": "#E9E5F1",
        "button-bg": "#2F2F2F",
        "footer-bg": "#2F2F2F",
        "yellow-bg": "#FFC348",
      },

      colors: {
        "-green": "#7FBB86",
        "-yellow": "#FFC348",
        "-gray": "#959595",
        "-dark": "#2F2F2F",
        "-golden": "#D69000",
        "-light-dark": "#747474",
        "-light": "#E6E6E6",
        "-light-golden": "#FFC652",
      },

      borderColor: {
        "-dark": "#2F2F2F",
        "-light": "#D7D7D7",
        "-ring": "#DDDDDD",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".custom-container": {
          maxWidth: "1181px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "6rem",
          paddingBottom: "6rem",
        },
      });
    },
  ],
};

module.exports = tailwindConfig;
