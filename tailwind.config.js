/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
      'thblack': "040D12",
      'thdarkgreen': "183D3D",
      'thgreen': "5C8374",
      'thgreen-rgba':'rgba(92, 131, 116, 0.3)',
      'thlightgreen': "93B1A6",
      },
    },
  },
  plugins: [],
};
