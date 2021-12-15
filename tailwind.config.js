module.exports = {
  // purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        viasat: 'url("/viasat-image-earth.jpeg")',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover"],
    },
  },
  plugins: [],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
};
