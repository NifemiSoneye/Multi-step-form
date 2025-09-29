// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        step1: "url('/bg-sidebar-desktop.svg')",
        step2: "url('/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};
