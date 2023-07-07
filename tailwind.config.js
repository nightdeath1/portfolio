// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '15': '3.75rem', 
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
      },
    },
    fontFamily: {
      signature: ['Great Vibes'],
    },
  },
  plugins: [],
};
