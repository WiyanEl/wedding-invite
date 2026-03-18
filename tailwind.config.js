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
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      'fade-up': {
        '0%': {
          opacity: '0',
          transform: 'translateY(20px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
      'fade-down': {
        '0%': {
          opacity: '0',
          transform: 'translateY(-20px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
      'fade-left': {
        '0%': {
          opacity: '0',
          transform: 'translateX(-20px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)',
        },
      },
      'fade-right': {
        '0%': {
          opacity: '0',
          transform: 'translateX(20px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)',
        },
      },
      'zoom-in': {
        '0%': {
          opacity: '0',
          transform: 'scale(0.95)',
        },
        '100%': {
          opacity: '1',
          transform: 'scale(1)',
        },
      },
    },
    animation: {
      'fade-in': 'fade-in 0.5s ease-out forwards',
      'fade-up': 'fade-up 0.8s ease-out forwards',
      'fade-down': 'fade-down 0.8s ease-out forwards',
      'fade-left': 'fade-left 0.8s ease-out forwards',
      'fade-right': 'fade-right 0.8s ease-out forwards',
      'zoom-in': 'zoom-in 0.5s ease-out forwards',
    },
  },
  plugins: [],
}

