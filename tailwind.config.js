/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        frame: "var(--frame)",
        panel: "var(--panel)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        pink: "var(--pink)",
        soft: "var(--soft)",
        line: "var(--line)",
        deep: "var(--deep)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
