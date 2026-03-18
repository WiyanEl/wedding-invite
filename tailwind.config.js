/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['var(--font-cormorant)'],
        figtree: ['var(--font-figtree)'],
        ibm: ['var(--font-ibm-plex-sans)'],
        cinzel: ['var(--font-cinzel)']
      }
    },
    keyframes: {
      'fade-in': {
        '0%': { opacity: 0, transform: 'scale(0.95)' },
        '100%': { opacity: 1, transform: 'scale(1)' },
      },
      'fade-up': {
        '0%': { opacity: 0, transform: 'translateY(20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
    },
    animation: {
      'fade-in': 'fade-in 0.5s ease-out',
      'fade-up': 'fade-up 0.8s ease-out',
    },
  },
  plugins: [],
}

