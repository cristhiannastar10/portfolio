// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        '1': '1', // Para una proporción 1:1
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};

