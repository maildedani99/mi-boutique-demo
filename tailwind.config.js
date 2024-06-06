/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#97B79C",
        secondary: "#819E85",
        text: "#5c5c5c",
      },
      /* fontFamily: {
        Jost: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        body: ["Raleway"],
        total: ["Work Sans"]
      }, */
    },
  },
  plugins: [],
}
